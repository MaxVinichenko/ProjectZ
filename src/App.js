import { Navbar } from "./navbar";
import Contact from "./pages/Contact";
import Pricing from "./pages/Pricing";
import Home from "./pages/Home";


function App() {
  let Component
  switch (window.location.pathname){
    case "/":
      Component=Home
      break
    case "/pricing":
      Component=Pricing
      //test
      break
    case "/contact":
      Component=Contact
      break
  }
  return (
  <>
    <Navbar />
    <Component/>
  </>
  )
}

export default App;
 