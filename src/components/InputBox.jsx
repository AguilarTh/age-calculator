import ErrorMsg from "./ErrorMsg";
import "./InputBox.css";

export default function InputBox() {
  // VARIAVEIS QUE VAO ATENTAR PARA O TIPO DE ERROR DO FORM
  // CASO ALGUM FORM TENHA ERROR A FUNÇÃO VAI TER QUE ADD
  // A CLASS "has-error" NO INPUT-BOX CORRESPONDENTE E ALTERAR
  // A VARIAVEL ABAIXO
  let dayValidate = "";
  let monthValidate = "";
  let yearValidate = "";
  return (
    // O <form> deve conter todo o formulário, substituir uma <div> por ele
    <form className="form-boxes">
      <div className="input-box">
        <label htmlFor="iDay">DAY</label>
        <input type="number" name="day" id="iDay" placeholder="DD" />
        <ErrorMsg errorType={dayValidate} />
      </div>

      <div className="input-box">
        <label htmlFor="iMonth">MONTH</label>
        <input type="number" name="month" id="iMonth" placeholder="MM" />
        <ErrorMsg errorType={monthValidate} />
      </div>

      <div className="input-box">
        <label htmlFor="iYear">YEAR</label>
        <input type="number" name="year" id="iYear" placeholder="YYYY" />
        <ErrorMsg errorType={yearValidate} />
      </div>
    </form>
  );
}
