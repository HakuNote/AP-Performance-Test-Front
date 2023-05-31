import React, { useState } from 'react';
import { Typography, Box } from '@mui/material';

import { useSetRecoilState } from 'recoil';
import { popUpFloorState, popUpRoomState } from '../../../../module/Atom';

import FxContainer from './FxContainer';
import SquareUnit from './SquareUnit';
import SquareBackground from './SquareBackground';
import DetermineRoomColor from '../../func/DetermineRoomColor';

import F4LayoutData from '../../../../data/VisualLayoutData/F4LayoutData.json';

import PopupMessage from '../PopupMessage';

const F4Layout: React.FC = () => {
  const [open, setOpen] = useState(false);
  const popUpOpenClick = () => {
    setOpen(true);
  };
  const popUpCloseClick = () => {
    setOpen(false);
  };

  const setPopUpFloorState = useSetRecoilState(popUpFloorState);
  const setPopUpRoomState = useSetRecoilState(popUpRoomState);

  const onClick: React.MouseEventHandler<HTMLDivElement> = event => {
    const floor = event.currentTarget.getAttribute('data-floor');
    const room = event.currentTarget.getAttribute('data-room');
    if (floor && room) {
      setPopUpFloorState(floor);
      setPopUpRoomState(room);
      popUpOpenClick(); // 팝업 다이얼로그 열기
    }
  };

  const floorNumber = 4;

  return (
    <div>
      <FxContainer>
        <SquareBackground
          // Background Color
          width={F4LayoutData.Layout.SquareBackground.width}
          height={F4LayoutData.Layout.SquareBackground.height}
          gridColumn={F4LayoutData.Layout.SquareBackground.gridColumn}
          gridRow={F4LayoutData.Layout.SquareBackground.gridRow}
          backgroundColor={F4LayoutData.Layout.SquareBackground.backgroundColor}
        />
        {F4LayoutData.Layout.SquareUnit.map(unit => {
          const roomNumber = unit.id;
          return (
            <SquareUnit
              key={unit.id}
              width={unit.width}
              height={unit.height}
              backgroundColor={DetermineRoomColor(floorNumber, roomNumber)}
              gridColumn={unit.gridColumn}
              gridRow={unit.gridRow}
              onClick={onClick}
              data-floor={floorNumber}
              data-room={roomNumber}
            >
              <Typography
                style={{ color: 'white' }}
              >{`${roomNumber}호`}</Typography>
            </SquareUnit>
          );
        })}
      </FxContainer>
      <PopupMessage
        open={open}
        popUpOpenClick={popUpOpenClick}
        popUpCloseClick={popUpCloseClick}
        setPopUpFloorState={setPopUpFloorState}
        setPopUpRoomState={setPopUpRoomState}
      />
    </div>
  );
};

export default F4Layout;
