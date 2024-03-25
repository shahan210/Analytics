import Analytics from "./components/Analytics";
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
    </>
  );
}

export default App;
