import Burger from './burger-menu'
import List from './header-list'
import styles from './header.module.scss'
import Logo from './logo'

export default function Header() {
    return (
        <header className={styles.header}>
            <div className={styles.container}>
                <div className={styles.container_wrapper}>
                    <Logo />
                    <Burger/>
                    <List />
                    </div>
            </div>
        </header>
    )
}