import { useContext, useEffect } from 'react'
import { CtContext } from './context/Ct'
import './App.css'
import Evento from './components/Evento'
import Evento2 from './components/Evento2'
import Lista from './components/Lista'

const App = () => {
  const [CtState, dispatch] = useContext(CtContext);
  return (
    <div>
      {CtState.Stage === 'First' && <Evento/>}
      {CtState.Stage === 'Second' && <Evento2/>}
      {CtState.Stage === 'Third' && <Lista/>}
    </div>
  );
};

export default App;
