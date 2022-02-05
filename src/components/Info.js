import React from 'react';
import email_logo from '../assets/email.png';
import linkedin_logo from '../assets/linkedin.png';
import Yafira from '../assets/yafira.png';
import style from '../stylesheets/Info.module.css';

export default function Info() {
	return (
		<div className={style.container}>
			<header className={style.header}>
				<img className={style.avatar} src={Yafira} alt='Yafira Martinez' />
			</header>
			<div className={style.bio}>
				<h1 className={style.name}>Yafira Martinez</h1>
				<p className={style.title}>Developer and Designer</p>
				<p className={style.small}>Portfolio:</p>
				<a
					target='_blank'
					rel='noopener noreferrer'
					className={`${style.links}`}
					href='https://yafira.github.io/'
				>
					yafira.github.io
				</a>
				<div className={style.contacts}>
					<a
						target='_blank'
						rel='noopener noreferrer'
						className={`${style.links} ${style.email}`}
						href='mailto:yfr.mrtnz@gmail.com'
					>
						<img className={style.icons} src={email_logo} alt='' /> Email
					</a>
					<a
						target='_blank'
						rel='noopener noreferrer'
						className={`${style.links} ${style.linkedin}`}
						href='https://www.linkedin.com/in/yafira/'
					>
						<img className={style.icons} src={linkedin_logo} alt='' />
						LinkedIn
					</a>
				</div>
			</div>
		</div>
	);
}
