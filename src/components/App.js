import React from "react";
import Footer from "./Footer";
import Header from "./Header";
import MyFooter from "./Footer";

const App = () => {
  return (
    <main>
      <Header navigationList={["Home", "About", "Contact us", "FAQ"]} />
      <MyFooter />
    </main>
  );
};

export default App;
