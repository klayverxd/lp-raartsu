import styles from '@/styles/Home.module.css'

import { GetStaticProps, InferGetStaticPropsType } from 'next'
import { getAllInfos, getAllTypes } from './api/datocms'

import Image from 'next/image';

import Header from '@/components/Header';
import Sky from '@/components/Sky';
import CategoriesSection from '@/components/CategoriesSection';
import IndividualSectionScroll from '@/components/IndividualSectionScroll';
import InfosSection from '@/components/InfosSection';
import Footer from '@/components/Footer';

import waveLilac from '../../public/images/waveLilac.svg'
import waveGreen from '../../public/images/waveGreen.svg'

import { InfoProps, TypeProps } from '@/interfaces/Home';

export default function Home({
  allTypes,
  allInfos,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  return (
    <div className={styles.container}>
      <Header />
      <Sky />

      <Image
        src={waveLilac}
        alt="Imagem Wave"
        className={styles.waveImage}
      />

      <div className={styles.containerLilac}>
        <CategoriesSection allTypes={allTypes} />

        {allTypes.map((type: TypeProps) => (
          <IndividualSectionScroll key={type.id} type={type} />
        ))}

        <Image
          src={waveGreen}
          alt="Imagem Wave"
          className={styles.waveImage}
        />
      </div>



      <div className={styles.containerGreen}>
        <InfosSection allInfos={allInfos} />
      </div>

      <Footer />
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
