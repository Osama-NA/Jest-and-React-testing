import React from 'react';
import ReactDOM from 'react-dom';
import {Button} from './Button.js';
import {render, cleanup} from '@testing-library/react'
import renderer from 'react-test-renderer';

afterEach(cleanup); // To clean up renders after every test

//tests if the tested component renders 
it("renders without crashing", () => {
    const div = document.createElement('div');
    ReactDOM.render(<Button />, div);
});

//tests the tested component text content
it("test 1: text content works without crashing", () => {
    const {getByTestId} = render(<Button label="click me"/>);
    expect(getByTestId('button')).toHaveTextContent('click me');
});

// 'only' is used when you need to check whether the test is failing when it's the only test that runs.
it.only("test 2: text content works without crashing", () => {
    const {getByTestId} = render(<Button label="save"/>);
    expect(getByTestId('button')).toHaveTextContent('save');
});

//tests changes to the tested component
it("matches snapshot", () => {
    const tree = renderer.create(<Button label="click"/>).toJSON();
    expect(tree).toMatchSnapshot();
});