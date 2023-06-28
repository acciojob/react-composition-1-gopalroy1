
import React from "react";
import './../styles/App.css';
import Tabs from "./Tabs";



const App = () => {
  let props = {
    title1: "Tab 1",
    content1: "This the content of tab 1",
    title2: "Tab 1",
    content2: "This the content of tab 2",
    title3: "Tab 1",
    content3: "This the content of tab 3"
  
  }
  
  return (
    <div>
        {/* Do not remove the main div */}
        {/* \<h1>lasf</h1> */}
        <Tabs {...props}></Tabs>

        
    </div>
  )
}

export default App
