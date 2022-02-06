import React from 'react';
import styles from '../stylesheets/Interests.module.css';

export default function Interest() {
	return (
		<main className={styles.interests}>
			<h2 className={styles.header}>Interests</h2>
			<p className={styles.text}>
				Besides code and design ✧, she likes to take photos of sceneries and
				things ❀, eat and make plant-based recipes, enjoys print material such
				as books and zines, ♡ loves tea and confections, game on her nintendo,
				play chess, explore new locations and always learn new things.
			</p>
		</main>
	);
}
