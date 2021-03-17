import React, { useState } from "react";


export const Contador = ({init, stock ,onAdd}) => {

    const [contador, setContador] = useState(init);

const handleApp = () => {
    if(contador < stock){
        setContador(contador +1 );
    }
}

const handleSubstract = () => {
    if(contador > 1) {
        setContador(contador -1);
    }
}

    return (
      <div className="App"  >
 
        <div className="bg-dark" style={{height: '700px'}}>
            
                <h1 className="pt-5 text-white">App para contar</h1>
                {/* el input no se puede modificar porque el valor esta dado por contador */}
                <input value={ contador }/>

                <button onClick={handleApp}>+1</button>
              
                <button onClick={handleSubstract}>-1</button>
            <form className="pb-3" onSubmit={ e=> onAdd (e,contador)}>
                <button type="submit">Agregar</button>
            </form>
        </div>
        
      </div>
    );
  }
  
  export default Contador;