import {Alert } from "react-bootstrap";

//se especifica cuales son los props y el tipo de dato que el componente puede recibir
type AlertGeneratorProps = {
    message: string;
}

//el componente hijo tiene "argumentos" del tipo "AlertGeneratorProps" 
const AlertGenerator = ({message}: AlertGeneratorProps) => {
    return (
        <Alert variant="success" className="mt-2 w-25">
            <Alert.Heading> Mensaje recibido </Alert.Heading>
            <p>
                {message}
            </p>

        </Alert>
    )
}

export default AlertGenerator;