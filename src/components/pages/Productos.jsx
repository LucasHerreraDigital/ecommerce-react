import Product from "../Product/Product";
import Mother from '../../assets/imgs/mother.jpeg';

const Productos = () => {
    const products =[{
        name:"hola soy producto1",
        description:"soy la descripcion del producto 1",
    },{
        name:"hola soy producto2",
        description:"soy la descripcion del producto 2",
        
    },{
        name:"hola soy producto3",
        description:"soy la descripcion del producto 3"
    },{
        name:"hola soy producto1",
        description:"soy la descripcion del producto 1",
    },{
        name:"hola soy producto2",
        description:"soy la descripcion del producto 2",
        
    },{
        name:"hola soy producto3",
        description:"soy la descripcion del producto 3"
    },{
        name:"hola soy producto1",
        description:"soy la descripcion del producto 1",
    },{
        name:"hola soy producto2",
        description:"soy la descripcion del producto 2",
        
    },{
        name:"hola soy producto3",
        description:"soy la descripcion del producto 3"
    },{
        name:"hola soy producto1",
        description:"soy la descripcion del producto 1",
    },{
        name:"hola soy producto2",
        description:"soy la descripcion del producto 2",
        
    },{
        name:"hola soy producto3",
        description:"soy la descripcion del producto 3"
    }]
    
    return ( 
        <div className="m-3 flex flex-wrap " >
           {products.map(function(product){
            return(
                <Product product={product}/>
            )
           })}
        </div>
     );
}
 
export default Productos;