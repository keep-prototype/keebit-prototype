import { getItem, getListItem } from '../lib/localStorage';

export const getGolfReservationTable = () => {
  return getListItem('golfReservationTable') || [];
};

export const getGolfRepairTable = () => {
  return getListItem('golfRepairTable') || [];
};

export const getUserInfo = () => {
  const userInfo = {
    userName: getItem('userName'),
    aptName: getItem('aptName'),
    aptDong: getItem('aptDong'),
    aptHo: getItem('aptHo'),
  };

  return userInfo;
};
