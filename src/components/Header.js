import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { useDispatch, useSelector } from 'react-redux';
import { searchProduct } from './search/searchSlice';
import '../App.css'
function Header() {
  const dispatch = useDispatch()
  const {cartTotalQuantity} = useSelector((state) => state.cart)
  const [value, setValue] = useState('')
  const handleButton = (e) => {
    e.preventDefault()
    dispatch(searchProduct(value))
    setValue('')
  }
  return (
    <div >
 

<Navbar style={{backgroundColor:'black', color:'red'}} expand="lg">
      <Container fluid>
        {/* <Navbar.Brand href="#">Navbar scroll</Navbar.Brand> */}
        <Navbar.Toggle className='bg-danger' aria-controls="navbarScroll" />
        <Navbar.Collapse  id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <Nav.Link ><Link className="nav-link active text-success" to={`/`}><span><i class="fa-solid fa-house fa-xl"></i></span>Trang chủ</Link></Nav.Link>
            <Nav.Link><Link  className="nav-link active text-success" to={`/`}><span><i class="fa-solid fa-phone fa-xl"></i></span>Đặt hàng</Link></Nav.Link>
            <Nav.Link><Link className="nav-link active text-success" to={`/cart`}><span><i class="fa-solid fa-cart-shopping fa-xl"></i></span>Giỏ hàng <span className='cart-number'>{cartTotalQuantity}</span></Link></Nav.Link>
            <Nav.Link><Link className="nav-link active text-success" to={`/login`}><span><i class="fa-solid fa-arrow-right-to-bracket fa-xl"></i></span>Đăng nhập/Đăng ký</Link></Nav.Link>
          </Nav>
          <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
              value={value}
              onChange={(e) => setValue(e.target.value)}
            />
            <Button onClick={handleButton} variant="outline-success"><Link style={{textDecoration:'none'}} to={`/search`}>Search</Link></Button>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </div>
  )
}

export default Header
