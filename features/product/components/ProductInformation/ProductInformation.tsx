import { EquipmentType } from '@/features/home'
import { formatMoney } from '@/utils'
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder'
import { colors, Divider, Stack, Typography } from '@mui/material'

export const ProductInformation: React.FC<EquipmentType> = (data) => {
  return (
    <Stack flex={6} minHeight={750} spacing={4.5}>
      <Stack direction="row" justifyContent="space-between">
        <Typography
          fontFamily="Paris2024-Variable"
          maxWidth={500}
          height="auto"
          fontSize={28}
          lineHeight="40px"
          fontWeight={760}
        >
          {data?.name}
        </Typography>
      </Stack>

      <Stack direction="row" alignItems="flex-end" color={colors.amber[800]} spacing={0.5}>
        <Typography fontSize={48} fontWeight={760} fontFamily="Paris2024-Variable" lineHeight="42px">
          {formatMoney(data.pricePerDay)}
        </Typography>
      </Stack>

      <Divider />

      <Stack direction="row" gap={1}>
        <FavoriteBorderIcon />
        <Typography
          sx={{
            fontWeight: 600,
            fontSize: 16,
            lineHeight: '26px',
          }}
        >
          いいね
        </Typography>
      </Stack>
    </Stack>
  )
}
