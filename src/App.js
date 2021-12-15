import "./App.css";
import { useSelector } from "react-redux";
import { Form } from "./components/Form";
import { List } from "./components/List";
import { Login } from "./components/Login";

function App() {
  const auth = useSelector((state) => state.user.authenticated);

  return (
    <div className="App">
      {auth ? (
        <>
          <Form />
          <List />
        </>
      ) : (
        <Login />
      )}
    </div>
  );
}

export default App;
