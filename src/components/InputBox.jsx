import "./InputBox.css";

export default function InputBox() {
  return (
    // O <form> deve conter todo o formulário, substituir uma <div> por ele
    <form className="form-boxes">
      <div className="input-box">
        <label htmlFor="iDay">DAY</label>
        <input type="number" name="day" id="iDay" placeholder="DD" />
      </div>

      <div className="input-box">
        <label htmlFor="iMonth">MONTH</label>
        <input type="number" name="month" id="iMonth" placeholder="MM" />
      </div>

      <div className="input-box">
        <label htmlFor="iYear">YEAR</label>
        <input type="number" name="year" id="iYear" placeholder="YYYY" />
      </div>
    </form>
  );
}
