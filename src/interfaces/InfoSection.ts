import { InfoProps } from "./Home";

export interface InfoSectionProps {
	allInfos: InfoProps[];
}

export interface InfoContainerProps {
	info: InfoProps
}

export interface InfoTopicProps {
	topic?: string;
	description: string
}
