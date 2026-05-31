import React from 'react';

// Componente encargado de clasificar y mostrar el resultado del IMC
const Resultado = ({ imc }) => {
  if (!imc) return null;

  let categoria = "";
  let color = "";

  // Lógica de clasificación por rangos
  if (imc < 18.5) {
    categoria = "Peso inferior al normal";
    color = "#5bc0de"; // Azul para bajo peso
  } else if (imc <= 24.9) {
    categoria = "Peso normal";
    color = "#5cb85c"; // Verde para normal
  } else if (imc <= 29.9) {
    categoria = "Peso superior al normal (Sobrepeso)";
    color = "#f0ad4e"; // Naranja para sobrepeso
  } else {
    categoria = "Obesidad";
    color = "#d9534f"; // Rojo para obesidad
  }

  return (
    <div style={{ marginTop: '30px', padding: '20px', border: `2px solid ${color}`, borderRadius: '5px', display: 'inline-block' }}>
      <h3>Tu Índice de Masa Corporal es:</h3>
      <h1 style={{ color: color, fontSize: '3rem', margin: '10px 0' }}>{imc}</h1>
      <p>Clasificación: <strong style={{ color: color }}>{categoria}</strong></p>
    </div>
  );
};

export default Resultado;