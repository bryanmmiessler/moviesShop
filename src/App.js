import Nav from "./components/Nav/Nav";
import ReferencePath from "./components/ReferencePath/ReferencePath";
import Gallery from "./components/Gallery/Gallery";
import InfoProduct from "./components/InfoProduct/InfoProduct"

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
    </>
  );
}

export default App;
