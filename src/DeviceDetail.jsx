import { Card, CardContent, Container, Grid, Typography } from "@mui/material";

export const DeviceDetail = () => {
  return (
    <Container maxWidth="sm">
      <Grid container spacing={2} mt={4}>
        <Grid item xs={6}>
          <Card>
            <CardContent>
              <Typography variant="h5">A good Title</Typography>
            </CardContent>
          </Card>
        </Grid>

        <Grid item xs={6}>
          <Card>
            <CardContent>
              <Typography variant="h5">A good Title</Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12}>
          <Card>
            <CardContent>
              <Typography variant="h5">A good Title</Typography>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Container>
  );
};
