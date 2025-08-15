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

  // Função responsável por calcular a idade
  const calculateAge = () => {
    const { day, month, year } = birthDate;

    // Caso algum campo esteja vazio
    if (!day || !month || !year) {
      return 0; // não faz nada (colocar função de erro)
    }

    const today = new Date();
    const birth = new Date(year, month - 1, day); // JS usa meses de 0-11

    // Verificar se a data é válida (nascimento no futuro, mês/dia inválido etc.)
    if (birth > today || isNaN(birth.getTime())) {
      return 0; // não faz nada(colocar função de erro)
    }

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
  return { birthDate, setBirthDate, ageResult, calculateAge };
}
