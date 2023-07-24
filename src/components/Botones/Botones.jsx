import React from 'react';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import { InputCalc } from '../InputCalc';




const Botones = ({ handleButtonClick, sin, cos, tan }) =>{
  const handleMathFunction = (func) => {
    handleButtonClick(`Math.${func}(`);
  };
    
    return(

        
        <Stack direction="column" spacing={1} alignItems="center">
    
         <Stack direction="row" spacing={0.2}>
     
         <Button variant="contained" color="success" className="w-10" onClick={() => handleButtonClick('MC')}>MC</Button>
        <Button variant="contained" color="success" className="w-10" onClick={() => handleButtonClick('MS')}>MS</Button>
        <Button variant="contained" color="success" className="w-10" onClick={() => handleButtonClick('M')}>M</Button>
        <Button variant="contained" color="primary" className="w-10" onClick={() => handleButtonClick('DEL')}>DEL</Button>
        <Button variant="contained" color="error" className="w-10" onClick={() => handleButtonClick('AC')}>AC</Button>
           
         </Stack>
         <Stack direction="row" spacing={0.2}>
        

       
        <Button variant="contained" color="secondary" className="w-10" onClick={() => handleMathFunction('sin')}>sin</Button>
        <Button variant="contained" color="secondary" className="w-10" onClick={() => handleMathFunction('cos')}>cos</Button>
        <Button variant="contained" color="secondary" className="w-10" onClick={() => handleMathFunction('tan')}>tan</Button>
        <Button variant="contained" color="secondary" className="w-10" onClick={() => handleButtonClick('2.71828182')}>e</Button>
        <Button variant="contained" color="secondary" className="w-10" onClick={() => handleButtonClick('3.1415926535')}>π</Button>
      
      
      
      </Stack>
      <Stack direction="row" spacing={0.2}>
  
        <Button variant="contained" color="secondary" className="w-10" onClick={() => handleButtonClick('Math.log(')}>log</Button>
        <Button variant="contained" color="secondary" className="w-10" onClick={() => handleButtonClick('Math.log10(')}>ln</Button>
        <Button variant="contained" color="secondary" className="w-10" onClick={() => handleButtonClick('Math.deg(')}>DEG</Button>
        <Button variant="contained" color="secondary" className="w-10" onClick={() => handleButtonClick('Math.pow(')}>EXP</Button>
        <Button variant="contained" color="secondary" className="w-10" onClick={() => handleButtonClick('Math.sqrt(')}>√</Button>
        
      </Stack>
      <Stack direction="row" spacing={0.2}>


        <Button variant="contained" color="primary" className="w-10" onClick={() => handleButtonClick('7')}>7</Button>
        <Button variant="contained" color="primary" className="w-10" onClick={() => handleButtonClick('8')}>8</Button>
        <Button variant="contained" color="primary" className="w-10" onClick={() => handleButtonClick('9')}>9</Button>
        <Button variant="contained" color="warning" className="w-10" onClick={() => handleButtonClick('(')}>(</Button>
        <Button variant="contained" color="warning" className="w-10" onClick={() => handleButtonClick(')')}>)</Button>

      </Stack>
      <Stack direction="row" spacing={0.2}>


        <Button variant="contained" color="primary" className="w-10" onClick={() => handleButtonClick('4')}>4</Button>
        <Button variant="contained" color="primary" className="w-10" onClick={() => handleButtonClick('5')}>5</Button>
        <Button variant="contained" color="primary" className="w-10" onClick={() => handleButtonClick('6')}>6</Button>
        <Button variant="contained" color="warning" className="w-10" onClick={() => handleButtonClick('*')}>*</Button>
        <Button variant="contained" color="warning" className="w-10" onClick={() => handleButtonClick('/')}>/</Button>
      </Stack>
      <Stack direction="row" spacing={0.2}>
       

        <Button variant="contained" color="primary" className="w-10" onClick={() => handleButtonClick('1')}>1</Button>
        <Button variant="contained" color="primary" className="w-10" onClick={() => handleButtonClick('2')}>2</Button>
        <Button variant="contained" color="primary" className="w-10" onClick={() => handleButtonClick('3')}>3</Button>
        <Button variant="contained" color="warning" className="w-10" onClick={() => handleButtonClick('+')}>+</Button>
        <Button variant="contained" color="warning" className="w-10" onClick={() => handleButtonClick('-')}>-</Button>
      </Stack>
      <Stack direction="row" spacing={0.2}>

        
        <Button variant="contained" color="primary" className="w-10" onClick={() => handleButtonClick('0')}>0</Button>
        <Button variant="contained" color="primary" className="w-10" onClick={() => handleButtonClick('.')}>.</Button>
        <Button variant="contained" color="error" className="w-10" onClick={() => handleButtonClick('=')}>=</Button>
        <Button variant="contained" color="warning" className="w-10" onClick={() => handleButtonClick('%')}>%</Button>
        <Button variant="contained" color="warning" className="w-10" onClick={() => handleButtonClick('!')}>!</Button>
        
      </Stack>

<Stack>
    <h3 className='mt-3 mb-3'>React JS 23303</h3>
</Stack>
         </Stack>
     
    
    
    )
};
export {Botones, InputCalc}