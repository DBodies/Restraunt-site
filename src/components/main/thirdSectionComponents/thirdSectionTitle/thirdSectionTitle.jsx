import styles from './thirdSectionTitle.module.scss'

export default function ThirdSectionTitle() {
    
    return (
        <div className={styles.wrapperForTitle}>
            <h2 className={styles.thirdSectionTitle}>Our Menu</h2>
            <p className={styles.thirdSectionText}>This is a section of your menu. Give your section a brief description</p>
        </div>
    )
}