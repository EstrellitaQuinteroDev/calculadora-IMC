import React, { useState } from 'react';

// Componente encargado de la captura de peso y estatura
const Formulario = ({ calcularIMC }) => {
  const [peso, setPeso] = useState('');
  const [estatura, setEstatura] = useState('');

  const manejarEnvio = (e) => {
    e.preventDefault();
    // Validación de datos antes de calcular
    if (peso > 0 && estatura > 0) {
      calcularIMC(peso, estatura);
    } else {
      alert("Por favor, ingrese valores válidos mayores a 0.");
    }
  };

  return (
    <form onSubmit={manejarEnvio} style={{ margin: '20px 0' }}>
      <div style={{ marginBottom: '15px' }}>
        <label style={{ display: 'block', marginBottom: '5px' }}>Peso (kg):</label>
        <input 
          type="number" 
          value={peso} 
          onChange={(e) => setPeso(e.target.value)} 
          required 
          style={{ padding: '8px', width: '200px' }}
        />
      </div>
      <div style={{ marginBottom: '15px' }}>
        <label style={{ display: 'block', marginBottom: '5px' }}>Estatura (cm):</label>
        <input 
          type="number" 
          value={estatura} 
          onChange={(e) => setEstatura(e.target.value)} 
          required 
          style={{ padding: '8px', width: '200px' }}
        />
      </div>
      <button type="submit" style={{ padding: '10px 20px', cursor: 'pointer', backgroundColor: '#e6b800', border: 'none', fontWeight: 'bold', color: '#000' }}>
        Calcular IMC
      </button>
    </form>
  );
};

export default Formulario;