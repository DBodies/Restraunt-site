import styles from '../firstSectionComponents/firstSection.module.scss';
import firstDish from './imgSeasoning/firstDish.jpg'


const Dish = () => {
    return (
        <div className={styles.wrapperForDish}>
        <img className={styles.dish} src={firstDish} alt="Dish" />
        </div>
    )
}
export default Dish