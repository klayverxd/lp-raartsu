export interface ImagesProps {
  id: string;
  url: string;
  alt: string;
}

export interface TypeProps {
  id: string;
  name: string;
  price: string;
  coverImage: ImagesProps;
  images: ImagesProps[];
}

export interface TopicProps {
  topic: string;
  description: string;
}

export interface InfoProps {
  id: string;
  title: string;
  topics: TopicProps[];
}
