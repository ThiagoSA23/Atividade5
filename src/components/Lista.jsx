import { useContext } from 'react';
import { CtContext } from '../context/Ct';

const Lista = () => {
  const [CtState, dispatch] = useContext(CtContext);
  const alunos = [
    { nome: 'Thiago', matrícula: '0001', curso: 'Ads' },
    { nome: 'David', matrícula: '0002', curso: 'Ads' },
    { nome: 'Davy', matrícula: '0003', curso: 'Ads' },
    { nome: 'Daniel', matrícula: '0004', curso: 'Ads' },
    { nome: 'Kleber', matrícula: '0005', curso: 'Ads' },
  ];

  const ordem = alunos.sort((a, b) => a.nome.localeCompare(b.nome));

  console.log(ordem);

  return (
    <div>
      <h2>Lista de alunos</h2>
      <ol>
        {' '}
        {alunos.map((aluno) => (
          <li>
            <b>
              Nome: {aluno.nome}, Matrícula: {aluno.matrícula}, Curso:{' '}
              {aluno.curso}.
            </b>
          </li>
        ))}
      </ol>
    </div>
  );
};

export default Lista;
