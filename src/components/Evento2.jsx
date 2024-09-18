import { useContext } from 'react';
import { CtContext } from '../context/Ct';

const Evento2 = () => {
  const [CtState, dispatch] = useContext(CtContext);
    const handleClick = (e) => {
        console.log(e);
        alert("contato:(61)9 9876-0345")}

        const callNames = () => {alert("Aperte o botão abaixo para acessar a lista de alguns alunos de ads, feita em ordem númerica e em ordem alfabetica.")}
           
       
  return (
    <div>
    
    <button onClick={() => alert("Nosso site usa cookies para melhorar a navegação, clique no botão para aceitar e continuar.")}>
       Cookies
    </button>
   
        <div><button onClick = {handleClick}>Entre em Contato</button></div>
        <div><button onClick = {callNames}> Sobre</button></div>
        <div><button onClick={() => dispatch({ type: "START_STAGE" })}>Lista!</button></div>
    </div>
  )
}

export default Evento2