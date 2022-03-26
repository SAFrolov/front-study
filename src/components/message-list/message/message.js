import classNames from "classnames"
import styles from './message.module.css'

export const Message = ({message}) => {
    return (
        <div className={classNames(styles.message, {
            [styles.userMessage] : message.authter === "User",
            [styles.botMessage] : message.authter === "Bot"
        })}>
            <h3>{message.message}</h3>
            <p>{message.authter}</p>
            <p>12:03</p>
            <hr/>
        </div>
    )
}