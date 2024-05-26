import './App.css';
// import One from './components/One'
// import FOne from './components/functinalcmp';
// import ItemList from './components/itemList';
// import Greeting from './components/propone';
// import ClassOne from './components/funone'
// import Event from'./components/dateselector';
import EventDate from './components/event';
function App() {
  // const such= 'React is the JS library '
  // const name='sahal'
  return (
    <div className="App">
      {/* <One /> */}
      {/* <FOne name="James" heroName='Bond'/> */}
      {/* <ItemList /> */}
      {/* <Greeting /> */}
      {/* <Welcome text={such} name={name}/> */}
      {/* <ClassOne /> */}
      {/* <Event /> */}
      <EventDate />
    </div>
  );
} 
// const Welcome=(props)=>{
//   const gre='Learn React'
//   return <h1>{gre} {props.name}</h1>
// }

export default App;
