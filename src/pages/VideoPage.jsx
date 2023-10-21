import { useEffect, useState } from "react";
import { useParams } from "react-router";
import Loading from "../components/Loading";
import { getLanguageVideo } from "../http";

const VideoPage = () =>
{
    const [loading,setLoading]  = useState(true);
    const {videoId} = useParams();
    const [video,setVideo] = useState();
    const [initialVideo, setInitialVideo] = useState();
    const [videoid,languageid,offset] = [videoId,0,0];
    useEffect(()=>
    {
        (async()=>{
            const {data} = await getLanguageVideo({videoid,languageid,offset});
            setVideo(data);
            setInitialVideo(data.data[0].video);
            setLoading(false)
        })();
    },[])

    return loading? <Loading/> : 
    video? (
        <div className="card cusContainer z-depth-0">
            <div className="card-content center">
                <div className="row">
                    <div className="col l6 m6 s12">
                        <video src={initialVideo} autoPlay width='600px' className='responsive-video' alt="" />
                    </div>
                    <div className="col l6 m6 s12">
                        <h5>Choose Whatever you like.</h5>
                        <div className="row">
                            {
                                video.data.map((item,index)=>{
                                    return (
                                        <div className="col l3 m3 s6 item" onClick={()=>setInitialVideo(item.video)}>
                                            <img src={item.image}  className='responsive-img' alt="" />
                                        </div>
                                    )
                                })
                            }
                        </div>
                    </div>
                </div>
            </div>
        </div>
    ):
    'No Post Found'
}

export default VideoPage;