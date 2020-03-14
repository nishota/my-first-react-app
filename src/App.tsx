import React from 'react';
import logo from './logo.svg';
import './App.scss';
import { Clock } from './component/Clock';
import { Form } from './component/Form';

export function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Do Edit <code>src/App.tsx</code> and save to reload!
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <div>
          <Clock></Clock>
        </div>
        <div>
          <Form></Form>
        </div>
      </header>
    </div>
  );
}

export default App;
