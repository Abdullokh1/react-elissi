
import './App.scss';
import {Routes, Route} from "react-router-dom";
import Category from './components/Category/Category';
import Deals from './components/Deals/Deals';
import Header from './components/Header/Header';
import Hero from './components/Hero/Hero';
import Services from './components/Services/Services';
import DealInner from './components/Deals/DealInner/DealInner';
import Products from './components/Products/Products';
import Advertisement from './components/Advertisement/Advertisement';
import TopRated from './components/TopRated/TopRated';
import Sponsors from './components/Sponsors/Sponsors';
import Footer from './components/Footer/Footer';
import Checkout from './components/Checkout/Checkout';



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
          <Products/>
          <Advertisement/>
          <TopRated/>
          <Sponsors/>
          <Footer/>
        </>
      } />
      <Route path='/DealInner/:id' element={<DealInner/>}/>


     </Routes>
    </>
   
  );
}

export default App;
