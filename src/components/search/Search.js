import React from 'react'
import { Card } from 'react-bootstrap' 
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { addToCart } from '../../features/cartSlice'
import Header from '../Header'
import Footer from '../Footer'
import { resultSearchIphone, resultSearchTablet, resultSearchLaptop, resultSearchWatch, resultSearchEarphone } from './searchSlice'

function Search() {
    const dispatch = useDispatch()
    const searchIphone = useSelector(resultSearchIphone)
    const searchTablet = useSelector(resultSearchTablet)
    const searchLaptop = useSelector(resultSearchLaptop)
    const searchWatch = useSelector(resultSearchWatch)
    const searchEarphone = useSelector(resultSearchEarphone)
    const search = useSelector((state) => state.search.search )
    const handleAddToCart = (data) => {
      dispatch(addToCart(data));
    }

    return (
        <div className='bg-danger'>
        <div className='container bg-white'>
          <Header></Header>
          <h1>Kết quả tìm kiếm</h1>
          <div className='row'>
            {search === ''? <h1>Không tìm thấy</h1> :
            <div className='row'>
               { searchIphone.map((data) => 
                <div className='col-lg-3 col-md-6 col-sm-12'>
                  <Card key={data.id} style={{ marginBottom: 10 }}>
                    <Link to={`/detail/${data.id}`}>
                      <Card.Img id='image' variant="top" src={data.img} />
                    </Link>
                    <Card.Body>
                      <Card.Title>{data.title}</Card.Title>
                      <h4 style={{ color: 'red' }}>{data.price.replace(/\B(?=(\d{3})+(?!\d))/g, '.')} đ </h4>
                      <Link onClick={() => handleAddToCart(data)} className='btn btn-primary d-flex justify-content-center' to={`/cart`}>Cart</Link>        
                      </Card.Body>
                  </Card>
                </div> 
            )}
            {searchTablet.map((data) => 
                <div className='col-lg-3 col-md-6 col-sm-12'>
                  <Card key={data.id} style={{ marginBottom: 10 }}>
                    <Link to={`/detail/${data.id}`}>
                      <Card.Img id='image' variant="top" src={data.img} />
                    </Link>
                    <Card.Body>
                      <Card.Title>{data.title}</Card.Title>
                      <h4 style={{ color: 'red' }}>{data.price.replace(/\B(?=(\d{3})+(?!\d))/g, '.')} đ </h4>
                      <Link onClick={() => handleAddToCart(data)} className='btn btn-primary d-flex justify-content-center' to={`/cart`}>Cart</Link>        
                      </Card.Body>
                  </Card>
                </div> 
            )}
            {searchEarphone.map((data) => 
                <div className='col-lg-3 col-md-6 col-sm-12'>
                  <Card key={data.id} style={{ marginBottom: 10 }}>
                    <Link to={`/detail/${data.id}`}>
                      <Card.Img id='image' variant="top" src={data.img} />
                    </Link>
                    <Card.Body>
                      <Card.Title>{data.title}</Card.Title>
                      <h4 style={{ color: 'red' }}>{data.price.replace(/\B(?=(\d{3})+(?!\d))/g, '.')} đ </h4>
                      <Link onClick={() => handleAddToCart(data)} className='btn btn-primary d-flex justify-content-center' to={`/cart`}>Cart</Link>        
                      </Card.Body>
                  </Card>
                </div> 
            )}
            {searchLaptop.map((data) => 
                <div className='col-lg-3 col-md-6 col-sm-12'>
                  <Card key={data.id} style={{ marginBottom: 10 }}>
                    <Link to={`/detail/${data.id}`}>
                      <Card.Img id='image' variant="top" src={data.img} />
                    </Link>
                    <Card.Body>
                      <Card.Title>{data.title}</Card.Title>
                      <h4 style={{ color: 'red' }}>{data.price.replace(/\B(?=(\d{3})+(?!\d))/g, '.')} đ </h4>
                      <Link onClick={() => handleAddToCart(data)} className='btn btn-primary d-flex justify-content-center' to={`/cart`}>Cart</Link>        
                      </Card.Body>
                  </Card>
                </div> 
            )}
            {searchWatch.map((data) => 
                <div className='col-lg-3 col-md-6 col-sm-12'>
                  <Card key={data.id} style={{ marginBottom: 10 }}>
                    <Link to={`/detail/${data.id}`}>
                      <Card.Img id='image' variant="top" src={data.img} />
                    </Link>
                    <Card.Body>
                      <Card.Title>{data.title}</Card.Title>
                      <h4 style={{ color: 'red' }}>{data.price.replace(/\B(?=(\d{3})+(?!\d))/g, '.')} đ </h4>
                      <Link onClick={() => handleAddToCart(data)} className='btn btn-primary d-flex justify-content-center' to={`/cart`}>Cart</Link>        
                      </Card.Body>
                  </Card>
                </div> 
            )}
            </div>
            }
           
      
        </div>
        <Footer></Footer>
        </div>
        </div>
      )
}

export default Search
