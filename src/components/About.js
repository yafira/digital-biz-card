import React from 'react';
import style from '../stylesheets/About.module.css';

export default function About() {
	return (
		<main className={style.about}>
			<h2 className={style.header}>About</h2>
			<p className={style.text}>
				Yafira Martinez is a creative software engineer and designer with an
				interest in computing, design, emerging technologies, and the
				intersection of technology and art. Her goal is to build tools that help
				people and to improve and expand the interaction between humans and
				computers.
			</p>
		</main>
	);
}
