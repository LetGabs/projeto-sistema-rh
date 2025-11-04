import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./LoginForm.css";

const LoginForm: React.FC = () => {
    const navigate = useNavigate();

    // apenas armazenamos os valores dos inputs (sem validação)
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleSubmit = (event: React.FormEvent) => {
        event.preventDefault(); // impede recarregar
        navigate("/colaboradores", { replace: true }); // muda de página sem abrir nova aba
    };


    return (
        <div className="login-container">
            <div className="login-form-section">
                <div className="login-header">
                    <svg
                        className="login-icon"
                        height="32"
                        viewBox="0 0 256 256"
                        width="32"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            d="M208 32H48a16 16 0 0 0-16 16v160a16 16 0 0 0 16 16h160a16 16 0 0 0 16-16V48a16 16 0 0 0-16-16m-24 104a28 28 0 1 1-28-28a28 28 0 0 1 28 28m-48 71.6a60 60 0 0 1 120 0Z"
                            fill="currentColor"
                            opacity=".2"
                        />
                        <path
                            d="M208 24H48A24 24 0 0 0 24 48v160a24 24 0 0 0 24 24h160a24 24 0 0 0 24-24V48a24 24 0 0 0-24-24M48 40h160a8 8 0 0 1 8 8v160a8 8 0 0 1-8 8H48a8 8 0 0 1-8-8V48a8 8 0 0 1 8-8m136 96a36 36 0 1 1-36-36a36 36 0 0 1 36 36m-8 0a28 28 0 1 0-28 28a28 28 0 0 0 28-28m-5.12 48a52.12 52.12 0 0 0-85.76 0a8 8 0 1 0 13.76 8a36.14 36.14 0 0 1 58.24 0a8 8 0 0 0 6.88 4a8.2 8.2 0 0 0 7-3.92a8 8 0 0 0-0.12-10.88Z"
                            fill="currentColor"
                        />
                    </svg>
                    <h1>Portal RH</h1>
                </div>

                <div className="login-title">
                    <h2>Acesse sua conta</h2>
                    <p>Faça login para gerenciar suas informações e ponto.</p>
                </div>

                <form className="login-form" onSubmit={handleSubmit}>
                    <label>
                        <span>E-mail ou Usuário</span>
                        <input
                            type="text"
                            placeholder="seuemail@empresa.com"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                        />
                    </label>

                    <label>
                        <span>Senha</span>
                        <div className="password-wrapper">
                            <input
                                type="password"
                                placeholder="Digite sua senha"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                required
                            />
                        </div>
                    </label>

                    <a href="#" className="forgot-password">
                        Esqueceu sua senha?
                    </a>

                    <button type="submit">Entrar</button>
                </form>

                <footer>© 2024 Nome da Empresa. Todos os direitos reservados.</footer>
            </div>

            <div className="login-background" />
        </div>
    );
};

export default LoginForm;
