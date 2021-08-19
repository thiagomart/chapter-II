import { useTransactions } from '../../hooks/useTransactionsContext';
import { Container } from "./styles";
import incomeImg from '../../assets/income.svg'
import outcomeImg from '../../assets/outcome.svg'
import totalImg from '../../assets/total.svg'

export function Summary() {

    const { transactions } = useTransactions();
   
    const summary = transactions.reduce((acc, transaction) => {
        switch (transaction.type) {
            case 'withdraw':
                acc.withdraws += transaction.amount;
                acc.total -= transaction.amount;
                
                break;
            case 'deposit':
                acc.deposits += transaction.amount;
                acc.total += transaction.amount;
                break;
        }
        return acc;
    }, {
        deposits: 0,
        withdraws: 0,
        total: 0,
    })

    return (
        <Container>
            <div>
                <header>
                    <p>Entradas</p>
                    <img src={incomeImg} alt="Entradas" />
                </header>
                <strong> 
                    {new Intl.NumberFormat(Intl.DateTimeFormat().resolvedOptions().timeZoneName, {
                        style: 'currency',
                        currency: 'BRL'
                    }).format(summary.deposits) }
                 </strong>
            </div> 
            <div>
                <header>
                    <p>Saídas</p>
                    <img src={outcomeImg} alt="Saídas" />
                </header>
                <strong>
                    - 
                    {new Intl.NumberFormat(Intl.DateTimeFormat().resolvedOptions().timeZoneName, {
                        style: 'currency',
                        currency: 'BRL'
                    }).format(summary.withdraws) }
                </strong>
            </div> 
            <div className="highlight-background">
                <header>
                    <p>Total</p>
                    <img src={totalImg} alt="Total" />
                </header>
                <strong>                
                    {new Intl.NumberFormat(Intl.DateTimeFormat().resolvedOptions().timeZoneName, {
                        style: 'currency',
                        currency: 'BRL'
                    }).format(summary.total) }
                </strong>
            </div> 
        </Container> 
    );
}