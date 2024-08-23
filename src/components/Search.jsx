function Search(){
    return(
        <>
         <div className="flex justify-center  p-4 bg-gray-100 ">
      <div className="relative w-full max-w-xs">
        <input
          type="text"
          className="w-full py-2 pl-10 pr-4 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          placeholder="Search..."
        />
      </div>
    </div>
    <h1 className="text-center text-4xl p-4">Today's Short News</h1>
        </>
    )
}
export default Search;