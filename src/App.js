import logo from './logo.svg';
import './App.css';
import { useState } from 'react';


function App() {
  const [nome, setNome] = useState("");
  const [cpf, setCpf] = useState("");
  const [rg, setRG] = useState("");
  const [tel, setTel ] = useState("");
  const [telRes, setTelRes] = useState("");
  const [email, setEmail] = useState("");
  const [date, setDate] = useState("");

  let aluno = JSON.stringify(
    {
      name: nome,
      cpf: cpf,
      rg: rg,
      tel: tel,
      telRes: telRes,
      email: email,
      date: date
    });


  function createStudent(event){
    event.preventDefault();
    
    try {
      alert(`Seu aluno foi cadastrado com sucesso! ${nome}`)
      console.log(aluno);
    } catch (error) {
      console.log(error)
    }

  }

  function replaceRG(rg){
    rg = rg.replace(/\D/g,"");
    rg = rg.replace(/(\d{2})(\d{3})(\d{3})(\d{1})$/,"$1.$2.$3-$4");
    setRG(rg);
    console.log(rg);
  }
  function replaceCPF(cpf){
    cpf = cpf.replace(/\D/g,"");
    cpf = cpf.replace(/(\d{3})(\d{3})(\d{3})(\d{2})$/,"$1.$2.$3-$4")
    setCpf(cpf);
  }
  function replaceNumber(num){
    num = num.replace(/\D/g,"");
    num = num.replace(/(\d{2})(\d{5})(\d{4})$/, "($1) $2-$3")
    return num;
  }
  return (
    <div className="App">
      <h1>
        Form de alunos
      </h1>
      <div className='divForm'>
        <form onSubmit={createStudent}>
          <input
          type='text'
          placeholder='Digite o nome do aluno'
          value={nome}
          onChange={(event) => {setNome(event.target.value)}}
          required
          
          />
          <input
          type='text'
          placeholder='Digite seu cpf'
          value={cpf}
          onChange={(event)=>{replaceCPF(event.target.value)}}
          required
          maxLength={15}
          />
          <input
          type='text'
          placeholder='Digite seu rg'
          value={rg}
          onChange={(event) =>{replaceRG(event.target.value)}}
          required
          maxLength={11}
          />
          <input
          type='text'
          maxLength={11}
          required
          value={tel}
          onChange={(event)=>{replaceNumber(replaceNumber(event.target.value))}}
          placeholder='11 99999-9999'
          />
          <input
          type='text'
          placeholder='Digite o numero do responsavel'
          required
          value={telRes}
          onChange={(event)=>{setTelRes(replaceNumber(event.target.value))}}
          maxLength={16}
          />
          <input
          type='text'
          placeholder='Digite aqui seu email'
          required
          value={email}
          onChange={(event)=>{setEmail(event.target.value)}}
          />
          <input
          type='date'
          required
          value={date}
          onChange={(event)=>{setDate(event.target.value)}}
          />
          <br></br>
          <button type='submit'>Enviar</button>
        </form>
      </div>
    </div>
  );
}

export default App;
