import { Container } from "./styles";
import incomeImg from "../../assets/income.svg";
import outcomImg from '../../assets/outcome.svg';
import totalImg from '../../assets/total.svg'
import { useContext } from "react";
import { TransactionsContext } from "../../TransactionsContext";

export function Summary() {
  const data = useContext(TransactionsContext);
  return (
    <Container>
      <div>
        <header>
          <p>entradas</p>
          <img src={incomeImg} alt="Entradas" />
        </header>
        <strong>R$1000,00</strong>
      </div>
      <div>
        <header>
          <p>Saidas</p>
          <img src={outcomImg} alt="Saidas" />
        </header>
        <strong>-R$500,00</strong>
      </div>
      <div  className="highlight-background">
        <header>
          <p>Total</p>
          <img src={totalImg} alt="Total" />
        </header>
        <strong>R$500,00</strong>
      </div>
    </Container>
  );
}
