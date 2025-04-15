import styles from './firstSection.module.scss'
import Title_text from './title&text'


export default function First() {
    return (
        <section className={styles.first_section}>
            <div className={styles.container}>
               <Title_text />
            </div>
        </section>
    )
}