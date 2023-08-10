import React from "react";
import Image from 'next/image'

import { CardProps, CategoriesSectionProps } from "@/interfaces/CategoreSection";

import styles from "./styles.module.css";

const Card = ({ type }: CardProps) => {
	const handleScrollClick = () => {
		const element = document.getElementById(type.id);

		if (element) {
			element.scrollIntoView({ behavior: 'smooth', block: 'start' });
		}
	};

	return (
		<div className={styles.containerCard}>
			<Image
				src={type.coverImage.url}
				width={50}
				height={50}
				alt={type.coverImage.alt || 'imagem'}
				className={styles.cardImage}
			/>
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
				{allTypes.map((type) => (
					<Card key={type.id} type={type} />
				))}
			</div>
		</div>
	);
}

export default CategoriesSection;