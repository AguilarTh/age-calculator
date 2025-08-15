//Lógica feita pelo Pedro

import { useState } from "react";

export default function AgeScript() {

  // Estado para a data digitada
  const [birthDate, setBirthDate] = useState("");

  // Estado para o resultado
  const [ageResult, setAgeResult] = useState({ years: 0, months: 0, days: 0 });

  // Função que calcula a idade
  const calculateAge = () => {
    if (!birthDate) return; // evita erro se o input estiver vazio

    const birth = new Date(birthDate);
    const today = new Date();

    // Extrair ano, mês e dia
    let birthYear = birth.getFullYear();
    let birthMonth = birth.getMonth(); // 0 a 11
    let birthDay = birth.getDate();

    let todayYear = today.getFullYear();
    let todayMonth = today.getMonth();
    let todayDay = today.getDate();

    // Calcular anos
    let years;
    if (birthYear <= todayYear) {
      years = todayYear - birthYear;
    } else {
      console.log("Data de nascimento inválida");
      return;
    }

    // Calcular meses
    let months;
    if (birthMonth > todayMonth) {
      years = years - 1;
      months = 12 - (birthMonth - todayMonth);
    } else {
      months = todayMonth - birthMonth;
    }

    // Calcular dias
    let days;
    if (birthDay > todayDay) {
      months = months - 1;
      const prevMonthDays = new Date(todayYear, todayMonth, 0).getDate();
      days = prevMonthDays - (birthDay - todayDay);
    } else {
      days = todayDay - birthDay;
    }

    // Ajuste final caso months fique negativo após o dia
    if (months < 0) {
      years = years - 1;
      months = months + 12;
    }

    // Atualizar estado
    setAgeResult({ years, months, days });
  };

  // Exporta estados e função para usar em outros componentes
  return { birthDate, setBirthDate, ageResult, calculateAge };
}