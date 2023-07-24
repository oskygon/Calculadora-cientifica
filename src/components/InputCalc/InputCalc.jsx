import React from 'react';

const InputCalc = ({ value}) =>{
    return(
    
     <div className="m-6 relative ">
            <div className=" relative flex  items-center justify-center pointer-events-none">
                
            <input
                className=" flex items-center justify-center text-end pl-12 w-full py-2 px-1 text-gray-900 text-bold font-inter bg-gray-300 rounded-xl outline-none transition-all duration-300 ease-in-out"
                id="number" 
                type="text"
                value={value} 
                placeholder="0"
                readOnly
                />
        </div>
        
    </div>
    
    
    )
};
export {InputCalc}