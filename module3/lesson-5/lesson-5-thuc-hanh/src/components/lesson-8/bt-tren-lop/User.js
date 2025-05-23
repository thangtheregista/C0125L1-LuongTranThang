
import React, { useState } from "react"
import SearchBar from "./SearchBar";
import InputBox from "../../lesson-7/bt/InputBox";

const User = (props) => {
    const users = ["Nguyen Van A", "Nguyen Van B", "Nguyen Van C", "Nguyen Van D"]
    const [keyword, setKeyword] = useState("")
    const handleSearch = (value) => {
        setKeyword(value);
        console.log(value)
    }
    const filterUserSearch = keyword ? users.filter((user) => user.toLowerCase().includes(keyword.toLowerCase())) : users;
    return(
        <div>
            <InputBox handleSearch={handleSearch}/>
            <SearchBar users={filterUserSearch} />
        </div>
    )
}
export default User