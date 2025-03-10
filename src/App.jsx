import React from 'react';
import './App.css';
import { Home } from './pages/Home';
import { More } from './widgets/More';
import { Header } from './widgets/Header';
import { FirstLoading } from './components/FirstLoading';
import { useSheetStore } from './store/useSheetStore';
import { GolfZoneListSheet } from './components/GolfZoneListSheet';
import { useLocation } from 'react-router';
import { getItem, setListItem } from './lib/localStorage';
import { useGolfStore } from './store/useGolfStore';
import {
  GOLF_REPAIR_TABLE,
  GOLF_RESERVATION_TABLE,
} from './constants/GOLF_TABLE';
import { getGolfReservationTable } from './store/atoms';

function App() {
  const [isMore, setIsMore] = React.useState(false);
  const [isAuth, setIsAuth] = React.useState(false);
  const completeZone = useGolfStore((state) => state.completeZone);

  const location = useLocation();

  const toggleMore = () => {
    setIsMore(!isMore);
  };
  const isGolfZoneListOpen = useSheetStore((state) => state.isGolfZoneListOpen);

  React.useEffect(() => {
    const golfReservationTable = getGolfReservationTable();
    const isFirst = getItem('golfReservationTable') === null || undefined;
    setIsAuth(getItem('aptName') !== null);

    if (isFirst) {
      setListItem('golfReservationTable', GOLF_RESERVATION_TABLE);
      setListItem('golfRepairTable', GOLF_REPAIR_TABLE);
    }
  }, [location.pathname]);

  React.useEffect(() => {
    console.log(completeZone);
  }, [completeZone]);

  return (
    <React.Fragment>
      <FirstLoading />
      <Header isMore={isMore} toggleMore={toggleMore} />
      <Home />
      {isMore && <More />}
      {isGolfZoneListOpen && <GolfZoneListSheet />}
    </React.Fragment>
  );
}

export default App;
