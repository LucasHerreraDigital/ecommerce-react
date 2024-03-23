import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Mother from '../../assets/imgs/mother.jpeg';

const Product = (props) => {
    const {product} = props;
    if (window.innerWidth > 1080) {
    return (  
        
        <Card style={{ width: '17rem' , margin:'0.15rem', height:'26rem'}}>
            <Card.Img variant="top" src={Mother} />
            <Card.Body>
                <Card.Title>{product.name}</Card.Title>
                <Card.Text>
                {product.description}
                </Card.Text>
                <Button variant="primary">Go somewhere</Button>
            </Card.Body>
        </Card>
    );}else{
        return(
            <Card className='w-17'> 
                <Card.Header >Featured</Card.Header>
                <Card.Body>
                    <Card.Title>{product.name}</Card.Title>
                    <Card.Text>
                    {product.description}
                    </Card.Text>
                    <Button variant="primary">Go somewhere</Button>
                </Card.Body>
            </Card>
        );
    }
}
 
export default Product;