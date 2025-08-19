import ErrorMsg from "./ErrorMsg";
import "./InputBox.css";

//ALTERAÇÃO RAUL: Acréscimo da prop "errors"
export default function InputBox({ birthDate, setBirthDate, errors }) {
  //ALTERAÇÃO RAUL: Função para adicionar a classe "has-error"
  const getErrorClass = (fieldName) => {
    return errors[fieldName] ? "has-error" : ""; //Operador ternário, costumo usar bastante e não é tão comum...
  };

  // ALTERAÇÃO THIAGO: Limitação para poder digitar apenas x digitos no input

  // Função para atualizar estado ao digitar
  const handleChange = (e) => {
    const maxLengths = {
      day: 2,
      month: 2,
      year: 4,
    };

    const { name, value } = e.target;

    const maxLength = maxLengths[name];

    if (value.length <= maxLength) {
      setBirthDate({ ...birthDate, [name]: value });
    }
  };

  return (
    <form className="form-boxes">
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
        <ErrorMsg errorType={errors.day} fieldName="day" />
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
        <ErrorMsg errorType={errors.month} fieldName="month" />
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
        <ErrorMsg errorType={errors.year} fieldName="year" />
      </div>
    </form>
  );
}
