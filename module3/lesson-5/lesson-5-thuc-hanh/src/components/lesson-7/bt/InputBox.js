const InputBox = ({handleSearch} ) => {
    return(
        <>
            <input type="text" onChange={(e)=> handleSearch(e.target.value)}/>
        </>
    )
}
export default InputBox