import { Injectable } from '@nestjs/common';
import { Todo } from './todo.interface';

@Injectable()
export class TodoService {
  private storage: Todo[] = [];

  findOne(id: number): Todo {
    return this.storage.find((t: Todo) => t.id === id);
  }

  create(todo: Todo): void {
    const currentMaxId =
      this.storage.length !== 0
        ? Math.max(...this.storage.map((t: Todo) => t.id))
        : 0;
    todo.id = currentMaxId + 1;
    this.storage.push(todo);
  }

  getAll(): Todo[] {
    return this.storage;
  }
}
