import Button from "./Button";
import "./MiddleDivider.css";

export default function MiddleDivider() {
  return (
    // Usar o ::before / ::after apenas para fins decorativos, são "elementos fantasmas".
    // Para a utilização em algo interativo é melhor usar outros elementos
    <div className="middle-divider">
      <hr className="divider-line" />
      {/* Colocar o prop "onClick dps" */}
      <Button
        type="submit"
        children={
          <svg
            xmlns="http://www.w3.org/2000/svg"
            // width="46"
            // height="44"
            width="36"
            height="34"
            viewBox="0 0 46 44"
          >
            {/* stroke-width="2" valor padrão */}
            <g fill="none" stroke="#FFF" stroke-width="3">
              <path d="M1 22.019C8.333 21.686 23 25.616 23 44M23 44V0M45 22.019C37.667 21.686 23 25.616 23 44" />
            </g>
          </svg>
        }
      />
      <hr className="divider-line mobile-line" />
    </div>
  );
}
