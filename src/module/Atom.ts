import { atom } from 'recoil';
import { SpeedTestData } from '../librespeed/SpeedtestManager';

export interface User {
  floorNumber: number;
  roomNumber: number;
  locationClass: number;
  userCookie: string;
}

export interface SpeedTestDataFromServer {
  dlStatus: number;
  ulStatus: number;
  pingStatus: number;
  jitterStatus: number;
  clientIp: string;
}

export interface MeasurementData {
  user: User;
  speedTest: SpeedTestDataFromServer;
  createdAt: string;
}

/* Atom */
// 사용자 층수
export const floorState = atom({
  key: 'floorState',
  default: '',
});

// 사용자 호수
export const roomState = atom({
  key: 'roomState',
  default: '',
});

// 사용자 위치 클래스
export const locationClassState = atom({
  key: 'locationClassState',
  default: '',
});

// Start 버튼 토글 현황
export const startToggleState = atom({
  key: 'startToggleState',
  default: true,
});

// cookie 활성화
export const cookieState = atom({
  key: 'cookieState',
  default: '',
});

// 시각화 PopUp 메시지에서 뜨는 층수
export const popUpFloorState = atom({
  key: 'popUpFloorState',
  default: '',
});

// 시각화 PopUp 메시지에서 뜨는 호수
export const popUpRoomState = atom({
  key: 'popUpRoomState',
  default: '',
});

export const MeasurementDataState = atom<MeasurementData[]>({
  key: 'MeasurementDataState',
  default: [],
});

// 서버에 보낼 속도 데이터
export const speedTestDataState = atom<SpeedTestData>({
  key: 'speedTestDataState',
  default: {
    testState: 0,
    dlStatus: 0,
    ulStatus: 0,
    pingStatus: 0,
    clientIp: '',
    jitterStatus: 0,
    dlProgress: 0,
    ulProgress: 0,
    pingProgress: 0,
    testId: '',
  },
});

export const PositionSpeedMapState = atom<
  Map<string, SpeedTestDataFromServer[]>
>({
  key: 'PositionSpeedMapState',
  default: new Map<string, SpeedTestData[]>(),
});

// 요일을 설정하는 상태, default = 0, 일요일 = 1, 월요일 = 2, ..., 토요일 = 7
export const dayOfWeekState = atom<number>({
  key: 'dayOfWeekState',
  default: 0,
});
