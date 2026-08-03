//T-39 part-12
import styles from "./todoitem.module.css";
export default function Todoitem({ item, todos, setTodos }) {
  //Inline Css
  //   const header = { color: "red", fontSize: "15px" };
  //   <h1 style={header}>Inline CSS</h1>;
  //   <h1 style={{ color: "red", fontSize: "15px" }}>Inline CSS</h1>;
  function handledelete(item) {
    setTodos(todos.filter((todo) => todo !== item));
  }
  function handleClick(name) {
    setTodos(
      todos.map((todo) =>
        todo.name === name ? { ...todo, done: !todo.done } : todo,
      ),
    );
  }
  const classNamecross = item.done ? styles.completed : "";
  return (
    <div className={styles.item}>
      <div className={styles.itemName}>
        <span className={classNamecross} onClick={() => handleClick(item.name)}>
          {item.name}
        </span>
        <span>
          <button
            onClick={() => handledelete(item)}
            className={styles.deletebutton}
          >
            x
          </button>
        </span>
      </div>
      <hr className={styles.line} />
    </div>
  );
}
