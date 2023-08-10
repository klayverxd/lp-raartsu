import React from "react";

import { InfoContainerProps, InfoTopicProps } from "@/interfaces/InfoSection";

import styles from "./styles.module.css";

const InfoContainer = ({ textHeader, children }: InfoContainerProps) => {
	return (
		<div className={styles.containerInfo}>
			<h2 className={styles.infoHeaderText}>{textHeader}</h2>
			{children}
		</div>
	)
}

const InfoTopic = ({ topic, description }: InfoTopicProps) => {
	return (
		<div className={styles.contentInfo}>
			<h3 className={styles.infoTopicText}>{topic}</h3>
			<h4 className={styles.infoDescriptionText}>{description}</h4>
		</div>
	)
}

const DottedDivider = () => <hr className={styles.hr} />

function InfosSection() {
	return (
		<div className={styles.containerInfos}>
			<h1>Informações adicionais</h1>

			<div className={styles.contentInfos}>
				<InfoContainer textHeader="Sobre o processo">
					<InfoTopic
						topic='Como encomenda?'
						description='Mande uma mensagem para meu e-mail ou para minha DM no Instagram.'
					/>
					<InfoTopic
						topic='Como funciona?'
						description='Você irá me informar como deseja o desenho: referências, cores, pose.'
					/>
				</InfoContainer>
				<DottedDivider />
				<InfoContainer textHeader="Sobre a arte">
					<InfoTopic
						topic='Faço:'
						description='Oc&lsquo;s'
					/>
					<InfoTopic
						topic='Como funciona?'
						description='Você irá me informar como deseja o desenho: referências, cores, pose.'
					/>
				</InfoContainer>
			</div>
		</div>
	);
}

export default InfosSection;
