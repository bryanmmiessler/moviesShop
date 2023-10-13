import Nav from "./components/Nav/Nav";
import ReferencePath from "./components/ReferencePath/ReferencePath";
import Gallery from "./components/Gallery/Gallery";
import InfoProduct from "./components/InfoProduct/InfoProduct";
import DeliverDetails from "./components/DeliverDetails/DeliverDetails";

import './App.css';

function App() {

  return (
    <>
      <Nav />
      <ReferencePath />
      <div className='container-gallery-infoproduct'>
        <Gallery />
        <InfoProduct />
      </div>
      <DeliverDetails />
    </>
  );
}

export default App;
