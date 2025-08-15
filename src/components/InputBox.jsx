import ErrorMsg from "./ErrorMsg";
import "./InputBox.css";

export default function InputBox({ birthDate, setBirthDate }) {
  // VARIAVEIS QUE VAO ATENTAR PARA O TIPO DE ERROR DO FORM
  // CASO ALGUM FORM TENHA ERROR A FUNÇÃO VAI TER QUE ADD
  // A CLASS "has-error" NO INPUT-BOX CORRESPONDENTE E ALTERAR
  // A VARIAVEL ABAIXO
  let dayValidate = "";
  let monthValidate = "";
  let yearValidate = "";

  // Função para atualizar estado ao digitar
  const handleChange = (e) => {
    const { name, value } = e.target;
    setBirthDate({ ...birthDate, [name]: value });
  };

  return (
    // O <form> deve conter todo o formulário, substituir uma <div> por ele
    <form className="form-boxes">
      <div className="input-box">
        <label htmlFor="iDay">DAY</label>
        <input
          type="number"
          name="day"
          id="iDay"
          placeholder="DD"
          value={birthDate.day}
          onChange={handleChange}
        />
        <ErrorMsg errorType={dayValidate} />
      </div>

      <div className="input-box">
        <label htmlFor="iMonth">MONTH</label>
        <input
          type="number"
          name="month"
          id="iMonth"
          placeholder="MM"
          value={birthDate.month}
          onChange={handleChange}
        />
        <ErrorMsg errorType={monthValidate} />
      </div>

      <div className="input-box">
        <label htmlFor="iYear">YEAR</label>
        <input
          type="number"
          name="year"
          id="iYear"
          placeholder="YYYY"
          value={birthDate.year}
          onChange={handleChange}
        />
        <ErrorMsg errorType={yearValidate} />
      </div>
    </form>
  );
}
