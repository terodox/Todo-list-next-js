import { TodoItem } from '../models/todo-item';
import { Temporal } from '@js-temporal/polyfill';

let instance: TodoRepository;

export class TodoRepository {
    private constructor() {}

    public static getInstance() {
        if(!instance) {
            instance = new TodoRepository();
        }
        return instance;
    }

    getTodos(): TodoItem[] {
        return [
            {
                id: 'one',
                description: 'Something awesome',
                dueDate: Temporal.Now.zonedDateTime(Temporal.Calendar.from('iso8601')),
                created: Temporal.Now.zonedDateTime(Temporal.Calendar.from('iso8601')),
                updated: Temporal.Now.zonedDateTime(Temporal.Calendar.from('iso8601')),
            },
            {
                id: 'two',
                description: 'Something else awesome',
                dueDate: Temporal.Now.zonedDateTime(Temporal.Calendar.from('iso8601')),
                created: Temporal.Now.zonedDateTime(Temporal.Calendar.from('iso8601')),
                updated: Temporal.Now.zonedDateTime(Temporal.Calendar.from('iso8601')),
            },
            {
                id: 'three',
                description: 'Something even more awesome',
                dueDate: Temporal.Now.zonedDateTime(Temporal.Calendar.from('iso8601')),
                created: Temporal.Now.zonedDateTime(Temporal.Calendar.from('iso8601')),
                updated: Temporal.Now.zonedDateTime(Temporal.Calendar.from('iso8601')),
            }
        ];
    }
}