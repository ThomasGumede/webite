import Account from "./components/Account";
import Collab from "./components/Collab";
import Collaborations from "./components/Collaborations";
import Contacts from "./components/Contacts";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Home from "./components/Home";
import Services from "./components/Services";
import Testemonials from "./components/Testemonials";



function App() {


  
  return (
    <div className="relative w-full h-auto py-2 px-4 md:px-24">

     
      <Header />
      <Home />
      <Services />
      <Collaborations />
      <Contacts />
      <Collab />
      <Testemonials />
      <Account />
      <Footer />
    </div>
  );
}

export default App;
