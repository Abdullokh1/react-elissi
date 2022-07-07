
import './App.scss';
import {Routes, Route} from "react-router-dom";
import Category from './components/Category/Category';
import Deals from './components/Deals/Deals';
import Header from './components/Header/Header';
import Hero from './components/Hero/Hero';
import Services from './components/Services/Services';
import DealInner from './components/Deals/DealInner/DealInner';



function App() {

  return (
    <>
     <Header/>
     <Hero/>
     <Routes>
      <Route path='/' element={
        <>
          <Services/>
          <Category/>
          <Deals/>
        </>
      } />
      <Route path='/DealInner/:id' element={<DealInner/>}/>
     </Routes>
    </>
   
  );
}

export default App;
