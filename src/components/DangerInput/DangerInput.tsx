import React, {useState} from 'react';
import Form from 'react-bootstrap/Form';
import DangerBar from '../DangerBar/DangerBar';



const DangerInput = () => {
    
    //variable que va a guardar el valor elegido por el usuario
    const [value, setValue] = useState(0); 

    //Actualizar el estado de value
    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setValue (Number(event.target.value));
        //event.target.value representa el valor actual del elemento, y como es una cadena con Number la convierto en numero
    }

    return (
        <div className='m-3 w-50'>
            <h2>Ejemplo 1</h2>
            
            {/* Componente Padre */ }
            <Form.Range value={value} onChange={handleChange}/>

            {/* Componente Hijo */}
            <DangerBar value= {value}/>

        </div>
    )
}

export default DangerInput;