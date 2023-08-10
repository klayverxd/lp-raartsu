import React from "react";
import Image from 'next/image'

import styles from "./styles.module.css";

import { IndividualSectionScrollProps } from "@/interfaces/IndividualSectionScrollProps";
import { ImagesProps } from "@/interfaces/Home";

function IndividualSectionScroll({ type }: IndividualSectionScrollProps) {

	return (
		<div className={styles.container} id={type.id}>
			<h2>{type.name} {type.price}</h2>

			<div
				className={styles.containerImagesSlider}
			>
				{type.images.map((image: ImagesProps) =>
					<div key={image.id} className={styles.containerImageSlider}>
						<Image
							className={styles.imageSlider}
							src={image.url}
							alt={image.alt || 'image'}
							layout="fill"
						/>
					</div >
				)}
			</div >
		</div >
	);
}

export default IndividualSectionScroll;
