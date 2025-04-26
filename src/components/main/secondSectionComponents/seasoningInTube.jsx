import styles from './seasoningInTube.module.scss'
import seasoningInTube1x from './secondSectionImg/seasoningInTube1x.jpg'

export default function SeasoningsInTube() {
    
    return (
        <div className={styles.wrapperFoSeasonings}>
<p className={styles.textUpperSeasonings}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Neque congue arcu</p>
<img src={seasoningInTube1x} alt="" />
        </div>
    )
}