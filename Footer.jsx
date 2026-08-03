import styles from "./Footer.module.css";
export default function Footer({
  completedTodos,
  totalTodos,
  notcompletedTodos,
}) {
  return (
    <footer className={styles.footer}>
      <p>
        Total Todos: <strong>{totalTodos}</strong> | Completed Todos:{" "}
        <strong>{completedTodos}</strong> | Pending Todos:{" "}
        <strong>{notcompletedTodos}</strong>
      </p>

      <p>© {new Date().getFullYear()} My Todo List App | Built with React ❤️</p>
    </footer>
  );
}
