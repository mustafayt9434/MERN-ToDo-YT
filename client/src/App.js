import { useDispatch } from "react-redux";
import "./App.css";
import Form from "./components/Form";
import Header from "./components/Header";
import Todos from "./components/Todos";
import { useEffect } from "react";
import { fetchTodos } from "./store/actions/todoActions";

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchTodos());
  }, []);
  return (
    <>
      <Header />
      <Form />
      <Todos />
    </>
  );
}

export default App;
