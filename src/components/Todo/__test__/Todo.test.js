import { render, screen, fireEvent } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import Todo from '../Todo';

const MockTodo = () => {
    return (<BrowserRouter>
        <Todo />
    </BrowserRouter>);
}
const AddTask = (tasks) => {
    const buttonElement = screen.getByRole("button", { name: /Add/i })
    const inputElement = screen.getByPlaceholderText(/Add a new task here.../i)
    tasks.forEach(task => {
        fireEvent.change(inputElement, { target: { value: task } });
        fireEvent.click(buttonElement);
    });

}
describe("Todo", () => {

    it('should have empty input when add button is clicked', () => {
        render(<MockTodo />);

        AddTask(["Go Grocery Shopping"])
        const divElement = screen.getByText(/Go Grocery Shopping/i)
        expect(divElement).toBeInTheDocument();
    });
    it('should return the todo list', () => {
        render(<MockTodo />);

        AddTask(["Go Grocery Shopping", "Go To The Library"])
        const divElement = screen.getAllByTestId("task-contatiner")
        expect(divElement.length).toBe(2);
    });


    it('task should not have completed when initially rendered', () => {
        render(<MockTodo />);

        AddTask(["Go Grocery Shopping"])
        const divElement = screen.getByText(/Go Grocery Shopping/i)

        expect(divElement).not.toHaveClass("todo-item-active");
    });


    it('task should  have completed when initially rendered', () => {
        render(<MockTodo />);

        AddTask(["Go Grocery Shopping"])
        const divElement = screen.getByText(/Go Grocery Shopping/i)
        fireEvent.click(divElement);
        expect(divElement).toHaveClass("todo-item-active");
    });

})