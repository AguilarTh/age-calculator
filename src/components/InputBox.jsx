import ErrorMsg from "./ErrorMsg";
import "./InputBox.css";

//ALTERAÇÃO RAUL: Acréscimo da prop "errors"
export default function InputBox({ birthDate, setBirthDate, errors }) {
  // VARIAVEIS QUE VAO ATENTAR PARA O TIPO DE ERROR DO FORM
  // CASO ALGUM FORM TENHA ERROR A FUNÇÃO VAI TER QUE ADD
  // A CLASS "has-error" NO INPUT-BOX CORRESPONDENTE E ALTERAR
  // A VARIAVEL ABAIXO
  // let dayValidate = "";
  // let monthValidate = "";
  // let yearValidate = "";

  //ALTERÇÃO RAUL: Função para adicionar a classe "has-error"
  const getErrorClass = (fieldName) => {
    return errors[fieldName] ? "has-error" : ""; //Operador ternário, costumo usar bastante e não é tão comum...
  }
  // Função para atualizar estado ao digitar
  const handleChange = (e) => {
    const { name, value } = e.target;
    setBirthDate({ ...birthDate, [name]: value });
  };

  return (
    // O <form> deve conter todo o formulário, substituir uma <div> por ele
    <div className="form-boxes">
      {/*Testando adicionar a classe de erro dinamicamente*/}
      <div className={`input-box ${getErrorClass("day")}`}>
        <label htmlFor="iDay">DAY</label>
        <input
          type="number"
          name="day"
          id="iDay"
          placeholder="DD"
          value={birthDate.day}
          onChange={handleChange}
        />
        {/* Passando o tipo de erro para o ErrorMsg */}
        <ErrorMsg errorType={errors.day} />
      </div>

      {/*Testando adicionar a classe de erro dinamicamente*/}
      <div className={`input-box ${getErrorClass("month")}`}>
        <label htmlFor="iMonth">MONTH</label>
        <input
          type="number"
          name="month"
          id="iMonth"
          placeholder="MM"
          value={birthDate.month}
          onChange={handleChange}
        />
        {/* Passando o tipo de erro para o ErrorMsg */}
        <ErrorMsg errorType={errors.month} />
      </div>

      {/*Testando adicionar a classe de erro dinamicamente*/}
      <div className={`input-box ${getErrorClass("year")}`}>
        <label htmlFor="iYear">YEAR</label>
        <input
          type="number"
          name="year"
          id="iYear"
          placeholder="YYYY"
          value={birthDate.year}
          onChange={handleChange}
        />
        {/* Passando o tipo de erro para o ErrorMsg */}        
        <ErrorMsg errorType={errors.year} />
      </div>
    </div>
  );
}
