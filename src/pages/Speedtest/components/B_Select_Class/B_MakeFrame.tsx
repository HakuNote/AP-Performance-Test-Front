import { Box } from '@mui/material';
import styled from '@emotion/styled';
import LocationOnIcon from '@mui/icons-material/LocationOn';

import { useRecoilState } from 'recoil';
import { locationClassState } from '../../../../recoil/Atom';

const StyledContainer = styled(Box)({
  width: 285,
  height: 285,
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
  '&:hover': {
    backgroundColor: '#1976d2',
    cursor: 'crosshair',
  },
  position: 'relative',
});

const RightSquare = styled(NormalSquare)({
  borderRight: '',
  '&::after': {
    content: '"출입문"',
    width: '40px',
    height: '40px',
    borderRadius: '50%',
    backgroundColor: '#ff0000',
    boxShadow: '0 0 0 5px #fff',
    color: '#fff',
    fontSize: '12px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    top: '50%',
    right: '0',
    transform: 'translateY(-50%) translateX(50%)',
  },
});

const LeftSquare = styled(NormalSquare)({
  borderRight: '',
  '&::after': {
    content: '"출입문"',
    width: '40px',
    height: '40px',
    borderRadius: '50%',
    backgroundColor: '#ff0000',
    boxShadow: '0 0 0 5px #fff',
    color: '#fff',
    fontSize: '12px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    top: '50%',
    left: '0',
    transform: 'translateY(-50%) translateX(-50%)',
  },
});

const TopSquare = styled(NormalSquare)({
  borderBottom: '',
  '&::after': {
    content: '"출입문"',
    width: '40px',
    height: '40px',
    borderRadius: '50%',
    backgroundColor: '#ff0000',
    boxShadow: '0 0 0 5px #fff',
    color: '#fff',
    fontSize: '12px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    top: '0',
    left: '50%',
    transform: 'translateY(-50%) translateX(-50%)',
  },
});

const BottomSquare = styled(NormalSquare)({
  borderBottom: '',
  '&::after': {
    width: '40px',
    height: '40px',
    borderRadius: '50%',
    backgroundColor: '#ff0000',
    boxShadow: '0 0 0 5px #fff',
    color: '#fff',
    fontSize: '12px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    left: '50%',
    bottom: '0',
    transform: 'translateY(50%) translateX(-50%)',
  },
});

// any 추후 수정
const directionSquareComponents: { [key: string]: React.FC<any> } = {
  RIGHT: RightSquare,
  LEFT: LeftSquare,
  TOP: TopSquare,
  BOTTOM: BottomSquare,
};

// 범용 컴포넌트
const MakeFrame = ({
  doors,
  direction,
}: {
  doors: number[];
  direction: string;
}) => {
  const [locationClass, setLocationClass] = useRecoilState(locationClassState);

  const setLocationClassWithClick = (id: number) => {
    setLocationClass(id.toString());
  };

  const DoorSquare = directionSquareComponents[direction];

  const doorRoom = Array.from({ length: 9 }, (_, i) => i + 1).map(id => {
    if (doors.includes(id)) {
      return (
        <DoorSquare
          key={id}
          onClick={() => setLocationClassWithClick(id)}
          sx={{
            '&:hover': {
              '& svg': {
                color: 'white',
              },
            },
          }}
        >
          {locationClass === id.toString() && (
            <LocationOnIcon
              sx={{
                color: '#1976d2',
                fontSize: 50,
              }}
            />
          )}
        </DoorSquare>
      );
    }
    return (
      <NormalSquare
        key={id}
        onClick={() => setLocationClassWithClick(id)}
        sx={{
          '&:hover': {
            '& svg': {
              color: 'white',
            },
          },
        }}
      >
        {locationClass === id.toString() && (
          <LocationOnIcon
            sx={{
              color: '#1976d2',
              fontSize: 50,
            }}
          />
        )}
      </NormalSquare>
    );
  });

  return (
    <div>
      <StyledContainer>{doorRoom}</StyledContainer>
    </div>
  );
};

export default MakeFrame;
