import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom'; // Provides custom matchers
import ToDo, { sortData, TodoItemData } from './ToDoList'; // Adjust the import path as needed
import moment from 'moment';

const current = moment('2010-06-15'); // Fixed "now" date of June 15, 2010

describe('<TodoList /> sortData function', () => {

    it('should place completed tasks at the bottom', () => {
      const now = current.clone();
        const futureDate = now.add(1, 'day').toISOString();
        const overdueDate = now.subtract(1, 'day').toISOString();

        const data: TodoItemData[] = [
            { id: '1', description: 'Completed Task 1', isComplete: true, dueDate: futureDate },
            { id: '2', description: 'Overdue Task', isComplete: false, dueDate: overdueDate },
            { id: '3', description: 'Completed Task 2', isComplete: true, dueDate: futureDate },
        ];

        const result = sortData(data, now);
        expect(result[0].description).toBe('Overdue Task'); // Overdue task should come first
        expect(result[1].description).toBe('Completed Task 1'); // Completed tasks should come last
        expect(result[2].description).toBe('Completed Task 2');
    });

    it('should handle tasks without due dates by placing them after tasks with due dates', () => {
      const now = current.clone();
        const futureDate = now.add(2, 'days').toISOString();

        const data: TodoItemData[] = [
            { id: '1', description: 'Task with no due date', isComplete: false, dueDate: null },
            { id: '2', description: 'Future Task', isComplete: false, dueDate: futureDate },
        ];

        const result = sortData(data, now);
        expect(result[0].description).toBe('Future Task'); // Task with due date comes first
        expect(result[1].description).toBe('Task with no due date');
    });

    it('should handle tasks with both completed and overdue states correctly', () => {
      const now = current.clone();
        const overdueDate = now.subtract(3, 'days').toISOString();
        const futureDate = now.add(3, 'days').toISOString();

        const data: TodoItemData[] = [
            { id: '1', description: 'Completed Future Task', isComplete: true, dueDate: futureDate },
            { id: '2', description: 'Overdue Task', isComplete: false, dueDate: overdueDate },
            { id: '3', description: 'Completed Overdue Task', isComplete: true, dueDate: overdueDate },
        ];

        const result = sortData(data, now);
        expect(result[0].description).toBe('Overdue Task'); // Non-completed overdue task first
        expect(result[1].description).toBe('Completed Overdue Task'); // Completed with overdue date
        expect(result[2].description).toBe('Completed Future Task'); // Future task comes last
    });

});