import SearchBar from "./SearchBar";
import {useState} from "react";

const Bt1 = () => {
    const users = ['Alice', 'Bob', 'Charlie', 'David', 'Eve'];
    const [filteredUsers, setFilteredUsers] = useState(users);
    const handleSearch = (input) => {
        const userResult = users.filter((user) =>
            user.toLocaleLowerCase().includes(input.toLocaleLowerCase())
        )
        console.log(userResult)
        setFilteredUsers(userResult);

    }
    return(
        <>
            <SearchBar handleSearch={handleSearch} />
            <ul>
                {filteredUsers.map((user, index) => (
                    <li key={index}>{user}</li>
                ))}
            </ul>
        </>
    )
}
export default Bt1