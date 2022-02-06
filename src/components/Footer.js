import React from 'react';
import github_logo from '../assets/github.png';
import dribbble_logo from '../assets/dribbble.png';
import style from '../stylesheets/Footer.module.css';

export default function Footer() {
	return (
		<footer className={style.footer}>
			<div className={style.social}>
				<a
					target='_blank'
					rel='noopener noreferrer'
					className={style.links}
					href='www.github.com/yafira'
				>
					<img
						src={github_logo}
						alt="Click to open Yafira's GitHub"
						className={style.social_icons}
					/>
					<a
						target='_blank'
						rel='noopener noreferrer'
						className={style.links}
						href='www.dribbble.com/y-fi'
					>
						<img
							src={dribbble_logo}
							alt="Click to open Yafira's Dribbble"
							className={style.social_icons}
						/>
					</a>
				</a>
			</div>
		</footer>
	);
}
