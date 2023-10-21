import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import Slider from "react-slick";
import { getAllVideoPosts } from "../../../http";
import VideoCard from "../../cards/VideoCard";
import { useHistory } from "react-router";
import Loading from '../../Loading';



const Videos = () =>
{
    const [loading,setLoading] = useState(true);
    const [posts,setPosts] = useState({
        festival:'',
        category:'',    
    });

    const history = useHistory();

    let settings = {
        dots: false,
        infinite: true,
        arrows: false,
        speed: 500,
        slidesToShow: 5,
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



    useEffect(()=>
    {
        (async()=>{
            const {data} = await getAllVideoPosts({});
            setPosts(data);
            setLoading(false);
        })()

    },[])

    const sendToVideoPage = (videoId) =>
    {
        history.push(`/video/${videoId}`)
        console.log(videoId)
    }

    return(
        loading ? <Loading/> :
        <>
            {
                posts.festival? 
                (
                    <div className="card">
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
                                posts.festival.map((data,index)=>{
                                return <VideoCard onClick={()=>sendToVideoPage(data.id)} key={index} data={data}/>
                                })
                            }
                            </Slider>
                    </div>
                )
                : ''
            }
            {
                posts.category? 
                (
                    <div className="card">
                        <div className="cardTitleWrapper">
                            <div className="cardTitle">
                                <h6>Categories</h6>
                            </div>
                            <div className="cardAction">
                                <NavLink to='/' className='btn'>More</NavLink>
                            </div>
                        </div>
                            <Slider {...settings}>
                            {
                                posts.category.map((data,index)=>
                                {
                                    return <VideoCard key={index} data={data}/>
                                })
                            }
                            </Slider>
                    </div>

                )
                : ''
            }
        </>
    )
}

export default Videos;