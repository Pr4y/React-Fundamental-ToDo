import styles from './style.module.css'

export default function TodoList({list}) {
    return(
        <div className={styles.box}>
            {list.map( (item) => (
                <div className={styles.list} key={item.id} style={item.completed ? {textDecoration: "line-through"} : null}>
                    {item.title}
                </div>
            ))}
        </div>
    )
}