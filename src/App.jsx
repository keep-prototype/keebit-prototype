import React from 'react';
import './App.css';
import { Home } from './pages/Home';
import { More } from './widgets/More';
import { Header } from './widgets/Header';

function App() {
  const [isMore, setIsMore] = React.useState(false);
  const toggleMore = () => {
    setIsMore(!isMore);
  };
  return (
    <React.Fragment>
      <Header isMore={isMore} toggleMore={toggleMore} />
      <Home />
      {isMore && <More />}
    </React.Fragment>
  );
}

export default App;
