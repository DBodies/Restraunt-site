import styles from './header.module.scss'

const List = () => {
    return (
        <>
        <ul className={styles.header_list}>
            <li className={styles.number}><a href="tel:+86852346000">+86 852 346 000</a></li>
            <li className={styles.reservation_link}><a href="">Reservation</a></li>
        </ul>
        </>
    )
}
export default List