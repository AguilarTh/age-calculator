import "./App.css";
import InputBox from "./components/InputBox";
import MiddleDivider from "./components/MiddleDivider";
import AgeDisplay from "./components/AgeDisplay";
import useAgeScript from "./components/useAgeScript";

function App() {
  const { birthDate, setBirthDate, ageResult, calculateAge, errors } = useAgeScript();

  // Esta função será chamada quando o formulário for submetido
  const handleSubmit = (event) => {
    event.preventDefault(); // Impede que a página recarregue
    calculateAge(); //Chama a função que agora também valida os dados
  }

  return (
    <main className="container">
      {/* O <form> envolve os inputs e o botão  ara que o submit funcione*/}
      <form onSubmit={handleSubmit}> {/*Permite que o  enter funcione igualmente a clicar o botão*/}
        <InputBox birthDate={birthDate} setBirthDate={setBirthDate} errors={errors} />
        <MiddleDivider />
      </form>
      <AgeDisplay ageResult={ageResult} />
    </main>
  );
}

export default App;
