import { useHistory } from "react-router";

const FestivalCard = ({data}) =>
{
    const history = useHistory();
    const sendToPostPage = () =>
    {
        history.push(`/post/${data.fest_id}`)
    }

    return(
            <div onClick={()=>sendToPostPage()} className="card festCard">
                <div className="card-image">
                    <img src={data.fest_image} alt="" />
                </div>
                <p className='center itemTitle'>{data.fest_name}</p>
            </div>
    )
}

export default FestivalCard;