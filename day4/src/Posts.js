import useCustom from "./Custom"

const Posts=()=>{
    const URL="https://jsonplaceholder.typicode.com/posts";
    const postData=useCustom(URL);
    return(
        <>
        <h2>fetch post</h2>
        {
            postData?.map(post=><div key={post.id}>
                <h1>post.body</h1>
                
            </div>)
        }
        </>
    )
}