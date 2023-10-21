import { NavLink } from "react-router-dom";
import Slider from "react-slick";
import CategoryCard from "../../cards/CategoryCard";



const Category = ({data}) =>
{
    let settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 6,
        arrows: false,  
        slidesToScroll: 1,
        responsive: [{
            breakpoint: 600,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2,
              initialSlide: 2
            }
          }]
      };
    return data.img_url? (
        <div className="card z-depth-0">
            <div className="cardTitleWrapper">
                <div className="cardTitle">
                    <h6>{data.title}</h6>
                </div>
                <div className="cardAction">
                    <NavLink to='/' className='btn'>More</NavLink>
                </div>
            </div>
            <Slider {...settings}>
            {
                data.img_url.map((item,index)=>
                {
                    return <CategoryCard data={item} key={index}/>
                })
            }
            </Slider>
        </div>
    ) : ''
}

export default Category;