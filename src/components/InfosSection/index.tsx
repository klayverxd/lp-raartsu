import React from "react";

import { InfoContainerProps, InfoSectionProps, InfoTopicProps } from "@/interfaces/InfoSection";

import styles from "./styles.module.css";
import { InfoProps, TopicProps } from "@/interfaces/Home";

const InfoContainer = ({ info }: InfoContainerProps) => {
	return (
		<div className={styles.containerInfo}>
			<h2 className={styles.infoHeaderText}>{info.title}</h2>
			{info.topics.map((topic: TopicProps) => (
				<InfoTopic
					key={topic.topic}
					topic={topic.topic}
					description={topic.description}
				/>
			))}
		</div>
	)
}

const InfoTopic = ({ topic, description }: InfoTopicProps) => {
	const descriptionLines = description.split('\n');

	return (
		<div className={styles.contentInfo}>
			<h3 className={styles.infoTopicText}>{topic}</h3>
			{descriptionLines.map((line: string, index: number) => (
				<h4 key={index} className={styles.infoDescriptionText}>{line}</h4>
			))}
		</div>
	)
}

const DottedDivider = () => <hr className={styles.hr} />

function InfosSection({ allInfos }: InfoSectionProps) {
	return (
		<div className={styles.containerInfos}>
			<h1>Informações adicionais</h1>

			<div className={styles.contentInfos}>
				{allInfos.map((info: InfoProps) => (
					<>
						<InfoContainer info={info} />
						<DottedDivider />
					</>
				))}
			</div>
		</div>
	);
}

export default InfosSection;
