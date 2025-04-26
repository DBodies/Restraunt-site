import styles from '../firstSectionComponents/firstSection.module.scss';
import firstSeasoning from './imgSeasoning/firstSeasoning.jpg'
import secondSeasoning from './imgSeasoning/secondSeasoning.jpg'
import thirdSeasoning from './imgSeasoning/thirdSeasoning.jpg'
 
const Seasoning = () => {
    return (
        <>
        <ul className={styles.listSeasoning}>
            <li className={styles.seasoningsItem}><img src={firstSeasoning} alt="" /></li>
            <li className={styles.seasoningsItem}><img src={secondSeasoning} alt="" /></li>
            <li className={styles.seasoningsItem}><img src={thirdSeasoning} alt="" /></li>
        </ul>
        </>
    )
}
export default Seasoning