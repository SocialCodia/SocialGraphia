import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import Slider from "react-slick";
import FestivalCard from "../cards/FestivalCard";



const Festival = () =>
{
    let settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 6,
        slidesToScroll: 1,
        responsive: [{
            breakpoint: 1000,
            settings: {
              slidesToShow: 4,
              slidesToScroll: 1,
              initialSlide: 4
            }
          }],
        responsive: [{
            breakpoint: 600,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2,
              initialSlide: 2
            }
          }]
      };

    const {festival} = useSelector((state)=>state.mainSlice);
    console.log(festival);
    
    console.log('isFestival Nul ' + festival!=null)
    console.log(festival);
    return festival? (
        <div className="card z-depth-0">
            <div className="cardTitleWrapper">
                <div className="cardTitle">
                    <h6>Festival</h6>
                </div>
                <div className="cardAction">
                    <NavLink to='/' className='btn'>More</NavLink>
                </div>
            </div>
            <Slider {...settings}>
            {
                festival.map((data,index)=>
                {
                    return <FestivalCard data={data} key={index}/>
                })
            }
            </Slider>
        </div>
    ) : ''
}

export default Festival;