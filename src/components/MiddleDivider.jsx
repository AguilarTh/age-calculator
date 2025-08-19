import ArrowIcon from "./ArrowIcon";
import Button from "./Button";
import "./MiddleDivider.css";

export default function MiddleDivider({ onAction }) {
  return (
    // Usar o ::before / ::after apenas para fins decorativos, são "elementos fantasmas".
    // Para a utilização em algo interativo é melhor usar outros elementos

    <div className="middle-divider">
      <hr className="divider-line" />
      <Button type="button" onClick={onAction}>
        <ArrowIcon />
      </Button>
      <hr className="divider-line mobile-line" />
    </div>
  );
}
