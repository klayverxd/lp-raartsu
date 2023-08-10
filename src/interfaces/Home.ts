export interface ImagesProps {
  id: string;
  url: string;
  alt: string;
}

export interface AllTypesProps {
  id: string;
  name: string;
  price: string;
  coverImage: ImagesProps;
  images: ImagesProps[];
}
