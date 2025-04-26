import Flowers from './flower/flower'
import styles from './thirdSection.module.scss'
import ThirdSectionTitle from './thirdSectionTitle/thirdSectionTitle'

export default function ThirdSection() {
    
    return (
        <section className={styles.thirdSection}>
            <Flowers/>
            <div className={styles.container}>
<ThirdSectionTitle/>
            </div>
        </section>
    )
}