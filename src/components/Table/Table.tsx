import React from "react";
import "./Table.css";

interface TableRow {
    colaborador: string;
    departamento: string;
    horas: string;
    atrasos: number;
    extras: string;
    status: "Aprovado" | "Pendente" | "Reprovado";
}

const Table: React.FC = () => {
    const rows: TableRow[] = [
        {
            colaborador: "João Lima",
            departamento: "Financeiro",
            horas: "168h",
            atrasos: 1,
            extras: "5h",
            status: "Aprovado",
        },
        {
            colaborador: "Mariana Souza",
            departamento: "RH",
            horas: "172h",
            atrasos: 0,
            extras: "8h",
            status: "Pendente",
        },
        {
            colaborador: "Lucas Pereira",
            departamento: "TI",
            horas: "165h",
            atrasos: 2,
            extras: "3h",
            status: "Reprovado",
        },
        {
            colaborador: "Ana Souza",
            departamento: "Financeiro",
            horas: "172h",
            atrasos: 0,
            extras: "5h",
            status: "Aprovado",
        },
        {
            colaborador: "Carlos Mendes",
            departamento: "Marketing",
            horas: "160h",
            atrasos: 3,
            extras: "2h",
            status: "Reprovado",
        },
        {
            colaborador: "Fernanda Lima",
            departamento: "RH",
            horas: "168h",
            atrasos: 1,
            extras: "4h",
            status: "Aprovado",
        },
        {
            colaborador: "João Ribeiro",
            departamento: "TI",
            horas: "155h",
            atrasos: 4,
            extras: "1h",
            status: "Reprovado",
        },
        {
            colaborador: "Mariana Costa",
            departamento: "Jurídico",
            horas: "170h",
            atrasos: 0,
            extras: "6h",
            status: "Aprovado",
        },
        {
            colaborador: "Rafael Torres",
            departamento: "Logística",
            horas: "162h",
            atrasos: 2,
            extras: "3h",
            status: "Reprovado",
        },
        {
            colaborador: "Beatriz Almeida",
            departamento: "Comercial",
            horas: "175h",
            atrasos: 0,
            extras: "7h",
            status: "Aprovado",
        }
    ];

    return (
        <div className="table-wrapper">
            <table className="table">
                <thead>
                    <tr>
                        <th>Colaborador</th>
                        <th>Departamento</th>
                        <th>Horas Trabalhadas</th>
                        <th>Atrasos</th>
                        <th>Horas Extras</th>
                        <th>Status</th>
                    </tr>
                </thead>
                <tbody>
                    {rows.map((row, index) => (
                        <tr key={index}>
                            <td>{row.colaborador}</td>
                            <td>{row.departamento}</td>
                            <td>{row.horas}</td>
                            <td>{row.atrasos}</td>
                            <td>{row.extras}</td>
                            <td className={`status ${row.status.toLowerCase()}`}>
                                {row.status}
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default Table;
