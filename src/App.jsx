import "./App.css";
import InputBox from "./components/InputBox";
import MiddleDivider from "./components/MiddleDivider";
import AgeDisplay from "./components/AgeDisplay";
import useAgeScript from "./components/useAgeScript";

function App() {
  const { birthDate, setBirthDate, ageResult, calculateAge, errors } = useAgeScript();

  return (
    <div className="container">
      <InputBox birthDate={birthDate} setBirthDate={setBirthDate} errors={errors} />
      <MiddleDivider onAction={calculateAge} />
      <AgeDisplay ageResult={ageResult} />
    </div>
  );
}

export default App;
