import logo from './logo.svg';
import './App.css';
import Cosmetics from './components/Cosmetics';
import Shoes from './shoes/Shoes';


function App() {
  const cosmetics = [
    { id: 1, name: 'palis', price: 200 },
    { id: 2, name: 'balis', price: 200 },
    { id: 3, name: 'nalis', price: 200 },
    { id: 4, name: 'galis', price: 200 },
    { id: 5, name: 'alis', price: 200 }
  ]
  return (
    <div className="App">
      <Cosmetics></Cosmetics>
      <Shoes></Shoes>



    </div>
  );
}

export default App;
