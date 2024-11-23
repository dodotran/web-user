import { EquipmentType } from '@/features/home'
import { base } from '@/libs/configs'
import { formatMoney } from '@/utils'
import { Box, Button, Divider, Stack, Typography } from '@mui/material'

export const ProductInformation: React.FC<EquipmentType> = (data) => {
  return (
    <Stack flex={6} minHeight={750} spacing={4.5}>
      <Stack gap={2}>
        <Typography maxWidth={500} height="auto" fontSize={28} lineHeight="40px" fontWeight={760}>
          {data?.name}
        </Typography>

        <Stack direction="row" gap={1}>
          <Typography fontSize={16} lineHeight="26px">
            Mã: <b>{data?.id}</b>
          </Typography>
          <Box width="1px" height="100%" bgcolor="#DDDD" />
          <Typography fontSize={16} lineHeight="26px">
            Tình trạng: <b>Còn hàng</b>
          </Typography>
        </Stack>
      </Stack>

      <Stack spacing={0.5}>
        <Typography fontSize={20} lineHeight="32px" fontWeight={600}>
          Giá thuê ngày: {formatMoney(data.pricePerDay)}
        </Typography>

        <Typography fontSize={20} lineHeight="32px" fontWeight={600}>
          Giá thuê tháng: {formatMoney(data.pricePerMonth)}
        </Typography>

        <Typography fontSize={20} lineHeight="32px" fontWeight={600}>
          Giá thuê tuần: {formatMoney(data.pricePerWeek)}
        </Typography>
      </Stack>

      <Divider />

      <Stack spacing={1}>
        <Stack direction="row" gap={1}>
          <Button
            variant="outlined"
            sx={{
              flex: 1,
              borderColor: base.primary,
              color: base.primary,
              fontWeight: 700,
              borderRadius: 0,
              ':hover': {
                borderColor: base.primary,
                color: base.primary,
              },
            }}
          >
            Thêm vào giỏ hàng
          </Button>

          <Button
            sx={{
              fontWeight: 700,
              flex: 1,
              backgroundColor: base.primary,
              color: base.white,
              borderRadius: 0,
            }}
          >
            Thuê ngay
          </Button>
        </Stack>
        <Button
          type="submit"
          variant="contained"
          color="primary"
          fullWidth
          sx={{
            borderRadius: 0,
            fontWeight: 700,
          }}
        >
          Click vào đây để nhận ưu đãi
        </Button>
      </Stack>
    </Stack>
  )
}
