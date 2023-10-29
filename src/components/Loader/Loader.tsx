import {Spinner} from "react-bootstrap";

const Loader = () => {
    return (
        <div className ="loader">
            <Spinner animation="border" variant="primary" role="status" className="loader-spinner"/>
        </div>
    )
}

export default Loader;