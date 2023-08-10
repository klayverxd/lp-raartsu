import styles from '@/styles/Home.module.css'

import { GetStaticProps, InferGetStaticPropsType } from 'next'
import { getAllTypes } from './api/datocms'

import Header from '@/components/Header';
import Sky from '@/components/Sky';
import CategoriesSection from '@/components/CategoriesSection';
import IndividualSectionScroll from '@/components/IndividualSectionScroll';
import InfosSection from '@/components/InfosSection';

import { TypeProps } from '@/interfaces/Home';

export default function Home({
  allTypes,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  return (
    <div className={styles.container}>
      <Header />
      <Sky />
      <CategoriesSection allTypes={allTypes} />

      {allTypes.map((type: TypeProps) => (
        <IndividualSectionScroll key={type.id} type={type} />
      ))}

      <InfosSection />
    </div>
  )
}

export const getStaticProps: GetStaticProps<{
  allTypes: TypeProps[]
}> = async () => {
  const allTypes = await getAllTypes();

  return {
    props: {
      allTypes,
    },
    revalidate: 120,
  };
};
