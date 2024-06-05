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
    <div className="goodbye">
      <h1>Bye. See Ya!</h1>
    </div>
  );
}