import React, { useState } from 'react';
import Formulario from './components/Formulario';
import Resultado from './components/Resultado';

function App() {
  const [imc, setImc] = useState(null);

  // Función con la expresión lógica matemática para el IMC
  const calcularIMC = (peso, estatura) => {
    const estaturaMetros = estatura / 100;
    // Fórmula: peso / estatura^2
    const resultado = (peso / (estaturaMetros * estaturaMetros)).toFixed(1);
    setImc(resultado);
  };

  return (
    <div style={{ fontFamily: 'Arial, sans-serif', textAlign: 'center', marginTop: '50px' }}>
      <h2>Evidencia: Taller Componentes Frontend - React</h2>
      <hr style={{ width: '50%', margin: '20px auto' }} />
      <Formulario calcularIMC={calcularIMC} />
      <Resultado imc={imc} />
    </div>
  );
}

export default App;
