import React from "react";
import Image from 'next/image'

import cloud from '../../../public/images/cloud.png'
import sun from '../../../public/images/sun.png'

import styles from "./styles.module.css";

function Sky() {
	return (
		<div className={styles.containerSky}>
			<div className={styles.leftSection}>
				<Image
					src={cloud}
					alt="Imagem Nuvem"
					className={styles.cloudImage}
				/>

				<h1 className={styles.skyText}>
					Sou uma artista que espera viver disso um dia, não custa nada sonhar né?
				</h1>
			</div>

			<div className={styles.rightSection}>
				<Image
					src={sun}
					alt="Imagem Sol"
					className={styles.sunImage}
				/>
			</div>
		</div>
	);
}

export default Sky;
