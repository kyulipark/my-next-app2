type Props = {
    params: {
        postId: number
    }
}

const PostDetailPage = ({params}:Props) =>{
    return <> ID: {params.postId}</>
}

export default PostDetailPage