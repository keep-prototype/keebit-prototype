import React from 'react';
import './App.css';
import { Home } from './pages/Home';
import { More } from './widgets/More';
import { Header } from './widgets/Header';
import { FirstLoading } from './components/FirstLoading';

function App() {
  const [isMore, setIsMore] = React.useState(false);

  const toggleMore = () => {
    setIsMore(!isMore);
  };

  return (
    <React.Fragment>
      {/* <FirstLoading /> */}
      <Header isMore={isMore} toggleMore={toggleMore} />
      <Home />
      {isMore && <More />}
    </React.Fragment>
  );
}

export default App;
