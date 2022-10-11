import { Temporal } from '@js-temporal/polyfill';

export interface TodoItem {
    id: string;
    description: string;
    dueDate: Temporal.ZonedDateTime,
    created: Temporal.ZonedDateTime,
    updated: Temporal.ZonedDateTime
}

export class TodoItem {
    constructor({
        id,
        description,
        dueDate,
        created,
        updated
    }: TodoItem) {
        this.id = id;
        this.description = description;
        this.dueDate = dueDate;
        this.created = created;
        this.updated = updated;
    }
}