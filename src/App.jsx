import "./App.css";
import InputBox from "./components/InputBox";
import MiddleDivider from "./components/MiddleDivider";
import AgeDisplay from "./components/AgeDisplay";
import AgeScript from "./components/AgeScript";

function App() {
  const { birthDate, setBirthDate, ageResult, calculateAge } = AgeScript();

  return (
    <div className="container">
      <InputBox birthDate={birthDate} setBirthDate={setBirthDate} />
      <MiddleDivider onAction={calculateAge} />
      <AgeDisplay ageResult={ageResult} />
    </div>
  );
}

export default App;
