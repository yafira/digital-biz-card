import React from 'react';
import github_logo from '../assets/github.png';
import dribbble_logo from '../assets/dribbble.png';
import wordpress_logo from '../assets/wordpress.png';
import styles from '../stylesheets/Footer.module.css';

export default function Footer() {
	return (
		<footer className={styles.footer}>
			<div className={styles.social}>
				<a
					target='_blank'
					rel='noopener noreferrer'
					className={styles.links}
					href='https://www.github.com/yafira'
				>
					<img
						src={github_logo}
						alt="Click to open Yafira's GitHub"
						className={styles.social_icons}
					/>
				</a>
				<a
					target='_blank'
					rel='noopener noreferrer'
					className={styles.links}
					href='https://www.dribbble.com/y-fi'
				>
					<img
						src={dribbble_logo}
						alt="Click to open Yafira's Dribbble"
						className={styles.social_icons}
					/>
				</a>
				<a
					target='_blank'
					rel='noopener noreferrer'
					className={styles.links}
					href='https://elqtrct.wordpress.com/'
				>
					<img
						src={wordpress_logo}
						alt="Click to open Yafira's Wordpress Blog"
						className={styles.social_icons}
					/>
				</a>
			</div>
		</footer>
	);
}
