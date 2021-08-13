import { useEffect } from "react";
import { Container } from "./styles";


export function TransactionsTable() {

    useEffect(() => {
        fetch('http://localhost:3000/api/transactions')
            .then(response => response.json())
            .then(response => console.log(response))
    }, [])

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
                    <tr>
                        <td>Desenvolvimento de WebSite</td>
                        <td className="deposit">R$ 12.000,00</td>
                        <td>Desenvolvimento</td>
                        <td>01/10/2021</td>
                    </tr>
                    <tr>
                        <td>Aluguel</td>
                        <td className="whitdraw">- R$ 1.000,00</td>
                        <td>Casa</td>
                        <td>01/10/2021</td>
                    </tr>
                </tbody>
            </table>
        </Container>   
    );

}