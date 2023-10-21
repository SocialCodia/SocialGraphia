
const VideoCard = ({onClick,data}) =>
{
    return(
            <div className="card festCard" onClick={onClick}>
                <div className="card-image">
                    <img src={data.video_image} alt="" />
                </div>
                <p className='center itemTitle'>{data.video_name}</p>
            </div>
    )
}

export default VideoCard;