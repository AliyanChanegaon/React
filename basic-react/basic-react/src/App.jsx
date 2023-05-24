import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'


function Button(props) {
  const { text, bg: backgroundColor } = props;
  return <button style={{ backgroundColor }}>{text}</button>;
}
export default function App() {
  return (
    <div className="App">
      <h1>Hello World</h1>
      <Button text="Aliyan" bg="blue" />
      <Button text="Ali" bg="green" />
      <Button text="Sufiyan" bg="cyan" />
      <Button text="Sufi" bg="maroon" />
      <h2>Here are some buttons</h2>
    </div>
  );
}