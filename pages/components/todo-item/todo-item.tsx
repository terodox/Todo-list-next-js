import { TodoItem } from '../../../models/todo-item';
import styles from '../../../styles/todo-item.module.css';

interface TodoItemViewProps {
    todoItem: TodoItem;
}

const TodoItemView = (props: TodoItemViewProps) => {
    return <div>
        <div className={styles.description}>{ props.todoItem.description }</div>
        <div className={styles.dueDate}>{ props.todoItem.dueDate.toString() }</div>
    </div>;
}

export default TodoItemView;