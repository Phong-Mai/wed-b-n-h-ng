import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import { selectProduct } from '../features/counter/counterSlice'
import Card from 'react-bootstrap/Card'
import Header from './Header'
import Footer from './Footer'
import Carousel from 'react-bootstrap/Carousel'
import { addToCart } from '../features/cartSlice'
function Detail() {
  const loaddata = useSelector(selectProduct)
  const params = useParams()
  const dispatch = useDispatch();
  const handleAddToCart = (data) => {
    dispatch(addToCart(data))
  }
  return (
    <div className='bg-light'>
      <div className='container'>
        <div className='col'>
          <Header></Header>
           {/* show iphone */}
          {loaddata.phone.map((data) => (
            data.id === params.detailId ? (
              <div className='row'>
                <div className='col-lg-6 col-md-12 col-sm-12' key={data.id}  >
                  <Carousel variant="dark">
                    {data.img1.map((image, index) => (
                      <Carousel.Item  >
                        <img key={index}
                          height={500}
                          className="d-block w-100 "
                          src={image.image}
                          alt="First slide"
                        />
                      </Carousel.Item>
                    ))}
                  </Carousel>
                  <div style={{ marginTop: 30, marginBottom: 30 }}><b >{data.description}</b></div>
                  <h4>Bình luận</h4>
                  <div>
                    <div>
                      <textarea placeholder='nhập bình luận' style={{ width: 350, padding: 20 }}></textarea>
                    </div>
                    <div>
                      <div className='mt-1 w-50'><input placeholder='Họ và tên' /></div>
                      <div className='mt-1 w-50'><input placeholder='Số điện thoại' /></div>
                      <button className='btn btn-danger mt-1'>Gửi</button>
                    </div>
                  </div>
                </div>
                <div className='col-lg-6 col-md-12 col-sm-12'>
                  <h1 >{data.title}</h1>
                  <h6>Mua ngay</h6>
                  <h1 className='text-danger'>{data.price.replace(/\B(?=(\d{3})+(?!\d))/g, '.')} đ</h1>
                  <h6>Đã mua: {data.view}</h6>
                  <button onClick={()=> handleAddToCart(data)} className='btn btn-danger '>Đặt Hàng Ngay</button>
                  <Card style={{ marginTop: 60 }}>
                    <Card.Header style={{ backgroundColor: 'yellowgreen', color: 'white' }}><b>Ưu đãi dịch vụ</b></Card.Header>
                    <Card.Body style={{}}>
                      <Card.Text>Giảm thêm tới 1.5% cho thành viên của Di Động Việt.</Card.Text>
                      <Card.Text>Chỉ từ 2K/ngày có ngay Gói Bảo Hành Hư Lỗi - Đổi Mới trong 1 năm</Card.Text>
                      <Card.Text>Miễn phí Giao hàng siêu tốc trong 1 giờ</Card.Text>
                      <Card.Text>Giảm thêm 5% tối đa 500.000đ thanh toán qua Kredivo</Card.Text>
                      <Card.Text>Giảm thêm 30% tối đa 600.000đ mở thẻ qua TPBank EVO</Card.Text>
                      <Card.Text>Giảm thêm 200.000đ mở thẻ qua VIB</Card.Text>
                      <Card.Text>Giảm thêm 500.000đ mở thẻ qua VPBANK </Card.Text>
                    </Card.Body>
                  </Card>

                </div>
              </div>) : undefined
          ))}
          {/* show laptop */}
          {loaddata.laptop.map((data) => (
            data.id === params.detailId ? (
              <div className='row'>
                <div className='col-lg-6 col-md-12 col-sm-12' key={data.id}  >
                <Carousel variant="dark">
                    {data.img1.map((image, index) => (
                      <Carousel.Item  >
                        <img key={index}
                          height={500}
                          className="d-block w-100 "
                          src={image.image}
                          alt="First slide"
                        />
                      </Carousel.Item>
                    ))}
                  </Carousel>
                  <div style={{ marginTop: 30, marginBottom: 30 }}><b >{data.description}</b></div>
                  <h4>Bình luận</h4>
                  <div>
                    <div>
                      <textarea placeholder='nhập bình luận' style={{ width: 350, padding: 20 }}></textarea>
                    </div>
                    <div>
                      <div className='mt-1 w-50'><input placeholder='Họ và tên' /></div>
                      <div className='mt-1 w-50'><input placeholder='Số điện thoại' /></div>
                      <button className='btn btn-danger mt-1'>Gửi</button>
                    </div>
                  </div>
                </div>
                <div className='col-lg-6 col-md-12 col-sm-12'>
                  <h1 >{data.title}</h1>
                  <h6>Mua ngay</h6>
                  <h1 className='text-danger'>{data.price.replace(/\B(?=(\d{3})+(?!\d))/g, '.')} đ</h1>
                  <h6>Đã mua: {data.view}</h6>
                  <button onClick={()=> handleAddToCart(data)} className='btn btn-danger '>Đặt Hàng Ngay</button>
                  <Card style={{ marginTop: 60 }}>
                    <Card.Header style={{ backgroundColor: 'yellowgreen', color: 'white' }}><b>Ưu đãi dịch vụ</b></Card.Header>
                    <Card.Body style={{}}>
                      <Card.Text>Giảm thêm tới 1.5% cho thành viên của Di Động Việt.</Card.Text>
                      <Card.Text>Chỉ từ 2K/ngày có ngay Gói Bảo Hành Hư Lỗi - Đổi Mới trong 1 năm</Card.Text>
                      <Card.Text>Miễn phí Giao hàng siêu tốc trong 1 giờ</Card.Text>
                      <Card.Text>Giảm thêm 5% tối đa 500.000đ thanh toán qua Kredivo</Card.Text>
                      <Card.Text>Giảm thêm 30% tối đa 600.000đ mở thẻ qua TPBank EVO</Card.Text>
                      <Card.Text>Giảm thêm 200.000đ mở thẻ qua VIB</Card.Text>
                      <Card.Text>Giảm thêm 500.000đ mở thẻ qua VPBANK </Card.Text>
                    </Card.Body>
                  </Card>

                </div>
              </div>) : undefined
          ))}
          {/* show tablet */}
          {loaddata.tablet.map((data) => (
            data.id === params.detailId ? (
              <div className='row'>
                <div className='col-lg-6 col-md-12 col-sm-12' key={data.id}  >
                <Carousel variant="dark">
                    {data.img1.map((image, index) => (
                      <Carousel.Item  >
                        <img key={index}
                          height={500}
                          className="d-block w-100 "
                          src={image.image}
                          alt="First slide"
                        />
                      </Carousel.Item>
                    ))}
                  </Carousel>
                  <div style={{ marginTop: 30, marginBottom: 30 }}><b >{data.description}</b></div>
                  <h4>Bình luận</h4>
                  <div>
                    <div>
                      <textarea placeholder='nhập bình luận' style={{ width: 350, padding: 20 }}></textarea>
                    </div>
                    <div>
                      <div className='mt-1 w-50'><input placeholder='Họ và tên' /></div>
                      <div className='mt-1 w-50'><input placeholder='Số điện thoại' /></div>
                      <button className='btn btn-danger mt-1'>Gửi</button>
                    </div>
                  </div>
                </div>
                <div className='col-lg-6 col-md-12 col-sm-12'>
                  <h1 >{data.title}</h1>
                  <h6>Mua ngay</h6>
                  <h1 className='text-danger'>{data.price.replace(/\B(?=(\d{3})+(?!\d))/g, '.')} đ</h1>
                  <h6>Đã mua: {data.view}</h6>
                  <button onClick={()=> handleAddToCart(data)} className='btn btn-danger '>Đặt Hàng Ngay</button>
                  <Card style={{ marginTop: 60 }}>
                    <Card.Header style={{ backgroundColor: 'yellowgreen', color: 'white' }}><b>Ưu đãi dịch vụ</b></Card.Header>
                    <Card.Body style={{}}>
                      <Card.Text>Giảm thêm tới 1.5% cho thành viên của Di Động Việt.</Card.Text>
                      <Card.Text>Chỉ từ 2K/ngày có ngay Gói Bảo Hành Hư Lỗi - Đổi Mới trong 1 năm</Card.Text>
                      <Card.Text>Miễn phí Giao hàng siêu tốc trong 1 giờ</Card.Text>
                      <Card.Text>Giảm thêm 5% tối đa 500.000đ thanh toán qua Kredivo</Card.Text>
                      <Card.Text>Giảm thêm 30% tối đa 600.000đ mở thẻ qua TPBank EVO</Card.Text>
                      <Card.Text>Giảm thêm 200.000đ mở thẻ qua VIB</Card.Text>
                      <Card.Text>Giảm thêm 500.000đ mở thẻ qua VPBANK </Card.Text>
                    </Card.Body>
                  </Card>

                </div>
              </div>) : undefined
          ))}
          {/* show earphone */}
          {loaddata.earphone.map((data) => (
            data.id === params.detailId ? (
              <div className='row'>
                <div className='col-lg-6 col-md-12 col-sm-12' key={data.id}  >
                <Carousel variant="dark">
                    {data.img1.map((image, index) => (
                      <Carousel.Item  >
                        <img key={index}
                          height={500}
                          className="d-block w-100 "
                          src={image.image}
                          alt="First slide"
                        />
                      </Carousel.Item>
                    ))}
                  </Carousel>
                  <div style={{ marginTop: 30, marginBottom: 30 }}><b >{data.description}</b></div>
                  <h4>Bình luận</h4>
                  <div>
                    <div>
                      <textarea placeholder='nhập bình luận' style={{ width: 350, padding: 20 }}></textarea>
                    </div>
                    <div>
                      <div className='mt-1 w-50'><input placeholder='Họ và tên' /></div>
                      <div className='mt-1 w-50'><input placeholder='Số điện thoại' /></div>
                      <button className='btn btn-danger mt-1'>Gửi</button>
                    </div>
                  </div>
                </div>
                <div className='col-lg-6 col-md-12 col-sm-12'>
                  <h1 >{data.title}</h1>
                  <h6>Mua ngay</h6>
                  <h1 className='text-danger'>{data.price.replace(/\B(?=(\d{3})+(?!\d))/g, '.')} đ</h1>
                  <h6>Đã mua: {data.view}</h6>
                  <button onClick={()=> handleAddToCart(data)} className='btn btn-danger '>Đặt Hàng Ngay</button>
                  <Card style={{ marginTop: 60 }}>
                    <Card.Header style={{ backgroundColor: 'yellowgreen', color: 'white' }}><b>Ưu đãi dịch vụ</b></Card.Header>
                    <Card.Body style={{}}>
                      <Card.Text>Giảm thêm tới 1.5% cho thành viên của Di Động Việt.</Card.Text>
                      <Card.Text>Chỉ từ 2K/ngày có ngay Gói Bảo Hành Hư Lỗi - Đổi Mới trong 1 năm</Card.Text>
                      <Card.Text>Miễn phí Giao hàng siêu tốc trong 1 giờ</Card.Text>
                      <Card.Text>Giảm thêm 5% tối đa 500.000đ thanh toán qua Kredivo</Card.Text>
                      <Card.Text>Giảm thêm 30% tối đa 600.000đ mở thẻ qua TPBank EVO</Card.Text>
                      <Card.Text>Giảm thêm 200.000đ mở thẻ qua VIB</Card.Text>
                      <Card.Text>Giảm thêm 500.000đ mở thẻ qua VPBANK </Card.Text>
                    </Card.Body>
                  </Card>
                </div>
              </div>) : undefined
          ))}
          {/* show watch */}
          {loaddata.watch.map((data) => (
            data.id === params.detailId ? (
              <div className='row'>
                <div className='col-lg-6 col-md-12 col-sm-12' key={data.id}  >
                <Carousel variant="dark">
                    {data.img1.map((image, index) => (
                      <Carousel.Item  >
                        <img key={index}
                          height={500}
                          className="d-block w-100 "
                          src={image.image}
                          alt="First slide"
                        />
                      </Carousel.Item>
                    ))}
                  </Carousel>
                  <div style={{ marginTop: 30, marginBottom: 30 }}><b >{data.description}</b></div>
                  <h4>Bình luận</h4>
                  <div>
                    <div>
                      <textarea placeholder='nhập bình luận' style={{ width: 350, padding: 20 }}></textarea>
                    </div>
                    <div>
                      <div className='mt-1 w-50'><input placeholder='Họ và tên' /></div>
                      <div className='mt-1 w-50'><input placeholder='Số điện thoại' /></div>
                      <button className='btn btn-danger mt-1'>Gửi</button>
                    </div>
                  </div>
                </div>
                <div className='col-lg-6 col-md-12 col-sm-12'>
                  <h1 >{data.title}</h1>
                  <h6>Mua ngay</h6>
                  <h1 className='text-danger'>{data.price.replace(/\B(?=(\d{3})+(?!\d))/g, '.')} đ</h1>
                  <h6>Đã mua: {data.view}</h6>
                  <button onClick={()=> handleAddToCart(data)} className='btn btn-danger '>Đặt Hàng Ngay</button>
                  <Card style={{ marginTop: 60 }}>
                    <Card.Header style={{ backgroundColor: 'yellowgreen', color: 'white' }}><b>Ưu đãi dịch vụ</b></Card.Header>
                    <Card.Body style={{}}>
                      <Card.Text>Giảm thêm tới 1.5% cho thành viên của Di Động Việt.</Card.Text>
                      <Card.Text>Chỉ từ 2K/ngày có ngay Gói Bảo Hành Hư Lỗi - Đổi Mới trong 1 năm</Card.Text>
                      <Card.Text>Miễn phí Giao hàng siêu tốc trong 1 giờ</Card.Text>
                      <Card.Text>Giảm thêm 5% tối đa 500.000đ thanh toán qua Kredivo</Card.Text>
                      <Card.Text>Giảm thêm 30% tối đa 600.000đ mở thẻ qua TPBank EVO</Card.Text>
                      <Card.Text>Giảm thêm 200.000đ mở thẻ qua VIB</Card.Text>
                      <Card.Text>Giảm thêm 500.000đ mở thẻ qua VPBANK </Card.Text>
                    </Card.Body>
                  </Card>
                </div>
              </div>) : undefined
          ))}
          <Footer></Footer>
        </div>
      </div>
    </div>
  )
}

export default Detail
