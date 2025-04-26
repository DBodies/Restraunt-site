import styles from '../firstSectionComponents/firstSection.module.scss'
import Title_text from '../firstSectionComponents/title&text/title&text'
import Dish from '../seasons&dish/dish'
import Seasoning from '../seasons&dish/seasoning'




export default function First() {
    return (
        <section className={styles.first_section}>
            <div className={styles.container}>
                <Title_text/>
                <Dish/>
                <Seasoning />
            </div>
        </section>
    )
}
