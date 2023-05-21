import { Card, Grid, styled, useTheme } from '@mui/material';
import { Fragment } from 'react';
import DoughnutChart from './shared/Doughnut';
import BarChart from './shared/Bar';

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


const Dashboard = () => {
  const { palette } = useTheme();
  const data =  [
    {
      value: 20,
      name: 'Controlados 20'
    },
    {
      value: 80,
      name: 'Pendientes 80'
    }
  ];
  return (
    <Fragment>
      <ContentBox className="analytics">
        <Grid container spacing={3}>
          <Grid item lg={4} md={4} sm={12} xs={12}>
            <Card sx={{ px: 3, py: 2, mb: 3 }}>
              <Title>Pedidos</Title>
              <DoughnutChart
                height="300px"
                data={data}
                color={[palette.success.light, palette.primary.dark]}
              />
            </Card>
          </Grid>
          <Grid item lg={4} md={4} sm={12} xs={12}>
            <Card sx={{ px: 3, py: 2, mb: 3 }}>
              <Title>Entregas</Title>

              <DoughnutChart
                height="300px"
                color={[palette.primary.dark, palette.primary.main, palette.primary.light]}
              />
            </Card>
          </Grid>
          <Grid item lg={4} md={4} sm={12} xs={12}>
            <Card sx={{ px: 3, py: 2, mb: 3 }}>
              <Title>Transferencias</Title>

              <DoughnutChart
                height="300px"
                color={[palette.primary.dark, palette.primary.main, palette.primary.light]}
              />
            </Card>
          </Grid>
        </Grid>
        <Grid container spacing={3}>
          <Grid item lg={12} md={12} sm={12} xs={12}>
            <Card sx={{ px: 3, py: 2, mb: 3 }}>
              <BarChart
                height="300px"
                data={data}
                title={"Productividad por empaquetador"}
                color={[palette.success.light, palette.primary.dark]}
              />
            </Card>
          </Grid>
          
        </Grid>
      </ContentBox>
    </Fragment>
  );
};

export default Dashboard;
