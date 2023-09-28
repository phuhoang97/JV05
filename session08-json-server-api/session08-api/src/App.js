import "./App.css";
import DemoAxios from "./components/DemoAxios";
import DemoFetchApi from "./components/DemoFetchApi";

function App() {
  return (
    <div className='App'>
      <DemoFetchApi />
      <DemoAxios />
    </div>
  );
}

export default App;
