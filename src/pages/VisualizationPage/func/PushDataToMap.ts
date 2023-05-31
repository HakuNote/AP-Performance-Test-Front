// Pass
// measurementData의 User정보를 사용하여 Key(위치로 구분)값을 생성하고 서버에서 가져온 데이터를 순회하여 결과적으로 위치에 대응하는 모든 SpeedTestDataFromServer 데이터를 구별할 수 있다.

import { useRecoilValue, useSetRecoilState } from 'recoil';
import { useEffect } from 'react';
import {
  MeasurementData,
  SpeedTestDataFromServer,
  PositionSpeedMapState,
  MeasurementDataState,
} from '../../../module/Atom';

import GetMeasurementData from './GetMeasurementData';

// MeasurementData를 받아서 user를 추출하여 Key를 생성할것 위치기반으로 분류되야 하기때문에 floorNumber, roomNumber, locationClass를 사용하여 키를 생성했음 -> 같은 위치에서 측정된 데이터들은 동일한 키값을 가진다.
const SpecifyKey = (measurementData: MeasurementData): string => {
  const { user } = measurementData;
  const { floorNumber, roomNumber, locationClass } = user;
  return `floorNumber:${floorNumber},roomNumber:${roomNumber},locationClass:${locationClass}`;
};

const PushDataToMap = () => {
  // Server로 부터 데이터 가져와서 MeasurementDataState Recoil에 저장
  GetMeasurementData();

  // PositionSpeedMapState -> <Map<string, SpeedTestData[]> 형태로 생성된 키와
  const setPositionSpeedMap = useSetRecoilState(PositionSpeedMapState);

  // 이 호출시 measurementData에는 가공되지 않은 MeasurementDataState형 데이터가 존재
  const measurementData = useRecoilValue(MeasurementDataState);

  useEffect(() => {
    const updatePositionSpeedMap = () => {
      // Map<Key, SpeedTestDataFromServer> 새로운 맵 생성하고 forEach 사용하여 정제
      const newDataMap = new Map<string, SpeedTestDataFromServer[]>();

      measurementData.forEach(item => {
        // Key, Value 생성
        const key: string = SpecifyKey(item);
        const newValue: SpeedTestDataFromServer = {
          pingStatus: item.speedTest.pingStatus,
          jitterStatus: item.speedTest.jitterStatus,
          dlStatus: item.speedTest.dlStatus,
          ulStatus: item.speedTest.ulStatus,
          clientIp: item.speedTest.clientIp,
        };

        //  Map(Key(위치))에 이미 데이터가 존재한다면 불러오고 아니면 []
        const alreadyExistingValues = newDataMap.get(key) || [];

        // 데이터 삽입
        alreadyExistingValues.push(newValue);

        // 삽입된 alreadyExistingValues을 Value값으로 대체
        newDataMap.set(key, alreadyExistingValues);
      });

      // 모든 순회가 끝나고 완성된 Map을 Recoil에 저장
      setPositionSpeedMap(newDataMap);
    };

    updatePositionSpeedMap();
  }, [setPositionSpeedMap, measurementData]);
};

export default PushDataToMap;
