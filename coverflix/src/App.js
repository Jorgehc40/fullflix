import Detail from "./pages/detail/Detail";
import Home from "./pages/home/Home";
import Router from "./router/Router";
import categories from "./api/api";


function App() {
  return (
    <div className="App">
      {categories.map((category) => {
        return<Row
                key={category.name}
                title={category.title}
                path={category.path}
              />;
      })}
    </div>
    );
}

export default App;
