import styles from './style.module.css';

export default function Header({text}){
    return (
        <div className={styles.nav}>
            <h2>{text}</h2>
        </div>

    )
}