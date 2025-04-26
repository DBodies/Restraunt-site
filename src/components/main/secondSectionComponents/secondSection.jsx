import DishAndDiet from './dishAndDiet'
import SeasoningsInTube from './seasoningInTube'
import styles from './secondSection.module.scss'


export default function SecondSection() {
    return (
        <section className={styles.SecondSection}>
            <div className={styles.container}>
                <DishAndDiet/>
                <SeasoningsInTube/>
            </div>
            </section>
    )
}