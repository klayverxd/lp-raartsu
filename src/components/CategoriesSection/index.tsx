import React from "react";
import Image from 'next/image'

import { CardProps, CategoriesSectionProps } from "@/interfaces/CategoreSection";

import styles from "./styles.module.css";
import { TypeProps } from "@/interfaces/Home";

const Card = ({ type }: CardProps) => {
	const handleScrollClick = () => {
		const element = document.getElementById(type.id);

		if (element) {
			element.scrollIntoView({ behavior: 'smooth', block: 'start' });
		}
	};

	return (
		<div className={styles.containerCard}>
			<div className={styles.containerImageCard}>
				<Image
					src={type.coverImage.url}
					alt={type.coverImage.alt || 'imagem'}
					className={styles.cardImage}
					layout="fill"
				/>
			</div>
			<button type="button" className={styles.cardButton} onClick={handleScrollClick}>
				<h2>{type.name}</h2>
			</button>
		</div>
	)
}

function CategoriesSection({ allTypes }: CategoriesSectionProps) {
	return (
		<div className={styles.container}>
			<h2>Me apoie encomendando uma arte abaixo:</h2>

			<div className={styles.containerCards}>
				{allTypes.map((type: TypeProps) => (
					<Card key={type.id} type={type} />
				))}
			</div>
		</div>
	);
}

export default CategoriesSection;
