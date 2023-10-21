import { useHistory } from "react-router";

const CategoryCard = ({data}) =>
{
    console.log(data);
    const history = useHistory();
    const sendToPostPage = () =>
    {
        history.push(`/post/${data.post_id}`)
    }
    return(
            <div onClick={()=>sendToPostPage()} className="card festCard">
                <div className="card-image">
                    <img src={data.post_content} alt="" />
                </div>
            </div>
    )
}

export default CategoryCard;