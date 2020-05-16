import React , {Component} from 'react'
import './Products.css'
import ProductList from '../productList/productList'
import ErrorBoundary from '../error/ErrorBound'
import PortalModal  from "../portal/Portal"
import { Row,Col,Container } from 'react-bootstrap'
import { Button ,Form  } from 'react-bootstrap'
import { Badge} from 'react-bootstrap'
import CardDeck from 'react-bootstrap/CardDeck'

class Products extends Component{
  constructor(props) {
    super(props);
    
    this.state = {
     items :  [
        {  
          "id": 1,
          "ProductName": "Item 1",
          "Price" : "$100",
          "Description": "Description of item 1"
        },
        {
          "id": 2,
          "ProductName": "Item 2",
          "Price" : "$400",
          "Description": "Description of item 2"
        },
        {
          "id": 3,
          "ProductName": "Item 3",
          "Price" : "$600",
          "Description": "Description of item 3"
        },
        {
          "id": 4,
          "ProductName": "Item 4",
          "Price" : "$800",
          "Description": "Description of item 4"
        }
      ],
      showModal: false
    };
  }
  addItem = (e) =>{
    e.preventDefault();
    const items = Object.assign([] , this.state.items) ;
    const newId = items[items.length-1].id + 1;
     this.setState({
      items: items.concat({
        id:newId,
        ProductName:this.refs.prdName.value,
        Price : `$${this.refs.price.value}`,
        Description: this.refs.description.value
      })

     })

  }

  
handleDelete = (index ,e) =>{
   const items = Object.assign([] , this.state.items) ;
   items.splice(index,1);
   this.setState({items:items})
}
handleShowMessageClick = () => this.setState({showModal: true})
handleCloseModal = () => this.setState({showModal: false})


render(){
    let itemLength = this.state.items.length;
    
      return (
        <ErrorBoundary>
        <Container style={{ marginTop:'15px'}}>
        <Row>
            <Col  sm={2}>
       <h4><Badge variant="secondary">Total Products : {itemLength}</Badge></h4>
        <Button variant="outline-primary" className="mr-1" onClick={this.handleShowMessageClick}>Add Products</Button>
        {this.state.showModal ? (
            <PortalModal>
             <Form onSubmit={this.addItem}>
             <Button className = "closebtn" onClick={this.handleCloseModal}>X </Button>
              <div className="hdng"> Add Product </div> 
              <hr/>
              <Form.Group controlId="itemName">
             <Form.Label>Item Name :</Form.Label>
             <Form.Control ref="prdName" type="text" placeholder="Enter ProductName"/>
            </Form.Group>
           <Form.Group controlId="itemPrice">
         <Form.Label>Price :</Form.Label>
         <Form.Control ref="price" type="number" placeholder="Enter Price " />
        </Form.Group>
       <Form.Group controlId="itemDescription">
      <Form.Label>Description :</Form.Label>
       <Form.Control ref="description"  type="text" placeholder="Enter Description" />
      </Form.Group>
     </Form>
     <Button  type="submit" variant="primary" onClick={this.addItem} >
              Add
        </Button>
          </PortalModal>
          ) : null}
      </Col>
      <Col  sm={10}>
      <CardDeck>
        {
             this.state.items.map((productList,index)=>{
                return( 
                <ProductList productName={productList.ProductName} deleteItem = {this.handleDelete}>
                  <h5>{productList.Price}</h5>
                  <h6> {productList.Description}</h6>
                </ProductList>
                  )
             })
          } 
          </CardDeck>    
        </Col> 
        </Row>
        </Container>
        </ErrorBoundary>
      )

    }


  }
export default Products 