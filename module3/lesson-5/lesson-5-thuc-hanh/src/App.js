import Example1 from "./components/lesson-5/Example1";
import FormRegister from "./components/lesson-5/Example2/FormRegister";
import Exercise1 from "./components/lesson-5/Exercise/Exercise1";
import TheName from "./components/lesson-5/Exercise/TheName";
import AgeDisplay from "./components/lesson-5/Exercise/AgeDisplay";
import Greeting from "./components/lesson-5/Exercise/Greeting";
import Parent from "./components/lesson-5/Exercise/Parent";
import LoginStatus from "./components/lesson-5/Exercise/LoginStatus";
import PostList from "./components/lesson-5/Exercise/PostList";
import SearchBar from "./components/lesson-5/Exercise/SearchBar";
import Alert from "./components/lesson-5/Exercise/Alert";
import Navbar from "./components/lesson-5/Exercise/Navbar";
import ContactForm from "./components/lesson-5/Exercise/ContactForm";

function App() {
  return (
    <div className="App">
        <FormRegister/>
        <Exercise1/>
        <TheName name="Thang" />
        <AgeDisplay age="26"/>
        <Greeting message="Xin chao!"/>
        <Parent/>
        <LoginStatus isLoggedIn={true}/>
        <PostList/>
        <SearchBar/>
        <Alert success="Success" warning="Warning" error="Error"/>
        <Navbar links={["Home", "About", "Contact"]} />
        <ContactForm/>
    </div>
  );
}

export default App;
