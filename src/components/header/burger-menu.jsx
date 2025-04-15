import styles from './header.module.scss'

const Burger = () => {
    return (
        <>
            <button className={styles.buttonBurger} type="button">
        <svg className={styles.svgBurger}> 
            <use href="/sprite.svg#icon-StrokesMenu"></use>
                </svg>
                </button>
        </>
    )
}
export default Burger