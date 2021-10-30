
type BlogItemProps = {
    imageUrl: string;
    title: string;
    userImg?: string;
    userName: string;
}


export function BlogItem(props: BlogItemProps){
    return(
        <div className="blog-item">
            <img src={props.imageUrl} alt="" />
            <div className="blog-item-content">
                <h1>{props.title}</h1>
                <div className="user-blog">
                    {
                        props.userImg ?
                            <div className="image-user" style={{ backgroundImage: `url(${props.userImg})`}} />
                        :   <div className="image-user" />
                    }
                    <p>{props.userName}</p>
                </div>
            </div>
        </div>
    )
}