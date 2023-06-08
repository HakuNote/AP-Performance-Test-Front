import React, { useState } from 'react';
import { Typography } from '@mui/material';

import { useSetRecoilState } from 'recoil';
import { popUpFloorState, popUpRoomState } from '../../../../../recoil/Atom';

import FloorContainer from './B_FloorContainer';
import MapRoomUnit from './B_MapRoomUnit';
import MapBackground from './B_MapBackground';
import UseDetermineRoomColor from '../../../../../hooks/useDetermineRoomColor';

import F5LayoutData from '../../../../../data/VisualLayoutData/F5LayoutData.json';
import PopupMessage from '../B_Vis_PopupMessage';

const F5Layout: React.FC = () => {
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

  const floorNumber = 5;

  return (
    <div>
      <FloorContainer>
        <MapBackground
          // Background Color
          width={F5LayoutData.Layout.SquareBackground.width}
          height={F5LayoutData.Layout.SquareBackground.height}
          gridColumn={F5LayoutData.Layout.SquareBackground.gridColumn}
          gridRow={F5LayoutData.Layout.SquareBackground.gridRow}
          backgroundColor={F5LayoutData.Layout.SquareBackground.backgroundColor}
        />
        {F5LayoutData.Layout.SquareUnit.map(unit => {
          const roomNumber = unit.room;
          return (
            <MapRoomUnit
              key={unit.room}
              width={unit.width}
              height={unit.height}
              backgroundColor={UseDetermineRoomColor(floorNumber, roomNumber)}
              gridColumn={unit.gridColumn}
              gridRow={unit.gridRow}
              onClick={onClick}
              data-floor={floorNumber}
              data-room={roomNumber}
            >
              <Typography
                style={{ color: 'white' }}
              >{`${roomNumber}호`}</Typography>
            </MapRoomUnit>
          );
        })}
      </FloorContainer>
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

export default F5Layout;
