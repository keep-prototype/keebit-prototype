import React from 'react';
import { useSheetStore } from '../store/useSheetStore';
import { GolfZone } from '../components/GolfZone';
import { GOLF_TIME_TABLE, GOLF_ZONE_TABLE } from '../constants/GOLF_TABLE';
import { useGolfStore } from '../store/useGolfStore';
import { getListItem, setListItem } from '../lib/localStorage';
import { getGolfReservationTable } from '../store/atoms';

export const GolfZoneListSheet = () => {
  const isGolfZoneListOpen = useSheetStore((state) => state.isGolfZoneListOpen);
  const toggleGolfZoneList = useSheetStore((state) => state.toggleGolfZoneList);
  const selectedZone = useGolfStore((state) => state.selectedZone);

  const golfReservationTable = getGolfReservationTable();

  const [step, setStep] = React.useState(0);
  const [isAmimate, setIsAnimate] = React.useState(false);

  const [clikedHour, setClikedHour] = React.useState(null);

  const handleNextClick = () => {
    if (step === 1) {
      handleReservationClick();
    } else {
      setStep(step + 1);
    }
  };

  const handleTimeClick = (hour) => {
    const isReservation = golfReservationTable?.some(
      (el) => el.zoneId === selectedZone && el.hour === hour
    );

    if (isReservation) {
      setClikedHour(hour);
    } else {
      setClikedHour(hour);
    }
  };

  const handleReservationClick = () => {
    const payload = {
      zoneId: selectedZone,
      hour: clikedHour,
    };
    golfReservationTable.push(payload);

    setListItem('golfReservationTable', golfReservationTable);

    toggleGolfZoneList();
  };

  React.useEffect(() => {
    setIsAnimate(true);

    return () => {
      setIsAnimate(false);
    };
  }, []);

  return (
    <main className="h-screen w-screen fixed left-0 top-0 z-30 text-white">
      <section
        className={`absolute bottom-0 left-0 w-screen overflow-scroll h-fit pb-10 bg-main-black transition-all z-40 bg-main-black ${
          isGolfZoneListOpen && isAmimate ? 'translate-y-0' : 'translate-y-full'
        }`}
      >
        <header className="sticky w-full top-0 bg-main-black p-5 flex justify-between z-50">
          <button onClick={toggleGolfZoneList}>취소</button>
          <button onClick={handleNextClick}>다음</button>
        </header>
        {step === 0 && (
          <article className="grid grid-cols-3 gap-2 w-screen px-4">
            {GOLF_ZONE_TABLE?.map((el) => {
              return <GolfZone key={el} zoneId={el} />;
            })}
          </article>
        )}
        {step === 1 && (
          <React.Fragment>
            <section className="pb-5 px-9 flex flex-col gap-1">
              <p className="font-bold text-2xl text-center">
                {selectedZone}번 타석
              </p>
              <p className="text-sm opacity-50 text-center">
                예약이 필요하시면 시간 선택 후 등록을 눌러주세요.
              </p>
            </section>
            <section className="w-full flex flex-col items-center gap-2 overflow-scroll pt-1 h-40">
              {GOLF_TIME_TABLE.map((el) => {
                const golfReservationTable = getListItem(
                  'golfReservationTable'
                );
                const isReservation = golfReservationTable?.some(
                  (value) =>
                    value.zoneId === selectedZone && value.hour === el.hour
                );
                return (
                  <p
                    onClick={() => handleTimeClick(el.hour)}
                    key={el.hour}
                    className={`p-2 w-10/12 text-center text-xl font-semibold rounded-xl border border-main-orange transition-all ${
                      isReservation ? `bg-main-bron` : ''
                    } ${
                      clikedHour === el.hour
                        ? 'bg-main-orange text-black'
                        : 'text-main-orange'
                    }`}
                  >
                    {el.timeRange}
                  </p>
                );
              })}
            </section>
          </React.Fragment>
        )}
      </section>
      <div className="w-full h-full bg-black opacity-50 z-30 touch-none overflow-hidden" />
    </main>
  );
};
