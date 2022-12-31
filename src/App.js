
import './App.css';
import Card from './components/Card';
import Header from './components/Header';


function App() {
  return (
    <div>
      <Header></Header>
      <div class=" flex">
  <div class="w-13 bg-gray-400 h-12"><Card></Card></div>
  <div class="w-13 bg-gray-500 h-12"><Card></Card></div>
  <div class="w-13 bg-gray-400 h-12 float-right"><Card></Card></div>
</div>
      
        
        </div>
      
    
  );
}

export default App;
