import { useContext, useEffect, useState } from "react";
import { api } from "../../services/api";
import { TransactionsContext } from "../../TransactionsContext";
import { Container } from "./styles";

export function TransactionsTable() {
    const { transactions } = useContext(TransactionsContext)
    return (
        <Container>
            <table>
                <thead>
                    <tr>
                        <th>Titulo</th>
                        <th>Valor</th>
                        <th>Categoria</th>
                        <th>Data</th>
                    </tr>
                </thead>
                <tbody>
                    {transactions.map(transaction => (
                    <tr key={transaction.id}>
                        <td>{transaction.title}</td>
                        <td className={transaction.type}>
                        
                            {new Intl.NumberFormat(Intl.DateTimeFormat().resolvedOptions().timeZoneName, {
                                style: 'currency',
                                currency: 'BRL'
                            }).format(transaction.amount) }
                        </td>
                        <td>{transaction.category}</td>
                        <td>
                            {new Intl.DateTimeFormat(Intl.DateTimeFormat().resolvedOptions().timeZoneName)
                            .format(new Date(transaction.createdAt)) }
                        </td>
                    </tr>
                    ))}
                </tbody>
            </table>
        </Container>   
    );

}