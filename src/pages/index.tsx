import styles from '@/styles/Home.module.css'

import { GetStaticProps, InferGetStaticPropsType } from 'next'
import { getAllInfos, getAllTypes } from './api/datocms'

import Header from '@/components/Header';
import Sky from '@/components/Sky';
import CategoriesSection from '@/components/CategoriesSection';
import IndividualSectionScroll from '@/components/IndividualSectionScroll';
import InfosSection from '@/components/InfosSection';

import { InfoProps, TypeProps } from '@/interfaces/Home';

export default function Home({
  allTypes,
  allInfos,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  return (
    <div className={styles.container}>
      <Header />
      <Sky />
      <CategoriesSection allTypes={allTypes} />

      {allTypes.map((type: TypeProps) => (
        <IndividualSectionScroll key={type.id} type={type} />
      ))}

      <InfosSection allInfos={allInfos} />
    </div>
  )
}

export const getStaticProps: GetStaticProps<{
  allTypes: TypeProps[]
  allInfos: InfoProps[]
}> = async () => {
  const allTypes = await getAllTypes();
  const allInfos = await getAllInfos();

  return {
    props: {
      allTypes,
      allInfos
    },
    revalidate: 120,
  };
};
