import React from 'react'
import Slider from "react-slick";
import './Carousel.scss';
import '../../customCompoent/Button'
import { Button } from '../../customCompoent/Button';
function Carousel() {
    const settings = {
        dots: true,
        infinite: true,
        speed: 1000,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay:true
        

        
      };
      const images = [{
        id :2 ,
        image :'https://thuthuatnhanh.com/wp-content/uploads/2020/01/hinh-nen-cho-chan-ngan-corgi-dep-dang-tao-dang-chup-anh.jpeg'
      },
      {
        id :3 ,
        image :'https://i0.wp.com/drkhoe.vn/wp-content/uploads/2020/05/hinh-anh-3-con-cho-9.jpg'
      },
      {
        id :4,
        image :'https://petmaster.vn/petroom/wp-content/uploads/2020/04/meo-anh-1.jpg'
      }]
  return (
    <div className='carousel' >
        
        <Slider {...settings} >
          
          <div  className='imageContainer'>
                  
                  <div className='image' style={{background : `url(https://s3.cloud.cmctelecom.vn/tinhte2/2020/03/4936916_cute-cats-wallpapers-11____by____twalls.jpg)`}}>
                     <div className="image_intro" style={{height:'100%',width:'100%',display:'flex',justifyContent:'center',alignItems:'center'}}>
                     <div style={{width:'40%'}}>
                     <span style={{display:'block',color:'white',fontSize:'60px',textAlign:'center',fontWeight:600}}>We care <br /> for every pets</span>
                      <p  style={{textAlign:'center',color:'white',marginTop:10}}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis odio earum recusandae odit laboriosam iste quibusdam cupiditate in placeat illo.</p>
                      
                      <Button content='Get Info' styleCss={{fontSize:'20px'}}/>
                     </div>
                     </div>
                  </div>
              </div>
               {images.map((image,index)=>{
            return (
                <div key={index} className='imageContainer'>
                  
                    <div className='image' style={{background : `url(${image.image})`}}>
                       
                    </div>
                </div>
            )
          })}
         
        </Slider>
      </div>
  )
}

export default Carousel