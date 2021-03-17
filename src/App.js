import logo from './logo.svg';
import './App.css';
import NavBar from './components/NavBar';
import Contador from './components/counterApp';

function App() {

  const onAdd=(e,q) => {
    alert (`has agregado ${q} al valor`)
  }

  return (
    <>
    <NavBar/>
    <Contador init={1} stock={10} onAdd={onAdd}/>
    </>
  );
}

export default App;