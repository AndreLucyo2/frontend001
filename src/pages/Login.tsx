import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { InputField } from '../components/InputField';
import { authService } from '../services/authService';
import styled from 'styled-components';

const LoginContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  background-color: #f8f9fa;
`;

const LoginCard = styled.div`
  background: white;
  padding: 2rem;
  border-radius: 8px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  width: 100%;
  max-width: 400px;
`;

const Title = styled.h1`
  text-align: center;
  color: #333;
  margin-bottom: 2rem;
`;

const Button = styled.button`
  width: 100%;
  padding: 0.75rem;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 4px;
  font-size: 1rem;
  cursor: pointer;
  transition: background-color 0.2s;

  &:hover {
    background-color: #0056b3;
  }

  &:disabled {
    background-color: #ccc;
    cursor: not-allowed;
  }
`;

const ErrorContainer = styled.div`
  color: #dc3545;
  text-align: center;
  margin-bottom: 1rem;
`;

export const Login: React.FC = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setLoading(true);

    try {
      const credentials = { email, password };
      const response = await authService.login(credentials);
      
      // Salvar dados de autenticação
      authService.setAuthData(response.token, response.user);
      
      // Redirecionar para a página inicial
      navigate('/dashboard');
    } catch (err: any) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <LoginContainer data-testid="login-container">
      <LoginCard data-testid="login-card">
        <Title data-testid="login-title">Login</Title>
        {error && <ErrorContainer data-testid="login-error">{error}</ErrorContainer>}
        <form onSubmit={handleSubmit} data-testid="login-form">
          <InputField
            label="Email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Digite seu email"
            data-testid="login-email-input"
          />
          <InputField
            label="Senha"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Digite sua senha"
            data-testid="login-password-input"
          />
          <Button 
            type="submit" 
            disabled={loading}
            data-testid="login-submit-button"
          >
            {loading ? 'Carregando...' : 'Entrar'}
          </Button>
        </form>
      </LoginCard>
    </LoginContainer>
  );
};
