import "./Button.css";

export default function Button({
  // Conteudo dentro do Button
  children,
  onClick,
  // o Type padrão será o button
  type = "button",

  //   Para projetos com diferentes tipos de button ( primário, secundario, alerta ...) é interresante colocar um prop de variante
  //   Ex: variante = "primary",
}) {
  return (
    <button type={type} className="button-standard" onClick={onClick}>
      {children}
    </button>
  );
}
