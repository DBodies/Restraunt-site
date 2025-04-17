import styles from '../components/main/firstSection.module.scss' 

const Dashes = ({ count = 15 }) => {
    return <span className={styles.dashes}>{" - ".repeat(count)}</span>
}
export default Dashes