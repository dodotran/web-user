import { Box, Container, Grid, Typography } from '@mui/material'
import { FC, ReactElement } from 'react'

export const Footer: FC = (): ReactElement => {
  return (
    <Box
      sx={{
        width: '100%',
        height: 'auto',
        backgroundColor: 'mono.600',
        paddingTop: '1rem',
        paddingBottom: '1rem',
        marginTop: 20,
        borderTop: '1px solid',
      }}
    >
      <Container maxWidth="lg">
        <Grid container direction="column" alignItems="center">
          <Grid item xs={12}>
            <Typography color="black" variant="h5">
              Thiết bị
            </Typography>
          </Grid>
          <Grid item xs={12}>
            <Typography color="textSecondary" variant="subtitle1">
              {`${new Date().getFullYear()} | SOZAS | MONO | SOYUZ`}
            </Typography>
          </Grid>
        </Grid>
      </Container>
    </Box>
  )
}
