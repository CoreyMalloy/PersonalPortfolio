import './App.css'

function Greeting() {
  return (
    <h1 className="greeting">
      Hello. Welcome!
    </h1>
  );
}

function Goodbye() {
  return (
    <h1 className="goodbye">
      Bye. See Ya!
    </h1>
  );
}

export default function App() {
  return <Goodbye/>;
  return <Greeting/>;
}