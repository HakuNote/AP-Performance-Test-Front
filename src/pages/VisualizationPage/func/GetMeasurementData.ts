// Pass
import { useEffect } from 'react';
import { useSetRecoilState, useRecoilValue } from 'recoil';
import { MeasurementDataState, dayOfWeekState } from '../../../module/Atom';
import FetchData from './FetchData';

// 사용자가 선택한 요일을 사용하여 가져온 데이터를 MeasurementDataState에 저장(데이터 필터링전 단순히 넣는 과정)

const GetMeasurementData = () => {
  // 사용자가 선택한 요일 가져옴
  const dayOfWeek = useRecoilValue(dayOfWeekState);

  // MeasurementDataState setter 호출
  const setMeasurementDataState = useSetRecoilState(MeasurementDataState);

  useEffect(() => {
    const fetchMeasurementData = async () => {
      const receivedData = await FetchData(dayOfWeek);
      setMeasurementDataState(receivedData);
    };
    fetchMeasurementData();
  }, [dayOfWeek, setMeasurementDataState]); // dayOfWeek가 바뀌면 데이터를 다시 fetch
};

export default GetMeasurementData;
