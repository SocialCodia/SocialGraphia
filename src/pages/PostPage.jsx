import { useEffect, useState } from "react";
import { useParams } from "react-router";
import { getFestivalImages } from "../http";
import Loading from '../components/Loading';

const PostPage = () =>
{
    const [post,setPost] = useState();
    const [loading,setLoading] = useState(true);
    const [initialImage, setInitialImage] = useState();
    const {postId} = useParams();
    const [postcategoryid,offset,languageid] = [postId,0,0];
    useEffect(()=>
    {
        (async()=>{
            const {data} = await getFestivalImages({postcategoryid,offset,languageid});
            setPost(data);
            console.log(data);
            setInitialImage(data.data[0].post_content);
            setLoading(false);
        })();
    },[])

    return  loading? <Loading/> : post? (
        <div className="card z-depth-0 cusContainer">
            <div className="card-content center">
                <div className="row">
                    <div className="col l6 m6 s12">
                        <img src={initialImage} width='600px' className='responsive-img initialImage' alt="" />
                    </div>
                    <div className="col l6 m6 s12">
                        <h5>Choose Whatever you like.</h5>
                        <div className="row">
                            {
                                post.data.map((item,index)=>{
                                    return (
                                        <div className=" col l3 m3 s6 item" onClick={()=>setInitialImage(item.post_content)}>
                                            <img src={item.image_thumbnail_url}  className='responsive-img' alt="" />
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

export default PostPage;