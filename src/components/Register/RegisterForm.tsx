import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const RegisterForm: React.FC = () => {
    const navigate = useNavigate();

    const [nome, setNome] = useState("");
    const [email, setEmail] = useState("");
    const [senha, setSenha] = useState("");
    const [loading, setLoading] = useState(false);

    const handleRegister = async (event: React.FormEvent) => {
        event.preventDefault();
        setLoading(true);

        try {
            const response = await fetch("http://localhost:3000/api/auth/register", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ nome, email, senha }),
            });

            const data = await response.json();

            if (!response.ok) {
                alert(data.message || "Erro ao criar conta");
                setLoading(false);
                return;
            }

            alert("Conta criada com sucesso! Faça login.");
            navigate("/colaboradores", { replace: true });


        } catch (error) {
            console.error("Erro no registro:", error);
            alert("Erro ao conectar ao servidor.");
        }

        setLoading(false);
    };

    return (
        <div className="login-container">
            <div className="login-form-section">
                <div className="login-header">
                    <h1>Portal RH</h1>
                </div>

                <div className="login-title">
                    <h2>Criar Conta</h2>
                    <p>Preencha os dados abaixo.</p>
                </div>

                <form className="login-form" onSubmit={handleRegister}>
                    <label>
                        <span>Nome Completo</span>
                        <input
                            type="text"
                            placeholder="Seu nome"
                            value={nome}
                            onChange={(e) => setNome(e.target.value)}
                            required
                        />
                    </label>

                    <label>
                        <span>E-mail</span>
                        <input
                            type="email"
                            placeholder="seuemail@empresa.com"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                        />
                    </label>

                    <label>
                        <span>Senha</span>
                        <input
                            type="password"
                            placeholder="Crie uma senha"
                            value={senha}
                            onChange={(e) => setSenha(e.target.value)}
                            required
                        />
                    </label>

                    <button type="submit">
                        {loading ? "Criando..." : "Registrar"}
                    </button>
                </form>

                <button
                    type="button"
                    className="forgot-password"
                    onClick={() => navigate("/")}
                    style={{ background: "none", border: "none", color: "#007bff", cursor: "pointer" }}
                >
                    Já tem conta? Entre aqui
                </button>


            </div>

            <div className="login-background" />
        </div>
    );
};

export default RegisterForm;
