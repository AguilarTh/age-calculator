import "./ErrorMsg.css";

// POSSIVEIS ERRORs:
// EMPTY / INVALID (day/month) / FUTURE (year)
export default function ErrorMsg({ errorType, fieldName }) {
  let msg;
  switch (errorType) {
    case "empty":
      msg = "This field is required";
      break;
    case "invalid-day":
      msg = "Must be a valid day";
      break;
    case "invalid-month":
      msg = "Must be a valid month";
      break;
    case "invalid-year":
      msg = "Must be a valid year";
      break;
    case "invalid-date":
      msg = "Must be a valid date";
      break;
    case "future":
      msg ="Must be in the past";
      break;
    default:
      msg = "";
      break;
  }

  return (
    <div className="error-container">
      <p className="error-msg">{msg}</p>
    </div>
  );
}
