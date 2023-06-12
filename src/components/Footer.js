import React from 'react'
import { Link } from 'react-router-dom'
function Footer() {
  return (
    <div className='row border mt-2'>
      <div className='d-none d-lg-block col-lg-3 d-md-block col-md-6 mt-2'>
        <h6 style={{color: 'red'}}>Hố trợ khách hàng</h6>
        <p>Danh sách cửa hàng</p>
        <p>Mua hàng trả góp</p>
        <p>Tra cứu điểm thành viên</p>
        <p>Tuyển dụng mới nhất</p>
      </div>
      <div className='col-lg-3 col-md-6 mt-2'>
        <h6 style={{color:'red'}}>Chính sách</h6>
        <p>Chính sách bảo hành</p>
        <p>Chính sách đổi trả</p>
        <p>Chính sách bán hàng</p>
        <p>Xem thêm</p>
      </div>
      <div className='col-lg-3 col-md-6 mt-2'>
        <h6 style={{color:'red'}}>Liên hệ</h6>
        <p style={{display:'flex' ,justifyContent:'space-between'}}>Kỹ thuật:  <Link style={{textDecoration:'none'}} to="tel:12345678" >012345678</Link><b>(8:30 - 21:30)</b></p>
        <p style={{display:'flex' ,justifyContent:'space-between'}}>Bảo hành: <Link style={{textDecoration:'none'}} to="tel:12345678">012345678</Link><b>(8:30 - 21:30)</b></p>
        <p style={{display:'flex' ,justifyContent:'space-between'}}>Góp ý: <Link style={{textDecoration:'none'}} href='mailto:abc@gmail.com'>abc@gmail.com</Link><b>(8:30 - 21:30)</b></p>
        <p style={{display:'flex' ,justifyContent:'space-between'}}>Gọi mua:<Link style={{textDecoration:'none'}} to="tel:12345678">012345678</Link><b>(8:30 - 21:30)</b></p>
      </div>
      <div className='col-lg-3 col-md-6 mt-2'>
        <div className='d-flex'>
        <Link style={{textDecoration:'none',color:'purple' }} to={`/#`}><i class="fa-brands fa-twitter fa-2xl m-4"></i><p>500 Farm</p></Link>
        <Link style={{textDecoration:'none' }} to={`/#`}><i class="fa-brands fa-facebook fa-2xl m-4"></i><p>450k Farm</p></Link>
        <Link style={{textDecoration:'none' ,color:'red'}} to={`/#`}><i class="fa-brands fa-youtube fa-2xl m-4"></i><p>3k Đăng ký</p></Link>
        <Link style={{textDecoration:'none' ,color:'black'}} to={`/#`}><i class="fa-brands fa-tiktok fa-2xl m-4"></i><p>48k Farm</p></Link>
        </div>
        <h5>Đối tác sửa chữa và bảo hành</h5>
        <div className='d-flex justify-content-between'>
            <img src='https://didongviet.vn/svg/statics/vertu.svg'/>
            <img src='https://didongviet.vn/svg/statics/vdd.svg'/>
            <img src='https://didongviet.vn/svg/statics/techmag-10.svg'/>
        </div>
        
        </div>
     
        <p style={{padding:5,display:'flex',justifyContent:'center',alignItems:'center', backgroundColor:'black', color:'white'}}>
          Copy &copy; Hoàng Phong 2023 Email: phongmhp@gmail.com
        </p>
    </div>
  )
}

export default Footer
