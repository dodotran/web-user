import { ProductCard } from '@/libs/components/ProductCard/ProductCard'
import { OutlineButton } from '@/libs/styles'
import { Grid2, Stack, Typography } from '@mui/material'

export const NewRelease = () => {
  return (
    <Stack mt={10} gap={6} px={3}>
      <Typography fontWeight={400} fontSize={32} textAlign="center">
        Sản phẩm mới về
      </Typography>

      <Grid2
        container
        spacing={{ xs: 2, md: 3 }}
        columns={{ xs: 4, sm: 8, md: 12 }}
      >
        {Array.from(Array(6)).map((_, index) => (
          <Grid2 key={index} size={{ xs: 2, sm: 4, md: 2.4 }}>
            <ProductCard />
          </Grid2>
        ))}
      </Grid2>

      <OutlineButton sx={{ width: 200 }}>Xem tất cả</OutlineButton>
    </Stack>
  )
}
