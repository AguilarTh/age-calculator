import "./AgeDisplay.css";
import InfoDisplay from "./InfoDisplay";

export default function AgeDisplay() {
  return (
    <div className="info-display">
      {/* **colocar no infoNumber os inputs** */}
      {/* por enquanto ta com param apenas para teste de design */}
      <InfoDisplay infoNumber={38} infoType={"years"} />
      <InfoDisplay infoNumber={""} infoType={"months"} />
      <InfoDisplay infoNumber={24} infoType={"days"} />
    </div>
  );
}
