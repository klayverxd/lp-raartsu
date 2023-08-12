import React, { useState } from "react";
import Image from 'next/image'

import logo from '../../../public/images/logo.png'
import signature from '../../../public/images/signature.svg'

import insta_icon from '../../../public/images/social-medias/insta_icon.svg'
import tiktok_icon from '../../../public/images/social-medias/tiktok_icon.svg'
import mail_icon from '../../../public/images/social-medias/mail_icon.svg'

import styles from "./styles.module.css";

function Modal() {
	const [isModalOpen, setModalOpen] = useState(false);

	const toggleModal = () => {
		setModalOpen(!isModalOpen);
	};

	return (
		<>
			<button onClick={toggleModal} className={styles.buttonModal}>
				☰
			</button>

			{isModalOpen && <div className={styles.conainerModal}>
				<div className={styles.contentModal}>
					<nav className={styles.navSocialMediaModal}>
						<a href="https://www.instagram.com/raartsu/"
							className={styles.socialMediaLink}
							target="_blank">
							<h3 className={styles.navTextModal}>
								Instagram
							</h3>
							<Image
								src={insta_icon}
								alt="insta icon"
								className={styles.socialMediaIcon}

							/>
						</a>
						<a href="https://www.tiktok.com/@raartsu"
							className={styles.socialMediaLink}
							target="_blank">
							<h3 className={styles.navTextModal}>
								Tiktok
							</h3>
							<Image
								src={tiktok_icon}
								alt="tiktok icon"
								className={styles.socialMediaIcon}

							/>
						</a>
						<a href="mailto:raquel0x0@gmail.com"
							className={styles.socialMediaLink}
							target="_blank">
							<h3 className={styles.navTextModal}>
								E-mail
							</h3>
							<Image
								src={mail_icon}
								alt="mail icon"
								className={styles.socialMediaIcon}

							/>
						</a>
					</nav>

					<button className={styles.buttonModal} onClick={toggleModal}>&#215;</button>
				</div>
			</div>}
		</>
	)
}

function Header() {
	return (
		<header className={styles.headerContainer}>
			<div className={styles.authorSection}>
				<Image
					src={logo}
					alt="Logo raartsu"
					className={styles.logoImage}
				/>
				<Image
					src={signature}
					alt="Signature raartsu"
					className={styles.signatureImage}
				/>
			</div>

			<Modal />
			<nav className={styles.navSocialMedia}>
				<a href="https://www.instagram.com/raartsu/"
					className={styles.socialMediaLink}
					target="_blank">
					<Image
						src={insta_icon}
						alt="insta icon"
						className={styles.socialMediaIcon}

					/>
				</a>
				<a href="https://www.tiktok.com/@raartsu"
					className={styles.socialMediaLink}
					target="_blank">
					<Image
						src={tiktok_icon}
						alt="tiktok icon"
						className={styles.socialMediaIcon}

					/>
				</a>
				<a href="mailto:raquel0x0@gmail.com"
					className={styles.socialMediaLink}
					target="_blank">
					<Image
						src={mail_icon}
						alt="mail icon"
						className={styles.socialMediaIcon}

					/>
				</a>
			</nav>
		</header>
	);
}

export default Header;
