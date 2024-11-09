import { Button, Card, CardContent, Divider, TextField, Typography } from '@mui/material'

const OrderInfo = ({ total }) => {
  return (
    <Card sx={{ borderRadius: 2 }}>
      <CardContent>
        <Typography variant="h6" sx={{ fontWeight: 600, mb: 2 }}>
          Thông tin đơn hàng
        </Typography>

        <TextField label="Ngày bắt đầu thuê" type="date" fullWidth InputLabelProps={{ shrink: true }} sx={{ mb: 2 }} />
        <TextField label="Ngày kết thúc thuê" type="date" fullWidth InputLabelProps={{ shrink: true }} sx={{ mb: 3 }} />

        <Divider sx={{ mb: 2 }} />

        <Typography variant="h6" sx={{ fontWeight: 600, display: 'flex', justifyContent: 'space-between' }}>
          Tổng tiền: <strong style={{ color: 'red' }}>{total}</strong>
        </Typography>
        <ul>
          <li>Phí vận chuyển sẽ được tính ở trang thanh toán.</li>
          <li>Bạn cũng có thể nhập mã giảm giá ở trang thanh toán.</li>
        </ul>

        <Button variant="contained" color="error" fullWidth sx={{ mt: 3, paddingY: 1.5, fontSize: '1rem' }}>
          Thuê ngay
        </Button>
      </CardContent>
    </Card>
  )
}

export default OrderInfo
