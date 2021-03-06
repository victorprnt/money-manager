import * as S from "../styles/components/Summary";

import incomeImg from "../assets/income.svg";
import outcomeImg from "../assets/outcome.svg";
import totalImg from "../assets/total.svg";

export function Summary() {
  return(
    <S.Container>
      <div>
        <header>
          <p>Income</p>
          <img src={incomeImg} alt="Income"/>
        </header>
        <strong>R$1000,00</strong>
      </div>

      <div>
        <header>
          <p>Income</p>
          <img src={outcomeImg} alt="Outcome"/>
        </header>
        <strong>R$1000,00</strong>
      </div>

      <div className="total">
        <header>
          <p>Income</p>
          <img src={totalImg} alt="Total"/>
        </header>
        <strong>R$1000,00</strong>
      </div>
    </S.Container>
  );
}