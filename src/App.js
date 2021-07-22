import './App.css';
import { ProductPopup } from "./components/productPopup/popup"
import { useState } from 'react';

const App = () => {
  const [show_popup, toggleProductPopup] = useState(false);



  return (
    <div className="App">
      <h1>Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat, sit sunt eius fugiat architecto blanditiis repudiandae voluptatum dolore dolor ad ab officiis necessitatibus numquam perferendis. Eveniet molestias debitis vitae dignissimos?</h1>
      <button onClick={({ target }) => { toggleProductPopup(true) }}>Show / Hide Popup</button>

      {show_popup === true ? (< ProductPopup onCloseModal={(data) => { toggleProductPopup(false) }}></ ProductPopup>) : ""}
    </div>
  );
}

export default App;
