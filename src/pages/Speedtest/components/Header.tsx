import { Container } from '@mui/material';
import Title from './H_Title';
import UserGuide from './H_UserGuide';

const Header = () => {
  return (
    <Container>
      <Title />
      <UserGuide />
    </Container>
  );
};

export default Header;
