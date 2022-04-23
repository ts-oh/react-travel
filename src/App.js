import React from "react";
import Header from "./Header";
import Card from "./Card";
import cardData from "./Data";

const App = () => {
  const cards = cardData.map((element) => {
    return <Card item={element} />;
  });

  return (
    <div>
      <Header />
      <main className="main-content">{cards}</main>
    </div>
  );
};

export default App;
