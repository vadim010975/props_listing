import './App.css'
import Listing from "./components/Listing.tsx"
import dataJson from "./data/etsy.tsx"

function App() {

  const data = JSON.parse(dataJson);

  return (
    <>
      <Listing items={data}/>
    </>
  )
}

export default App;
