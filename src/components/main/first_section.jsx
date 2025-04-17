import styles from './firstSection.module.scss'
import Dish from './seasons&dish/dish'
import Seasoning from './seasons&dish/seasoning'
import Title_text from './title&text/title&text'



export default function First() {
    return (
        <section className={styles.first_section}>
            <div className={styles.container}>
                <Title_text />
                <Dish/>
                <Seasoning/>
            </div>
        </section>
    )
}