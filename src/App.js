import './App.css';
import Navbar from './Components/navbar';
import VisitCard from './Components/visititemlist';
import tourData from './Data/data';
function App() {
  const tour =tourData.map((items)=>{
    return(
      <VisitCard
      key={items.id}
      items={items}
      
      />
    )
  })
  return (
    <div className="App">
      <Navbar />
      <section className="visit-item-lists">
        {tour}
        
      </section>
      
    </div>
  );
}

export default App;
