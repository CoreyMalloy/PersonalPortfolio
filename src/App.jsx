import { createElement } from 'react'
import './App.css'

function App() {

  return (
    <>
      Hello World
    </>
  )
}

function Greeting({ name }) {
  return (
    <h1 className="greeting">
      Hello <i>{name}</i>. Welcome!
    </h1>
  );
}

export default function App() {
  return <Greeting name="Taylor" />;
}