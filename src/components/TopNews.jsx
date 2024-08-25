function TopNews(props){
    return(
        <>
        <div className="w-[100vw] h-[40vh] flex justify-center">
            <div className="w-[60%] h-[100%]  bg-blue-900">
                <h1>
                    {props.heading}
                </h1>
                <p>
                    {props.content}
                </p>
            </div>
        </div>
        </>
    )
}
export default TopNews