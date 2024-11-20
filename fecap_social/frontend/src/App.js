import React, { useState } from 'react';
import axios from 'axios';
import './App.css';
import Index from './pages/home';
import Logo2fecap from '../src/pages/imagens/logo2fecap.jpg';

function App() {
  const [tela, setTela] = useState('login'); // Alterna entre 'login', 'cadastro' e 'home'
  const [usuario, setUsuario] = useState('');
  const [senha, setSenha] = useState('');
  const [ra, setRa] = useState(''); // Estado para armazenar o RA
  const [mensagem, setMensagem] = useState('');

  const fazerCadastro = async () => {
    if (!usuario || !senha) {
      setMensagem('Por favor, preencha todos os campos obrigatórios!');
      return;
    }

    if (usuario.length < 5) {
      setMensagem('O nome de usuário deve ter no mínimo 5 caracteres.');
      return;
    }

    if (senha.length < 8) {
      setMensagem('A senha deve ter no mínimo 8 caracteres.');
      return;
    }

    try {
      await axios.post('http://localhost:5000/cadastro', {
        usuario,
        senha,
        RA: ra || null, // Envia o RA apenas se fornecido
      });
      setMensagem('Usuário cadastrado com sucesso!');
    } catch (error) {
      setMensagem('Usuário já cadastrado. Tente novamente.');
    }
  };

  const fazerLogin = async () => {
    if (!usuario || !senha) {
      setMensagem('Por favor, preencha todos os campos obrigatórios!');
      return;
    }

    if (usuario.length < 5) {
      setMensagem('O nome de usuário deve ter no mínimo 5 caracteres.');
      return;
    }

    if (senha.length < 8) {
      setMensagem('A senha deve ter no mínimo 8 caracteres.');
      return;
    }

    try {
      await axios.post('http://localhost:5000/login', {
        usuario,
        senha,
      });
      setMensagem('Login bem-sucedido!');
      setTela('home'); // Redireciona para a tela 'home'
    } catch (error) {
      setMensagem('Usuário ou senha incorretos. Tente novamente.');
    }
  };

  const alternarTela = () => {
    setTela(tela === 'login' ? 'cadastro' : 'login');
    setUsuario('');
    setSenha('');
    setRa(''); // Limpa o estado do RA ao alternar a tela
    setMensagem('');
  };

  // Renderiza com base no estado da tela
  if (tela === 'home') {
    return <Index />;
  }

  return (
    <div className="App">
      <div className="logo-container">
        <img src={Logo2fecap} alt="Logo do Projeto" className="logo" />
      </div>

      <h1>{tela === 'login' ? 'Login' : 'Cadastro'}</h1>
      <div>
        <input
          type="text"
          placeholder="Usuário"
          value={usuario}
          onChange={(e) => setUsuario(e.target.value)}
        />
        <input
          type="password"
          placeholder="Senha"
          value={senha}
          onChange={(e) => setSenha(e.target.value)}
        />
        {tela === 'cadastro' && (
          <input
            type="text"
            placeholder="RA (opcional)"
            value={ra}
            onChange={(e) => setRa(e.target.value)}
          />
        )}
        <button onClick={tela === 'login' ? fazerLogin : fazerCadastro}>
          {tela === 'login' ? 'Entrar' : 'Cadastrar'}
        </button>
      </div>
      <p>{mensagem}</p>
      <button onClick={alternarTela}>
        {tela === 'login'
          ? 'Não tem conta? Cadastre-se'
          : 'Já tem conta? Faça o login'}
      </button>
    </div>
  );
}

export default App;
