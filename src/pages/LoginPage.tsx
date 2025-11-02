
import React from 'react';
import LoginForm from '../components/LoginForm';
import '../style/index.css'; // Importa estilo global


const LoginPage: React.FC = () => {
  return (
    <div className="login-page">
      <LoginForm />
    </div>
  );
};


export default LoginPage;