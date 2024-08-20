import {useEffect, useState} from "react";

const Contador = () => {

    const [contador, setContador] = useState(10);
    const [showAlert, setShowAlert] = useState(0)
    const handleContador = () =>{
      setContador(contador +1);
  }
  const handleReducirContador = () =>{
      setContador(contador -1);
  }
  useEffect(()=>{
   setContador(12)
  },[]);

    useEffect(()=>{
       if (contador===15){
           alert('contador es 15')
       }
    },[contador]);
    useEffect(()=>{
       return ()=>{
           console.log('el componente se desmonto')
       }
    },);
    return (
      <>
          <h1>Componente contador</h1>
          <p>{contador}</p>
          <div>
              <button onClick={handleContador}>
                  Aumentar
              </button>
              <button onClick={handleReducirContador}>
                  Reducir
              </button>
          </div>
      </>
  )
}

export default Contador;
