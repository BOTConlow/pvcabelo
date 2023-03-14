import { Comment, FeedbackLike, FeedbackStruture, Profile, Top } from "./style";
import like from '../../../assets/like.webp'
import love from '../../../assets/love.webp'
import { useEffect, useState } from 'react'



export function ComentarioStruture(props) {

    const { title, desc, time, src, ammount } = props

    const [likes, setLikes] = useState(0)

    useEffect(() => {
        setLikes(ammount);
    }, []);

    const [alreadyLiked, setAlreadyLiked] = useState(false)

    const handleLike = () => {

        setLikes(alreadyLiked ? likes - 1 : likes + 1)

        setAlreadyLiked(!alreadyLiked)

    }

    return (

        <FeedbackStruture>

            <Profile>
                <img
                    src={src}
                />
                <button onClick={handleLike} style={{ color: alreadyLiked ? '#ec3149' : '#000' }}>
                    Curtir
                </button>
            </Profile>

            <Comment>
                <Top>
                    {
                        title && <h4>{title}</h4>
                    }

                    {
                        time && <p>há {time}</p>
                    }
                </Top>

                {
                    desc && <p>{desc}</p>
                }

                <FeedbackLike>
                    <img
                        src={like}
                    />

                    <img
                        src={love}
                    />

                    <span>{likes}</span>
                </FeedbackLike>
            </Comment>

        </FeedbackStruture>

    )

}