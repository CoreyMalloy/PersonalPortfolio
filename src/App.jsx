import './App.css'

function Greeting() {
  return (
    <h1 className="greeting">
      Hello. Welcome!
    </h1>
  );
}

export default function App() {
  return <Greeting/>;
}

function Goodbye() {
  return (
    <h1 className="goodbye">
      Bye. See Ya!
    </h1>
  );
}

export default function React() {
  return <Goodbye/>;
  return <Greeting/>;
}