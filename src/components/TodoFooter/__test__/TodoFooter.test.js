import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';

import TodoFooter from '../TodoFooter';

const MockTodoFooter = ({ numberOfIncompleteTasks }) => {
    return (<BrowserRouter>
        <TodoFooter numberOfIncompleteTasks={numberOfIncompleteTasks} />
    </BrowserRouter>);
}


it('should render the correct number of incomplete tasks', () => {
    render(<MockTodoFooter numberOfIncompleteTasks={4} />);
    const paragraphElement = screen.getByText(/4 tasks left/i)

    expect(paragraphElement).toBeInTheDocument();
});


it('should render "task" when the num is 1', () => {
    render(<MockTodoFooter numberOfIncompleteTasks={1} />);
    const paragraphElement = screen.getByText(/1 task left/i)

    expect(paragraphElement).toBeInTheDocument();
});




it('should render the correct element', () => {
    render(<MockTodoFooter numberOfIncompleteTasks={1} />);
    const paragraphElement = screen.getByText(/1 task left/i)

    expect(paragraphElement).toBeTruthy();
    // expect(paragraphElement).toBeVisible();  ///visibile to the user
    expect(paragraphElement).toContainHTML("p");
    expect(paragraphElement).toHaveTextContent("1 task left");

});


it('should render the correct element test using getByTestID', () => {
    render(<MockTodoFooter numberOfIncompleteTasks={1} />);
    const paragraphElement = screen.getByTestId("para")

    expect(paragraphElement).toBeInTheDocument();
    expect(paragraphElement.textContent).toBe("1 task left");

});


// it('should render the correct but it is not visible', () => {
//     render(<MockTodoFooter numberOfIncompleteTasks={1} />);
//     const paragraphElement = screen.getByText(/1 task left/i)

//     expect(paragraphElement).not.toBeVisible();  ///visibile to the user

// });
