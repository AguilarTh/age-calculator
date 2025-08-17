import { useState } from "react";

export default function useAgeScript() {
  // birthDate guarda os valores do input 
  const [birthDate, setBirthDate] = useState({
    day: "",
    month: "",
    year: "",
  });

  // resultado final do cálculo da idade
  // ALTERAÇÃO RAUL: Agora inicia com null em vez de "--"
  const [ageResult, setAgeResult] = useState({
    years: null,
    months: null,
    days: null,
  });

  // ALTERÇÃO RAUL: Estado para guardar os erros de cada campo
  const [errors, setErrors] = useState({
    day:"",
    month:"",
    year:"",
  })

  // ALTERAÇÃO RAUL: Função responsável por validar os inputs e retorna true ou false
  const validateInputs = () =>{
    const {day, month, year} =  birthDate;
    const newErrors = { day: "", month: "", year: "" };
    let isGenerallyValid = true;

    const d = parseInt(day);
    const m = parseInt(month);
    const y = parseInt(year);
    const today = new Date();

    //--- Validação Individuais Simultâneas ---

    // Validação do dia
    if(!day){
      newErrors.day = "empty";
      isGenerallyValid = false;
    }else if (d < 1 || d > 31){
      newErrors.day = "invalid-day"
      isGenerallyValid = false;
    }

    // Validação do mês
    if(!month){
      newErrors.month = "empty";
      isGenerallyValid = false;
    }else if ( m < 1 || m > 12) {
      newErrors.month = "invalid-month";
      isGenerallyValid = false;
    }

    // Validação do ano
    if (!year) {
      newErrors.year = "empty";
      isGenerallyValid = false;
    } else if (year.length < 4 || y < 1900) { // --- ALTERAÇÃO APLICADA AQUI ---
      newErrors.year = "invalid-year";      // Garante 4 dígitos e um ano razoável
      isGenerallyValid = false;
    } else if (y > today.getFullYear()) {
      newErrors.year = "future";
      isGenerallyValid = false;
    }

    // --- Validação da Combinação ---
    // Só executa se os campos individuais forem numericamente válidos
    if(isGenerallyValid) {
      const date = new Date(y,m-1,d);

       // Verifica se a data completa é futura
      if (date > today) {
      newErrors.day = "future";
      isGenerallyValid = false;
      }

      if(date.getFullYear() !== y || date.getMonth() + 1 !== m || date.getDate() !== d) {
        newErrors.day = "invalid-date"; 
        newErrors.month = "invalid-date";
        newErrors.year = "invalid-date";
        isGenerallyValid = false;
      }
    }
    setErrors(newErrors);
    return isGenerallyValid;
  }

  // Função responsável por calcular a idade
  // ALTERAÇÃO RAUL: Adequação dessa função com a validateInputs
  const calculateAge = () => {
    if(!validateInputs()){
      // Limpa os resultados se houver erro
      // ALTERAÇÃO RAUL: Agora volta para null (e não mais "--")
      setAgeResult({ years: null, months: null, days: null });
      return;
    }
    const { day, month, year } = birthDate;

    // Caso algum campo esteja vazio
    /* ALTERAÇÃO RAUL: O primeiro if já garante todos os erros
    if (!day || !month || !year) {
      return 0; // não faz nada (colocar função de erro)
    }*/

    const today = new Date();
    const birth = new Date(year, month - 1, day); // JS usa meses de 0-11

    // Verificar se a data é válida (nascimento no futuro, mês/dia inválido etc.)
    /* ALTERAÇÃO RAUL: O primeiro if já garante todos os erros
    if (birth > today || isNaN(birth.getTime())) {
      return 0; // não faz nada(colocar função de erro)
    }*/

    // Cálculo da Idade 
    let years = today.getFullYear() - birth.getFullYear();
    let months = today.getMonth() - birth.getMonth();
    let days = today.getDate() - birth.getDate();

    // Se os dias ficaram negativos, "empresta" dias do mês anterior
    if (days < 0) {
      months -= 1;

      // Pega quantos dias teve no mês anterior
      const lastMonth = new Date(today.getFullYear(), today.getMonth(), 0);
      days += lastMonth.getDate();
    }

    // Se os meses ficaram negativos, "empresta" do ano anterior
    if (months < 0) {
      years -= 1;
      months += 12;
    }

    setAgeResult({
      years,
      months,
      days,
    });
  };

  // Retorna todas as variáveis e funções para serem usadas em outros componentes
  // ALTERAÇÃO RAUL: Acréscimo de "errors"
  return { birthDate, setBirthDate, ageResult, calculateAge, errors};
}
