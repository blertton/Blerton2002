import React, { useState } from "react";
import Header from "./components/header/Navbar";
import ListCard from "./components/body/ListCard";
import Footer from "./components/footer/Footer";
import { getTreatments } from "./data/treatments";

const App = () => {
  const [page, setPage] = useState(1);
  const [service, setService] = useState(null);

  const treatments = getTreatments();

  const handleSelect = (option) => {
    setService(option);
    setPage(2);
  };

  const handleBack = () => {
    setService(null);
    setPage(1);
  };

  return (
    <div className="App">
      <Header title="Choose Service" page={page} pagenumbers={2} />
      <ListCard
        page={page}
        options={treatments}
        handleSelect={handleSelect}
        service={service}
      />
      {page === 2 && <button className="backbutton" onClick={handleBack}>Back</button>}
      <Footer />
    </div>
  );
};

export default App;
