const quizQuestions = [
    {
        question: "What is React?",
        options: ["A programming language", "A JavaScript library for building user interfaces", "A server-side framework", "A database management system"],
        answer: 1
    },
    {
        question: 'Which of the following command is used to create react-js-app ?',
        options: ['npx create-react-app appname', 'npm install create-react-app', 'npx install create-react-app -g', 'install - l create-react-app'],
        answer: 0
    },
    {
        question: 'How do you run a React app created using create-react-app?',
        options: ['npx run start', 'react-run appname', 'npm run appname', 'npm start'],
        answer: 3
    },
    {
        question: "What is JSX in React?",
        options: ["JavaScript XML", "JavaScript extension for XML", "Java Server Extension", "JavaScript Server XML"],
        answer: 0
    },
    {
        question: 'What is the significance of the virtual DOM in React?',
        options: ['It speeds up rendering', 'It allows for server-side rendering', 'It reduces direct manipulation of the actual DOM', 'It helps with state management'],
        answer: 2
    },
    {
        question: 'To develop and run React code, Node.js is required.',
        options: ['False', 'True'],
        answer: 1
    },
    {
        question: 'What tool does React use to compile JSX?',
        options: ['React Router', 'JSX Compiler', 'ReactDOM', 'Babel'],
        answer: 3
    },
    {
        question: 'What is a React component?',
        options: ['A variable in React', 'A method in a class component', 'A built-in HTML element', 'A function that returns JSX'],
        answer: 3
    },
    {
        question: 'React component names must begin with an uppercase letter.',
        options: ['True', 'False'],
        answer: 0
    },
    {
        question: "What is a functional component in React?",
        options: ["A component without a render method", "A component that only uses class syntax", "A component that uses hooks", "A component with state and lifecycle methods"],
        answer: 0
    },
    {
        question: 'What is the purpose of React fragments?',
        options: ['To create shadow DOM for styling', 'To import external libraries', 'To group multiple React elements without adding extra nodes to the DOM', 'To define routes in a React application'],
        answer: 2
    },
    {
        question: 'How can you optimize performance in React applications?',
        options: ['Using class components', 'Memoization, code-splitting, and optimizing renders', 'Avoiding the use of state management', 'Increasing the usage of global state'],
        answer: 1
    },
    {
        question: 'How can you conditionally render components in React?',
        options: ['Using the if-else statement', 'Using the ternary operator', 'Using the switch statement', 'All of the above'],
        answer: 3
    },
    {
        question: "What is the correct syntax to import a Component from React?",
        options: ["import { Component } from 'react'", "import Component from 'react'", "import [ Component ] from 'react'", "import React.Component from 'react'"],
        answer: 0
    },
    {
        question: "React separates the user interface into components. How are components combinded to create a user interface?",
        options: ['By putting them in a folder structure', 'With webpack', 'By nesting components', 'With code splitting'],
        answer: 2
    },
    {
        question: 'What is the purpose of prop drilling in React?',
        options: ['To pass data from a parent component to a child component', 'To manage state in a functional component', 'To handle form submissions', 'To create reusable components'],
        answer: 0
    },
    {
        question: 'What is the purpose of the "style" prop in React?',
        options: ['To define styles for a component', 'To set the initial state of a component', 'To handle user input', 'To specify the route in a React Router'],
        answer: 0
    },
    {
        question: "Why should you avoid copying the values of props into a component's state?",
        options: ['Because prop values cannot be stored in state', 'Because you should never mutate state', 'Because you want to allow data to flow back up to the parent', 'Because that would create two instances of the same state that could become out of sync'],
        answer: 3
    },
    {
        question: 'What is the children prop?',
        options: ['A property that lets you nest components in other components', 'A property that lets you set an object as a property', 'A property that lets you pass data to child components', 'A property that adds child values to state'],
        answer: 0
    },
    {
        question: "Why are Hooks used in React?",
        options: ["To create class components with simpler syntax", "To manage state and side effects in functional components", "To replace Redux for state management", "To improve the performance of React applications"],
        answer: 1
    },
    {
        question: "Which of the following is NOT a rule for React Hooks?",
        options: ['Hooks can only be called at the top level of a component', 'Hooks cannot be conditional', 'Hooks can only be called inside React Function components', 'Hooks can be called in Class or Function components'],
        answer: 3
    },
    {
        question: 'What is the purpose of the useState hook in React?',
        options: ['To fetch data from an API', 'To manage state in functional components', 'To handle form submissions', 'To create reusable components'],
        answer: 1
    },
    {
        question: 'When rendering a list using the JavaScript map() method, what is required for each element rendered?',
        options: ['data', 'index', 'key', 'id'],
        answer: 2
    },
    {
        question: 'What is a common use case for ref?',
        options: ['To refer to another JavaScript file', 'To directly access a DOM node', 'To bind the function', 'To refer to a function'],
        answer: 1
    },
    {
        question: 'What is the purpose of the useMemo hook in React?',
        options: ['To memoize functions and optimize performance', 'To manage side effects in functional components', 'To handle asynchronous operations', 'To create a memoized version of a class component'],
        answer: 0
    },
    {
        question: 'In React, what is the purpose of the useEffect hook?',
        options: ['To manage state in functional components', 'To create context for components', 'To handle asynchronous operations', 'To optimize the performance of React applications'],
        answer: 2
    },
    {
        question: 'When might you use the Context API in React?',
        options: ['To manage state in functional components', 'To handle asynchronous operations', 'To create reusable component logic', 'To share global state between components'],
        answer: 3
    },
    {
        question: 'What is the purpose of the useContext hook in React?',
        options: ['To create context providers', 'To consume values from the context', 'To manage the state of a functional component', 'To handle routing in React applications'],
        answer: 1
    },
    {
        question: 'What is the purpose of React Router?',
        options: ['To compile JSX', 'To manage state in React components', 'To navigate between different views in a React application', 'To handle HTTP requests'],
        answer: 2
    },
    {
        question: 'How does React Router handle navigation in a Single Page Application (SPA)?',
        options: ['It uses traditional anchor tags for navigation.', 'It relies on server-side routing.', 'It dynamically updates the URL and renders the appropriate components based on the route.', 'It uses Redux for navigation management.'],
        answer: 2
    },
]

export default quizQuestions