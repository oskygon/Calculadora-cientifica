

import React, { useState } from 'react';
import { InputCalc } from './components/InputCalc';
import { Botones } from './components/Botones';

function App() {
  const [inputValue, setInputValue] = useState('');
  // const [memory, setMemory] = useState(null);

  const evaluateExpression = (expression) => {
    try {
      const result = Function('return ' + expression)();
      setInputValue(result.toString());
    } catch (error) {
      setInputValue('Error');
    }
  };

  // Funciones matemáticas y operaciones específicas
  const sin = () => {
    const radiansValue = parseFloat(inputValue) * (Math.PI / 180); // Convertimos a radianes
    setInputValue((prevValue) => Math.sin(radiansValue).toString());
  };

  const cos = () => {
    const radiansValue = parseFloat(inputValue) * (Math.PI / 180); // Convertimos a radianes
    setInputValue((prevValue) => Math.cos(radiansValue).toString());
  };

  const tan = () => {
    const radiansValue = parseFloat(inputValue) * (Math.PI / 180); // Convertimos a radianes
    setInputValue((prevValue) => Math.tan(radiansValue).toString());
  };
  
  

  const handleButtonClick = (buttonValue) => {
    if (buttonValue === '=') {
      try {
        const result = eval(inputValue);
        setInputValue(result.toString());
      } catch (error) {
        setInputValue('Error');
        
      }
    } else if (buttonValue === 'DEL') {
      setInputValue((prevValue) => prevValue.slice(0, -1));
    } else if (buttonValue === 'AC') {
      setInputValue('');

    } else if (buttonValue === 'EXP') { 
      setInputValue((prevValue) => prevValue + 'pow');
      


     } else {
      setInputValue((prevValue) => prevValue + buttonValue);
    }

  };
  

  return (
    <div className="font-inter bg-gray-900 min-h-screen h-full text-gray-100 flex items-center justify-center py-10 px-5">
      <div className="container flex flex-col max-w-xs min-[70] border-solid rounded-xl bg-gray-700">
        {/* Título */}
        <h1 className=" text-gray-100 text-2xl  mt-4 text-center">Calculadora Científica</h1>

        {/* Campo de entrada */}
        <InputCalc value={inputValue} handleButtonClick={evaluateExpression} />

        {/* Botones */}
        <Botones
          handleButtonClick={handleButtonClick}
          sin={sin}
          cos={cos}
          tan={tan}
      
          
          // Agrega más funciones matemáticas y operaciones aquí
        />
      </div>
    </div>
  );
}

export default App;

