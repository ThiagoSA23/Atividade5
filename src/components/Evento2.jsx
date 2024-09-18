import { useContext } from 'react';
import { CtContext } from '../context/Ct';

const Evento2 = () => {
  const [CtState, dispatch] = useContext(CtContext);
    const handleClick = (e) => {
        console.log(e);
        alert("Nosso site usa cookies para melhorar a navegação, clique em ok para aceitar e continuar.")}

        const callNames = () => {alert("Testando")}
           
       
  return (
    <div>
    
    <button onClick={() => alert("Nosso site usa cookies para melhorar a navegação, clique em ok para aceitar e continuar.")}>
        Política de privacidade
    </button>
   
        <div><button onClick = {handleClick}>Aceitar Cookies</button></div>
        <div><button onClick = {callNames}> Clique com Função</button></div>
        <div><button onClick={() => dispatch({ type: "START_STAGE" })}>Lista!</button></div>
    </div>
  )
}

export default Evento2