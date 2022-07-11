import "./App.css";
import { useEffect } from "react";
import { petIncrement, petDecrement, getUsers } from "./actions";
import { useSelector, useDispatch } from "react-redux";

function App() {
  const petCounter = useSelector((state) => state.petCounter);
  const petFavorite = useSelector((state) => state.petFavorite);
  const dispatch = useDispatch();
  const users = useSelector((state) => state.users.users);
  const loading = useSelector((state) => state.users.loading);
  const error = useSelector((state) => state.users.error);

  useEffect(() => {
    dispatch(getUsers());
    // eslint-disable-next-line
  }, []);

  return (
    <div className="App">
      <h1>Welcome to React Redux Saga Crash Course</h1>
      <button onClick={() => dispatch(petIncrement(2))}>Add pet</button>
      <button onClick={() => dispatch(petDecrement())}>Remove pet</button>
      <h1>Pet counter {petCounter}</h1>
      <h2>Number of favorite pets so far {petFavorite}</h2>

      {loading && <h2>Loading...</h2>}
      {error && !loading && <h2>{error}</h2>}
      {users && users.map((user, i) => <h1 key={i}>{user.name}</h1>)}
    </div>
  );
}

export default App;
