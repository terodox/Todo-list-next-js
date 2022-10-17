import type { NextPage } from 'next'
import { TodoItem } from '../models/todo-item';
import { TodoRepository } from '../services/todo-repository';
import TodoItemView from './components/todo-item/todo-item';

const Home: NextPage = () => {
  const todoRepository = TodoRepository.getInstance();

  return (
    <div>
      <header>
        <h1>TodoList</h1>
      </header>
      <main>
        {todoRepository.getTodos().map((todoItem: TodoItem) => {
          return <TodoItemView key={todoItem.id} {...{todoItem}} />;
        })}
      </main>
    </div>
  )
}

export default Home
