import React from 'react';
import styles from '../stylesheets/About.module.css';

export default function About() {
	return (
		<main className={styles.about}>
			<h2 className={styles.header}>About</h2>
			<p className={styles.text}>
				Yafira Martinez is a front-end software engineer and UX designer with an
				interest in computing, design, emerging technologies, and the
				intersection of technology and art. Her goal is to build tools that help
				people and to improve and expand the interaction between humans and
				computers.
			</p>
		</main>
	);
}
