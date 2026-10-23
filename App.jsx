import useFetch from "./hooks/useFetch";
import "./App.css";

function App() {
  const { data, loading, error } = useFetch(
    "https://jsonplaceholder.typicode.com/users"
  );

  return (
    <div className="container">
      <h1>User List</h1>

      {loading && <p>Loading...</p>}

      {error && <p>{error}</p>}

      {!loading &&
        !error &&
        data.map((user) => (
          <div className="user" key={user.id}>
            <h3>{user.name}</h3>
            <p>{user.email}</p>
          </div>
        ))}
    </div>
  );
}

export default App;
