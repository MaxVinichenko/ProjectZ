import { Navbar } from "./components/navbar";
import Contact from "./pages/Contact";
import Pricing from "./pages/Pricing";
import Home from "./pages/Home";
import Signin from "./pages/Signin";


function App() {
  let Component
  switch (window.location.pathname){
    case "/":
      Component=Home
      break
    case "/pricing":
      Component=Pricing
      break
    case "/contact":
      Component=Contact
      break
    case "/Signin":
      Component= Signin
  }
  if (Component===Signin){
    return (
      <>
        <div className="container">
        <Component/>
        </div>
      </>
      )
    }
  else{
    return (
      <>
        <Navbar />
        <div className="container">
        <Component/>
        </div>
  
      </>
      )

  }

}

export default App;
 