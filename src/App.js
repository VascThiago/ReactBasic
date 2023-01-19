import './App.css';
import UppercaseColor from './components/uppercaseColor/uppercaseColor';
import Button from './components/button/button';

function App() {
  return (
    <div>
      <UppercaseColor color='orange' text='Cadê o chinelo?' />
      <Button label='Clique Aqui' />
    </div>
  );
}

export default App;
