import LinkButton from "../LinkButton"
import Title from "../Title"
import ProfileSection from "./ProfileSection"
import styles from "./styles.module.css"

function handleClick(ev) {
        console.log(ev)
        alert("Você agora está seguindo")
    }

export default function Profile(props) {
    
    return (
        <div className={styles.container}>
              <Title>
                <span>{props.name}</span>
                <button
                className={styles.followButton}
                    onClick={handleClick}
                >
                    Follow
                </button>
              </Title>
            <ProfileSection>{props.bio}</ProfileSection>
            <ProfileSection>{props.email}</ProfileSection>
            <ProfileSection>{props.phone}</ProfileSection>
            <ProfileSection
                className={styles.btn}
                id="links-section"
                data-test="some value"
                aria-label="social links"
            >
                    <LinkButton href={props.linkdinUrl}>LinkdIn</LinkButton>
                    <LinkButton href={props.githubUrl}>GitHub</LinkButton>
                    <LinkButton href={props.instagramUrl}>Instagram</LinkButton>
            </ProfileSection>
        </div>
    )
}