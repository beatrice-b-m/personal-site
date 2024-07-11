import "./App.css";
import NavBar from "./components/NavBar";
import MainSection from "./components/MainSection";

function App() {
  return (
    <div className="absolute top-0 left-0 w-screen h-screen">
      <NavBar />
      <div className="w-full h-full  mt-32 p-20">
        <MainSection />
        {/* about */}
        {/* projects */}
        {/* gallery */}
        {/* contact */}
      </div>
    </div>
  );
}

export default App;
