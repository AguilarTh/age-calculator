import Button from "./Button";
import "./MiddleDivider.css";

export default function MiddleDivider({ onAction }) {

  return (

    // Usar o ::before / ::after apenas para fins decorativos, são "elementos fantasmas".
    // Para a utilização em algo interativo é melhor usar outros elementos

    <div className="middle-divider">
      <hr className="divider-line" />
      <Button type="button" onClick={onAction}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="36"
          height="34"
          viewBox="0 0 46 44"
        >
          <g fill="none" stroke="#FFF" strokeWidth="3">
            <path d="M1 22.019C8.333 21.686 23 25.616 23 44M23 44V0M45 22.019C37.667 21.686 23 25.616 23 44" />
          </g>
        </svg>
      </Button>
      <hr className="divider-line mobile-line" />
    </div>
  );
}
