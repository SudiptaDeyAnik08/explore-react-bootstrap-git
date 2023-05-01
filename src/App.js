import logo from './logo.svg';
import './App.css';
import { Button, Spinner } from 'react-bootstrap';

import GridCards from './components/GridCard/GridCards';
import N1avbar from './components/Navbar/N1avbar'

function App() {
  return (
    <div className="App">
     <Button variant='danger'>My Button</Button>
     <Spinner  animation="grow" variant="danger" />
     <GridCards></GridCards>
     <N1avbar></N1avbar>
    </div>
  );
}

export default App;
