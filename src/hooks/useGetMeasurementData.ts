// Pass
import { useEffect } from 'react';
import { useSetRecoilState, useRecoilValue } from 'recoil';
import { MeasurementDataState, dayOfWeekState } from '../recoil/Atom';
import FetchData from '../pages/Visualization/func/FetchData';

// 사용자가 선택한 요일을 사용하여 가져온 데이터를 MeasurementDataState에 저장(데이터 필터링전 단순히 넣는 과정)한다.
const GetMeasurementData = () => {
  // 사용자가 선택한 요일 가져옴
  const dayOfWeek = useRecoilValue(dayOfWeekState);
  const setMeasurementDataState = useSetRecoilState(MeasurementDataState);

  useEffect(() => {
    const fetchMeasurementData = async () => {
      // FetchData
      const receivedData = await FetchData(dayOfWeek);
      setMeasurementDataState(receivedData);
    };
    fetchMeasurementData();
  }, [dayOfWeek, setMeasurementDataState]); // dayOfWeek가 바뀌면 데이터를 다시 fetch -> 요일 바뀌면 데이터 새로가져온다.
};

export default GetMeasurementData;
