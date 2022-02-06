import React from 'react';
import style from '../stylesheets/Interests.module.css';

export default function Interest() {
	return (
		<main className={style.interests}>
			<h2 className={style.header}>Interests</h2>
			<p className={style.text}>
				Besides code and design ✧, she likes to take photos of sceneries and
				things ❀, eat and make plant-based recipes, enjoys print material such
				as books and zines, ♡ loves tea and confections (like wagashi!), game on
				her nintendo, play chess, explore new locations ✶ and always learn new
				things.
			</p>
		</main>
	);
}
