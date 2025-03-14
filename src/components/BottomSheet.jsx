import React, { useEffect } from 'react';
import { useGolfStore } from '../store/useGolfStore';
import { getGolfReservationTable } from '../store/atoms';

const BottomSheet = ({ isOpen, onClose, children }) => {
  const golfReservationTable = getGolfReservationTable();
  const setReservations = useGolfStore((state) => state.setReservations);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden'; // 바텀시트가 열릴 때 스크롤 방지
    } else {
      document.body.style.overflow = 'auto'; // 바텀시트가 닫히면 스크롤 다시 활성화
    }

    setReservations([...golfReservationTable]); // 상태 업데이트 ->(UI 반영)
  }, [isOpen]);

  return (
    <div
      className={`fixed inset-0 z-50 flex items-end transition-opacity duration-300 ${
        isOpen ? 'visible bg-black/50 opacity-100' : 'invisible opacity-0'
      }`}
      onClick={onClose}
    >
      {/* 바텀시트 본체 */}
      <div
        className={`w-full max-h-[95vh] bg-black rounded-t-2xl shadow-lg transition-transform duration-300 ${
          isOpen ? 'translate-y-0' : 'translate-y-full'
        }`}
        onClick={(e) => e.stopPropagation()} // 내부 클릭 시 닫히지 않도록 방지
      >
        <div />
        {children}
      </div>
    </div>
  );
};

export default BottomSheet;
