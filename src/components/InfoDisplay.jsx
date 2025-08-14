import "./InfoDisplay.css";

export default function InfoDisplay({ infoNumber, infoType }) {
  return (
    <div className="display">
      <span className="number">{infoNumber || "--"}</span>
      <span className="type">{infoType}</span>
    </div>
  );
}
