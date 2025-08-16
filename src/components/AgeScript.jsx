import { useState } from "react";

export default function AgeScript() {
  // birthDate guarda os valores do input 
  const [birthDate, setBirthDate] = useState({
    day: "",
    month: "",
    year: "",
  });

  // resultado final do cálculo da idade
  const [ageResult, setAgeResult] = useState({
    years: "--",
    months: "--",
    days: "--",
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
    let isValid = true;

    const d = paseInt(day);
    const m = parseInt(month);
    const y = parseInt(year);
    const today = new Date();

    //Verificar campos vazios
    if(!day){
      newErrors.day = "empty";
      isValid = false;
    }
    if(!month){
      newErrors.month = "empty";
      isValid = false;
    }
    if(!year){
      newErrors.year = "empty";
      isValid = false;
    }

    // Caso já haja campos vazios, não precisa continuar
    if(isValid){
      setErrors(newErrors);
      return false;
    }

    // Verificar data inválida (ex: 30 de fevereiro)
    const date = new Date(y, m-1, d);
    if (isNaN(date.getTime()) || date.getDate() !== d || date.getMonth() + 1 !== m || m > 12 || m < 1 || d < 1 || d > 31) {
        // --- CORREÇÃO APLICADA AQUI ---
        newErrors.day = "invalid"; // Atribui o erro à propriedade 'day'
        isValid = false;
    }
    // Verificar se a data está no futuro
    if (date > today) {
        // --- CORREÇÃO APLICADA AQUI ---
        newErrors.day = "future"; // Pode ser em qualquer campo
        newErrors.month = "future";
        newErrors.year = "future";
        isValid = false;
    }
    setErrors(newErros);
    return isValid;
  }

  // Função responsável por calcular a idade
  // ALTERAÇÃO RAUL: Adequação dessa função com a validateInputs
  const calculateAge = () => {
    if(!validateInputs()){
      // Limpa os resultados se houver erro
      setAgeResult({ years: "--", months: "--", days: "--" });
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
