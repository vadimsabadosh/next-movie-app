import React from 'react'
import styles from './MainScreen.module.scss'
import Button from 'src/components/elements/Button'

const MainScreen: React.FC = () => {
	return (
		<div className={styles.main}>
			<div className={styles.main_titles}>
				<h2 className={styles.main_title}>Night Watch</h2>
				<div className={styles.main_triggers}>
					<div className={styles.main_text}>2021</div>
					<div className={styles.main_limit}>18+</div>
					<div className={styles.main_text}>9 Seasons</div>
					<div className={styles.main_rate}>8.8</div>
				</div>
				<div className={styles.main_description}>
					Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc quis et elit lacinia
					urna.Lorem ipsum dolor sit amet, consectetur adipiscing elit.
				</div>
				<Button>
					<span className={styles.main_button_img}></span>
					Добавить в список желаний
				</Button>
			</div>
		</div>
	)
}

export default MainScreen
