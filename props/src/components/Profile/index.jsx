import { useState } from "react"
import LinkButton from "../LinkButton"
import Title from "../Title"
import ProfileSection from "./ProfileSection"
import styles from "./styles.module.css"


export default function Profile(props) {
    //[valor, funcaoModificadora]
    const [followText, setFollowText] = useState("Follow")

    function handleClick(ev) {
        alert("Você agora está seguindo")
        setFollowText("Following")
    }

    return (
        <div className={styles.container}>
              <Title>
                <span>{props.name}</span>
                <button
                className={styles.followButton}
                    onClick={handleClick}
                >
                    {followText}
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