import React from 'react' ;
import {Card} from 'react-bootstrap';
import { Button } from 'react-bootstrap';


const ProductList = (props)=> {
  return (
    <Card style={{ width: '18rem' , padding : '10px' }}>
    <Card.Title>
        {props.productName}
    </Card.Title>
    { <Card.Text>
        {props.children}
    </Card.Text> 
    }
    <Button variant="primary" className="mr-1">View Deatils</Button>
    <Button style={{ marginTop:'5px'}} variant="primary" className="mr-1" onClick = {props.deleteItem}>Remove</Button>

    </Card>
    
   )
   }

export default ProductList
