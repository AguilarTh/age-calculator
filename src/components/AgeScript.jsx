// Lógica feita pelo Pedro

import { useState } from "react";

export default function AgeScript() {

  // Estado para a data digitada pelo usuário
  const [birthDate, setBirthDate] = useState("");

  // Estado para o resultado da idade
  const [ageResult, setAgeResult] = useState({ years: 0, months: 0, days: 0 });

  // Função para calcular se o ano é bissexto
  const isLeapYear = (year) => {
    return (year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0);
  };

  const calculateAge = () => {

    // Valida se o input está vazio
    if (!birthDate) {
      alert("Por favor, insira sua data de nascimento");
      return;
    }

    // Extrair ano, mês e dia do input
    const [year, month, day] = birthDate.split("-").map(Number);

    // Dias máximos de cada mês
    const daysInMonth = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

    // Ajusta fevereiro se for ano bissexto
    if (isLeapYear(year)) daysInMonth[1] = 29;

    // Validação da data
    if (month < 1 || month > 12 || day < 1 || day > daysInMonth[month - 1]) {
      alert("Data inválida!");
      return;
    }

    // Cria objeto Date para a data de nascimento e data atual
    const birth = new Date(birthDate);
    const today = new Date();

    // Extrair ano, mês e dia de cada data
    let birthYear = birth.getFullYear();
    let birthMonth = birth.getMonth(); // 0 a 11
    let birthDay = birth.getDate();

    let todayYear = today.getFullYear();
    let todayMonth = today.getMonth();
    let todayDay = today.getDate();

    // Calcula os anos
    let years;
    if (birthYear <= todayYear) {
      years = todayYear - birthYear;
    } else {
      alert("Data de nascimento maior que a data atual!");
      return;
    }

    // Calcula os meses
    let months;
    if (birthMonth > todayMonth) {
      years = years - 1; // Ajusta ano se o mês ainda não chegou
      months = 12 - (birthMonth - todayMonth);
    } else {
      months = todayMonth - birthMonth;
    }

    // Calcula os dias
    let days;
    if (birthDay > todayDay) {
      months = months - 1; // Ajusta mês se o dia ainda não chegou
      // Pega quantidade de dias do mês anterior
      const prevMonthDays = new Date(todayYear, todayMonth, 0).getDate();
      days = prevMonthDays - (birthDay - todayDay);
    } else {
      days = todayDay - birthDay;
    }

    // Ajuste final caso months fique negativo após o cálculo dos dias
    if (months < 0) {
      years = years - 1;
      months = months + 12;
    }

    // Atualiza o estado com o resultado final
    setAgeResult({ years, months, days });
  };

  // Exporta estados e função para usar nos outros componentes
  return { birthDate, setBirthDate, ageResult, calculateAge };
}
