import { useState, useEffect } from "react";
import { Product } from "../../types/Product";
import { ProductService } from "../../services/ProductService";
import Loader from "../Loader/Loader";
import {Button, Table} from 'react-bootstrap';
import { ModalType } from "../../types/ModalType";
import ProductModal from "../ProductModal/ProductModal";
import EditButton from "../EditButton/EditButton";
import DeleteButton from "../DeleteButton/DeteleButton";


const ProductTable = () => {
    
    //variable que va a contener los datos recibidos por la api
    const [products, setProducts] = useState<Product[]>([]);

    //variable que muestra el componente Loader hasta que se reciban los datos de la api
    const [isLoading, setIsLoading] = useState(true);

    //variable que va a actualizar los datos de la tabla luego de cada operación exitosa
    //se declara antes pq es una dependencia del useEffect
    const [refreshData, setRefreshData] = useState(false);
    
    //este hook se va a ejecutar cada vez que se renderice el componente o refreshData cambie de estado 
    useEffect( () => {
        //llamamos a la funcion para obtener todos los productos declarados en el ProductService 
        const fetchProducts = async () => {
            const products = await ProductService.getProducts();
            setProducts(products);
            setIsLoading(false);
        };
        fetchProducts();
    }, [refreshData]);

    //test, este log esta modificado para que muestre los datos de una manera mas legible
    console.log(JSON.stringify(products, null, 2));


    //const para inicializar un producto por defecto y evitar el undefined
    //vamos a crear un producto nuevo
    const initializableNewProduct = (): Product => {
        return {
            id: 0,
            title: "",
            price: 0,
            description: "",
            category: "",
            image: "",
        };
    };

    //Producto seleccionado que se va a pasar como prop al Modal 
    const [product, setProduct] = useState<Product>(initializableNewProduct);

    //const para manejar el estado del modal
    const [showModal, setShowModal] = useState(false);
    const [modalType, setModalType] = useState<ModalType>(ModalType.NONE);
    const [title, setTitle] = useState("");

    //logica del modal
    const handleClick = (newTitle: string, prod: Product, modal: ModalType) => {
        setTitle(newTitle);
        setModalType(modal);
        setProduct(prod);
        setShowModal(true);
    };


    return (
        <>
        <Button onClick={ () => handleClick("Nuevo producto", initializableNewProduct(), ModalType.CREATE)}> Nuevo Producto</Button>


            {isLoading ? <Loader/> : (
                    <Table hover>
                        <thead>
                            <tr>
                                <th>Titulo</th>
                                <th>Precio</th>
                                <th>Descripcion</th>
                                <th>Categoría</th>
                                <th>Imagen</th>
                                <th>Editar</th>
                                <th>Eliminar</th>
                            </tr>
                        </thead>
                        <tbody>
                            {products.map(product => (
                                <tr key={product.id}>
                                    <td>{product.title}</td>
                                    <td>{product.price}</td>
                                    <td>{product.description}</td>
                                    <td>{product.category}</td>
                                    <td><img src={product.image} alt={product.title} style= {{ width: '50px'}} /></td>
                                    <td> <EditButton onClick={() => handleClick("Editar producto", product, ModalType.UPDATE)}></EditButton> </td>
                                    <td> <DeleteButton onClick={() => handleClick("Borrar producto", product, ModalType.DELETE)}></DeleteButton> </td>
                                </tr>
                            ))}
                        </tbody>
                    </Table>
                )}

                {showModal && (
                    <ProductModal
                    show={showModal}
                    onHide={() => setShowModal(false)}
                    title={title}
                    modalType={modalType}
                    prod={product}
                    refreshData={setRefreshData}
                    />
                )}
        </>
    )
}

export default ProductTable;