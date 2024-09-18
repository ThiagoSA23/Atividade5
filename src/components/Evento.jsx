import { useContext, useState } from 'react';
import { CtContext } from '../context/Ct';

const Evento = () => {
  const [CtState, dispatch] = useContext(CtContext);
  const [isFocused, setIsFocused] = useState(false);
  const [inputValue, setInputValue] = useState('');

  const handleFocus = () => {
    setIsFocused(true);
  };

  const handleBlur = () => {
    setIsFocused(false);
  };

  const handleChange = (e) => {
    setInputValue(e.target.value);
  };

  return (
    <div style={{ padding: '20px', textAlign: 'center' }}>
      <h2>OLÁ SEJA BEM-VINDO!</h2>
      <h4>Digite seu nome para entrar:</h4>
      <input
        type="text"
        value={inputValue}
        onFocus={handleFocus}
        onBlur={handleBlur}
        onChange={handleChange}
        placeholder="Clique aqui para digitar!"
        style={{
          padding: '10px',
          fontSize: '16px',
          border: isFocused ? '2px' : '1px',
          borderRadius: '3rem',
        }}
      />
      <div style={{ marginTop: '20px' }}>
        {isFocused ? <p>Entrada selecionada!</p> : <p>Selecione a entrada para digitar.</p>}
      </div>
      {inputValue ? <p>Olá: {inputValue}</p> : <p>Digite!</p>} 
      <button onClick={() => dispatch({ type: 'CHANGE_STAGE' })}>Proximo</button>
    </div>
  );
};

export default Evento;