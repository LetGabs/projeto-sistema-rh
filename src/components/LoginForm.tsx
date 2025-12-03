import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./LoginForm.css";
import logo from "../assets/rh_logo.png";


const LoginForm: React.FC = () => {
    const navigate = useNavigate();

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [loading, setLoading] = useState(false);

    const handleSubmit = async (event: React.FormEvent) => {
        event.preventDefault();
        setLoading(true);

        try {
            const response = await fetch("http://localhost:3000/api/auth/login", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    email,
                    senha: password
                })
            });

            const data = await response.json();

            if (!response.ok) {
                alert(data.message || "Usuário ou senha inválidos");
                setLoading(false);
                return;
            }

            localStorage.setItem("token", data.token);

            navigate("/colaboradores", { replace: true });

        } catch (error) {
            console.error("Erro no login:", error);
            alert("Erro ao conectar ao servidor.");
        }

        setLoading(false);
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

                    <button type="submit">
                        {loading ? "Entrando..." : "Entrar"}
                    </button>

                    <a
                        className="create-account"
                        onClick={() => navigate("/register")}
                    >
                        Criar conta
                    </a>
                </form>

                <footer>© 2024 Nome da Empresa. Todos os direitos reservados.</footer>
            </div>

            <div className="login-background">
                <img
                    src={logo}
                    alt="Logo"
                    className="logo-azul"
                />

            </div>
        </div>
    );
};

export default LoginForm;
