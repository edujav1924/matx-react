import { Card, Grid, styled, useTheme } from '@mui/material';
import { Fragment } from 'react';

const ContentBox = styled('div')(({ theme }) => ({
  margin: '30px',
  [theme.breakpoints.down('sm')]: { margin: '16px' },
}));

const Title = styled('span')(() => ({
  fontSize: '1rem',
  fontWeight: '500',
  marginRight: '.5rem',
  textTransform: 'capitalize',
}));


const ControlEntregas = () => {
  const { palette } = useTheme();

  return (
    <Fragment>
      <ContentBox className="analytics">

      </ContentBox>
    </Fragment>
  );
};

export default ControlEntregas;
