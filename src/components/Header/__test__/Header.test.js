import { render, screen } from '@testing-library/react';
import Header from '../Header';


it('Header should render same text passe into title prop', () => {
    render(<Header title="My Header" />);
    const headingElement = screen.getByText(/my header/i)

    expect(headingElement).toBeInTheDocument();
});


// // it('Header should render same text passe into title prop with Role', () => {
// //     render(<Header title="My Header" />);
// //     const headingElement = screen.getByRole("heading")

// //     expect(headingElement).toBeInTheDocument();
// // });



// it('Header should render same text passe into title prop with Role 2', () => {
//     render(<Header title="My Header" />);
//     const headingElement = screen.getByRole("heading", { name: "My Header" })

//     expect(headingElement).toBeInTheDocument();
// });



// it('Header should render same text passe into title prop with Title', () => {
//     render(<Header title="My Header" />);
//     const headingElement = screen.getByTitle("Header")

//     expect(headingElement).toBeInTheDocument();
// });


// it('Header should render same text passe into title prop with Id', () => {
//     render(<Header title="My Header" />);
//     const headingElement = screen.getByTestId("header-1")

//     expect(headingElement).toBeInTheDocument();
// });

// it('Header should render same text passe into title prop with getAll', () => {
//     render(<Header title="My Header" />);
//     const headingElement = screen.getAllByRole("heading")

//     expect(headingElement.length).toBe(2);
// });

// //////////findBy

// it('Header should render same text passe into title prop with findByText', async () => {
//     render(<Header title="My Header" />);
//     const headingElement = await screen.findByText(/my header/i)

//     expect(headingElement).toBeInTheDocument();
// });


// ////////QueryBy

// it('Header should render same text passe into title prop with queryBy', () => {
//     render(<Header title="My Header" />);
//     const headingElement = screen.queryByText(/dogs/i)

//     expect(headingElement).not.toBeInTheDocument();
// });



