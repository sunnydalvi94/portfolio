import "bootstrap/dist/css/bootstrap.min.css";

import Header from "./components/Header";
import "../src/App.css";
import Cards from "./components/Cards";
import Intro from "./components/Intro";
import Footer from "./components/Footer";
function App() {
  return (
    <div className="mainStyle">
      <Header></Header>
      <Intro></Intro>
      <Cards></Cards>
      <Footer></Footer>
    </div>
  );
}

export default App;
