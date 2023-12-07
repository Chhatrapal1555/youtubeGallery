import './style.css';

function Card(props) {
    return (
        <div className='container'>
        <div className="card">
            <div className="channelDetails">
                <img src={props.details?.channelLogoUrl} alt="channel-logo" className='logo'/>
                <div className="channelName">{props.details?.channelName}</div>
            </div>
            <div className='image-container'>
            <iframe title='video' className='vidContainer' src={props.details?.thumbnailUrl}> </iframe>
            </div>
            <div className="thumbnailDetails">
                <div className="views">{props.details?.views} views</div>
                <div className="likes">{props.details?.likes} likes</div>
            </div>
        </div>
        </div>
    )
}
export default Card;