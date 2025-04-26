import styles from '../firstSection.module.scss' 


const Title_text = () => {

    const Dashes = ({ count = 14 }) => {
        return <span className={styles.dashes}>{" - ".repeat(count)}</span>
    }

    return (
        <div className={styles.wrapperForText}>
            <h1 className={styles.title}>Healthy Eating is important part of lifestyle</h1>
            <div className={styles.wrapperForDscr}></div>
            <p className={styles.text}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Neque congue arcu</p>
            <p className={styles.verticalText}>Scroll <Dashes/> </p>
    </div>
            )
    
}

export default Title_text

