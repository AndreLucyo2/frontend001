import React from 'react';
import { useNavigate } from 'react-router-dom';
import { authService } from '../services/authService';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  background-color: #f8f9fa;
  padding: 2rem;
`;

const Title = styled.h1`
  font-size: 3rem;
  color: #333;
  margin-bottom: 1rem;
`;

const Emoji = styled.span`
  font-size: 5rem;
  margin-bottom: 1rem;
`;

const LogoutButton = styled.button`
  padding: 0.75rem 1.5rem;
  background-color: #dc3545;
  color: white;
  border: none;
  border-radius: 4px;
  font-size: 1rem;
  cursor: pointer;
  transition: background-color 0.2s;

  &:hover {
    background-color: #c82333;
  }
`;

export const Home: React.FC = () => {
  const navigate = useNavigate();
  const user = authService.getUser();

  const handleLogout = () => {
    authService.logout();
    navigate('/login');
  };

  return (
    <Container data-testid="home-container">
      <Emoji data-testid="home-emoji">👋</Emoji>
      <Title data-testid="home-welcome-message">Seja bem-vindo, {user?.name}!</Title>
      <LogoutButton 
        onClick={handleLogout} 
        data-testid="home-logout-button"
      >
        Sair
      </LogoutButton>
    </Container>
  );
};
