import styles from "./styles.module.css"

export default function Profile(props) {
    return (
        <div className={styles.container}>
            <h2 className={styles.name}>{props.name}</h2>
            <div className={styles.bio}>{props.bio}</div>
            <div className={styles.email}>{props.email}</div>
            <div className={styles.phone}>{props.phone}</div>
            <div className={styles.btn}>
                <a href={props.linkdinUrl}>LinkdIn</a>
                <a href={props.githubUrl}>GitHub</a>
                <a href={props.instagramUrl}>Instagram</a>
            </div>
        </div>
    )
}