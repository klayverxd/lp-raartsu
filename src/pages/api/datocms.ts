import { TypeProps } from "@/interfaces/Home";

const API_URL = 'https://graphql.datocms.com/';
const API_TOKEN = process.env.DATOCMS_READ_ONLY_API_TOKEN;

export const performRequest = async (
	query: string,
	{variables}: any = {}
) => {
	const response = await fetch(API_URL, {
		method: "POST",
		headers: {
			"Content-Type": "application/json",
			Authorization: `Bearer ${API_TOKEN}`,
		},
		body: JSON.stringify({ query, variables }),
	});
	const responseBody = await response.json();

	if (!response.ok) {
		throw new Error(
			`${response.status} ${response.statusText}: ${JSON.stringify(
				responseBody
			)}`
		);
	}

	return responseBody.data;
};

export async function getAllTypes(): Promise<TypeProps[]> {
  const data = await performRequest(`
		{
			allTypes {
				id
				name
				price
				images {
					id
					alt
					url
				}
				coverImage {
					id
					alt
					url
				}
			}
		}
  `);

  return data.allTypes;
}

const exportObject = {getAllTypes}

export default exportObject
