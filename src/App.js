// App.js

import Footer from "./components/Footer";
import Header from "./components/Header";
import Orders from "./components/Orders";
import Prototypes from "./components/Prototypes";

function App() {
  return (
    <>
      <Header />
      <div className="container">
        <Prototypes />
        <Orders />
        <Footer />
      </div>
    </>
  );
}

export default App;