import styles from './dishAndDiet.module.scss'
import seaDish from './secondSectionImg/seaDish.jpg'


export default function DishAndDiet() {


    return (
        <div className={styles.wrapperForDishAndText}>
<img src={seaDish} alt="" />
        <p  className={styles.textDiet} >Start to plan your diet today</p>
        <p className={styles.textUnderDiet} > Lorem ipsum dolor sit amet, consectetur adipiscing elit. Neque congue arcu</p>
    </div>
       )
}