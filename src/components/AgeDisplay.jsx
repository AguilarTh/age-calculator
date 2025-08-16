import "./AgeDisplay.css";
import InfoDisplay from "./InfoDisplay";

export default function AgeDisplay({ ageResult }) {
  return (
    <div className="info-display">
      {/* **colocar no infoNumber os inputs** */}
      <InfoDisplay infoNumber={ageResult.years} infoType={"years"} />
      <InfoDisplay infoNumber={ageResult.months} infoType={"months"} />
      <InfoDisplay infoNumber={ageResult.days} infoType={"days"} />
    </div>
  );
}
