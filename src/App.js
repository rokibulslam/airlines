import logo from './logo.svg';
import './App.css';
import Result from './Pages/Result/Result';
import Search from './Pages/Search/Search';
import Filter from './Component/Filter/Filter';
import PassengerPopup from './Component/Search/PassengerPopup';

function App() {
  return (
    <div className='app'>
      <Search />
    <PassengerPopup />
    </div>
    // <div className="App lg:grid grid-cols-12">
    //   <div className="hidden lg:col-span-2  lg:block ">
    //     <Filter />
    //   </div>
    //   <div className="col-span-12 md:col-span-10">
    //     <Result />
    //   </div>

      
    // </div>

  );
}

export default App;
