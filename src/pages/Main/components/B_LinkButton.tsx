import styled from '@emotion/styled';
import { Button } from '@mui/material';
import { Link } from 'react-router-dom';

import { maxWidth } from '../../../constant/constants';

type LinkButtonProps = {
  to: string;
  label: string;
};

const StyledLink = styled(Link)({
  textDecoration: 'none',
});

const StyledButton = styled(Button)({
  fontSize: '3rem',
  [`@media (max-width: ${maxWidth}px)`]: {
    fontSize: '1.5rem',
  },
  borderRadius: '15px',
  '&:hover': {
    backgroundColor: '#1976d2',
    color: 'white',
  },
});

const LinkButton: React.FC<LinkButtonProps> = ({ to, label }) => {
  return (
    <div>
      <StyledLink to={to}>
        <StyledButton variant="outlined">{label}</StyledButton>
      </StyledLink>
    </div>
  );
};

export default LinkButton;
