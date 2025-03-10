import React from 'react';
import './App.css';
import { Home } from './pages/Home';
import { More } from './widgets/More';
import { Header } from './widgets/Header';
import { FirstLoading } from './components/FirstLoading';
import { useSheetStore } from './store/useSheetStore';
import { GolfZoneListSheet } from './components/GolfZoneListSheet';

function App() {
  const [isMore, setIsMore] = React.useState(false);

  const toggleMore = () => {
    setIsMore(!isMore);
  };
  const isGolfZoneListOpen = useSheetStore((state) => state.isGolfZoneListOpen);

  return (
    <React.Fragment>
      {/* <FirstLoading /> */}
      <Header isMore={isMore} toggleMore={toggleMore} />
      <Home />
      {isMore && <More />}
      {isGolfZoneListOpen && <GolfZoneListSheet />}
    </React.Fragment>
  );
}

export default App;
