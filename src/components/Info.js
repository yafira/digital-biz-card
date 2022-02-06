import React from 'react';
import email_logo from '../assets/email.png';
import linkedin_logo from '../assets/linkedin.png';
import Yafira from '../assets/yafira.png';
import styles from '../stylesheets/Info.module.css';

export default function Info() {
	return (
		<div className={styles.container}>
			<header className={styles.header}>
				<img className={styles.avatar} src={Yafira} alt='Yafira Martinez' />
			</header>
			<div className={styles.bio}>
				<h1 className={styles.name}>Yafira Martinez</h1>
				<p className={styles.title}>Developer and Designer</p>
				<p className={styles.small}>Portfolio ↴</p>
				<a
					target='_blank'
					rel='noopener noreferrer'
					className={`${styles.links} ${styles.portfolio}`}
					href='https://yafira.github.io/'
				>
					yafira.github.io
				</a>
				<div className={styles.contacts}>
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
