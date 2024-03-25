import Analytics from "./components/Analytics";
import Card from "./components/Card";
import { Home } from "./components/Home";
import Navbar from "./components/Navbar";
import Newsletter from "./components/Newsletter";

function App() {
  return (
    <>
      <Navbar />
      <Home />
      <Analytics />
      <Newsletter />
      <Card />
    </>
  );
}

export default App;
