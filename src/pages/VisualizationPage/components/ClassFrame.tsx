import { Box } from '@mui/material';
import styled from '@emotion/styled';

import { useRecoilValue } from 'recoil';
import { popUpFloorState, popUpRoomState } from '../../../module/Atom';

import DetermineClassColor from '../func/DetermineClassColor';

import F4ClassFrame from '../../../data/ClassFrameData/F4ClassFrame.json';
import F5ClassFrame from '../../../data/ClassFrameData/F5ClassFrame.json';
import F6ClassFrame from '../../../data/ClassFrameData/F6ClassFrame.json';

const Container = styled(Box)({
  width: 300,
  height: 300,
  display: 'flex',
  flexWrap: 'wrap',
  justifyContent: 'center',
  alignItems: 'center',
  margin: 'auto',
  position: 'relative',
  top: 0,
  bottom: 0,
  left: 0,
  right: 0,
});

const NormalSquare = styled(Box)({
  width: '33.33%',
  height: '33.33%',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  border: '1px solid #ccc',
});

// 오른쪽 모서리에 출입문
const RightDoorSquare = styled(Box)({
  width: '33.33%',
  height: '33.33%',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  border: '1px solid #ccc',
  borderRight: '',

  position: 'relative',
  '&::after': {
    content: '"출입문"',
    position: 'absolute',
    top: '50%',
    right: '0',
    transform: 'translateY(-50%) translateX(50%)',
    width: '30px',
    height: '30px',
    borderRadius: '50%',
    backgroundColor: '#FDA700',
    boxShadow: '0 0 0 5px #fff', // 동그라미에 흰색 테두리 추가
    color: '#fff', // 문자의 색상을 흰색으로 지정
    fontSize: '10px', // 문자의 크기를 10px로 지정
    display: 'flex', // 가운데 정렬을 위해 flex를 이용
    justifyContent: 'center', // 가로 가운데 정렬
    alignItems: 'center', // 세로 가운데 정렬
  },
});

// 왼쪽 모서리에 출입문
const LeftDoorSquare = styled(Box)({
  width: '33.33%',
  height: '33.33%',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  border: '1px solid #ccc',
  borderRight: '',

  position: 'relative',
  '&::after': {
    content: '"출입문"',
    position: 'absolute',
    top: '50%',
    left: '0',
    transform: 'translateY(-50%) translateX(-50%)',
    width: '30px',
    height: '30px',
    borderRadius: '50%',
    backgroundColor: '#FDA700',
    boxShadow: '0 0 0 5px #fff', // 동그라미에 흰색 테두리 추가
    color: '#fff', // 문자의 색상을 흰색으로 지정
    fontSize: '10px', // 문자의 크기를 10px로 지정
    display: 'flex', // 가운데 정렬을 위해 flex를 이용
    justifyContent: 'center', // 가로 가운데 정렬
    alignItems: 'center', // 세로 가운데 정렬
  },
});

// 위쪽 모서리에 출입문
const TopDoorSquare = styled(Box)({
  width: '33.33%',
  height: '33.33%',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  border: '1px solid #ccc',
  borderBottom: '',

  position: 'relative',
  '&::after': {
    content: '"출입문"',
    position: 'absolute',
    top: '0',
    left: '50%',
    transform: 'translateY(-50%) translateX(-50%)',
    width: '30px',
    height: '30px',
    borderRadius: '50%',
    backgroundColor: '#FDA700',
    boxShadow: '0 0 0 5px #fff',
    color: '#fff',
    fontSize: '10px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
});

// 아래쪽 모서리에 출입문
const BottomDoorSquare = styled(Box)({
  width: '33.33%',
  height: '33.33%',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  border: '1px solid #ccc',
  borderBottom: '',

  position: 'relative',
  '&::after': {
    content: '"출입문"',
    position: 'absolute',
    left: '50%',
    bottom: '0',
    transform: 'translateY(50%) translateX(-50%)',
    width: '30px',
    height: '30px',
    borderRadius: '50%',
    backgroundColor: '#FDA700',
    boxShadow: '0 0 0 5px #fff',
    color: '#fff',
    fontSize: '10px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
});

// 오른쪽에 출입문 있는 방
const RightDoorRoom = ({ doors }: { doors: number[] }) => {
  const popUpFloor = useRecoilValue(popUpFloorState);
  const popUpRoom = useRecoilValue(popUpRoomState);

  const rightDoorRoom = Array.from({ length: 9 }, (_, i) => i + 1).map(id => {
    if (doors.includes(id)) {
      return (
        <RightDoorSquare
          key={id}
          sx={{
            backgroundColor: DetermineClassColor(
              popUpFloor,
              popUpRoom,
              id.toString()
            ),
          }}
        />
      );
    }
    return (
      <NormalSquare
        key={id}
        sx={{
          backgroundColor: DetermineClassColor(
            popUpFloor,
            popUpRoom,
            id.toString()
          ),
        }}
      />
    );
  });

  return (
    <div>
      <Container>{rightDoorRoom}</Container>
    </div>
  );
};

// 왼쪽에 출입문 있는 방
const LeftDoorRoom = ({ doors }: { doors: number[] }) => {
  const popUpFloor = useRecoilValue(popUpFloorState);
  const popUpRoom = useRecoilValue(popUpRoomState);

  const leftDoorRoom = Array.from({ length: 9 }, (_, i) => i + 1).map(id => {
    if (doors.includes(id)) {
      return (
        <LeftDoorSquare
          key={id}
          sx={{
            backgroundColor: DetermineClassColor(
              popUpFloor,
              popUpRoom,
              id.toString()
            ),
          }}
        />
      );
    }
    return (
      <NormalSquare
        key={id}
        sx={{
          backgroundColor: DetermineClassColor(
            popUpFloor,
            popUpRoom,
            id.toString()
          ),
        }}
      />
    );
  });

  return (
    <div>
      <Container>{leftDoorRoom}</Container>
    </div>
  );
};

// 위쪽에 출입문 있는방
const TopDoorRoom = ({ doors }: { doors: number[] }) => {
  const popUpFloor = useRecoilValue(popUpFloorState);
  const popUpRoom = useRecoilValue(popUpRoomState);

  const topDoorRoom = Array.from({ length: 9 }, (_, i) => i + 1).map(id => {
    if (doors.includes(id)) {
      return (
        <TopDoorSquare
          key={id}
          sx={{
            backgroundColor: DetermineClassColor(
              popUpFloor,
              popUpRoom,
              id.toString()
            ),
          }}
        />
      );
    }
    return (
      <NormalSquare
        key={id}
        sx={{
          backgroundColor: DetermineClassColor(
            popUpFloor,
            popUpRoom,
            id.toString()
          ),
        }}
      />
    );
  });

  return (
    <div>
      <Container>{topDoorRoom}</Container>
    </div>
  );
};

// 아래쪽에 출입문 있는방
const BottomDoorRoom = ({ doors }: { doors: number[] }) => {
  const popUpFloor = useRecoilValue(popUpFloorState);
  const popUpRoom = useRecoilValue(popUpRoomState);

  const bottomDoorRoom = Array.from({ length: 9 }, (_, i) => i + 1).map(id => {
    if (doors.includes(id)) {
      return (
        <BottomDoorSquare
          key={id}
          sx={{
            backgroundColor: DetermineClassColor(
              popUpFloor,
              popUpRoom,
              id.toString()
            ),
          }}
        />
      );
    }
    return (
      <NormalSquare
        key={id}
        sx={{
          backgroundColor: DetermineClassColor(
            popUpFloor,
            popUpRoom,
            id.toString()
          ),
        }}
      />
    );
  });

  return (
    <div>
      <Container>{bottomDoorRoom}</Container>
    </div>
  );
};

// 문의 방향과 위치를 가지고 출입문 프레임 생성
const MakeFrame = (direction: string, doors: number[]) => {
  if (direction === 'TOP') {
    return <TopDoorRoom doors={doors} />;
  }

  if (direction === 'BOTTOM') {
    return <BottomDoorRoom doors={doors} />;
  }

  if (direction === 'RIGHT') {
    return <RightDoorRoom doors={doors} />;
  }

  if (direction === 'LEFT') {
    return <LeftDoorRoom doors={doors} />;
  }

  // 현재 버전은 동서남북 한 쪽 방향의 문만 표시중
  // 복잡한 출입문인 방은 Custom 해서 구현해야함 ex) 위, 오른쪽 출입문
  return <div>Wrong Direction.</div>;
};

// floor, room 정보를 사용하여 json으로 선언된 출입문 프레임 생성
const ClassFrame = () => {
  const popUpFloor = useRecoilValue(popUpFloorState);
  const popUpRoom = useRecoilValue(popUpRoomState);

  // Floor 4
  if (popUpFloor === '4' && popUpRoom !== '') {
    const index = 401;
    const nDoor: number = parseInt(popUpRoom, 10);
    const doors: number[] = F4ClassFrame.Data[nDoor - index].Door;
    const direction = F4ClassFrame.Data[nDoor - index].Direction;

    return <div>{MakeFrame(direction, doors)}</div>;
  }

  // Floor 5
  if (popUpFloor === '5' && popUpRoom !== '') {
    const index = 501;
    const nDoor: number = parseInt(popUpRoom, 10);
    const doors: number[] = F5ClassFrame.Data[nDoor - index].Door;
    const direction: string = F5ClassFrame.Data[nDoor - index].Direction;

    return <div>{MakeFrame(direction, doors)}</div>;
  }

  // Floor 6
  if (popUpFloor === '6' && popUpRoom !== '') {
    const index = 601;
    const nDoor: number = parseInt(popUpRoom, 10);
    const doors: number[] = F6ClassFrame.Data[nDoor - index].Door;
    const direction = F6ClassFrame.Data[nDoor - index].Direction;

    return <div>{MakeFrame(direction, doors)}</div>;
  }

  // 현재 버전은 4, 5, 6층 만 지원
  return null;
};

export default ClassFrame;
