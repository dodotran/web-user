import { formatMoney } from '@/utils'
import {
  Button,
  Paper,
  Stack,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
} from '@mui/material'
import { useState } from 'react'
import { RentalType } from '../type'
import { ModalFeedback } from './ModalFeedback'
import { ModalReport } from './ModalReport'

export const RentalHistoryItem = ({ rental }: { rental: RentalType }) => {
  const [open, setOpen] = useState(false)
  const [feedbackOpen, setFeedbackOpen] = useState(false)

  return (
    <Paper key={rental.id} sx={{ marginBottom: 3, padding: 2, position: 'relative' }}>
      <Stack direction="row" justifyContent="space-between" position="absolute" top={20} right={20}>
        <Button color="error" onClick={() => setFeedbackOpen(true)}>
          Feedback
        </Button>
      </Stack>
      <Typography>
        <b>Mã đơn thuê</b>: {rental.id}
      </Typography>
      <Typography>
        <b>Trạng thái</b>: {rental.status}
      </Typography>
      <Typography>
        <b>Thời gian thuê</b>: {new Date(rental.startDate).toLocaleDateString()} -{' '}
        {new Date(rental.endDate).toLocaleDateString()}
      </Typography>
      <Typography>
        <b>Tổng giá thuê</b>: {formatMoney(rental.totalAmount)}
      </Typography>

      <ModalFeedback handleClose={() => setFeedbackOpen(false)} open={feedbackOpen} rentalId={rental.id} />

      <TableContainer component={Paper} sx={{ marginTop: 2 }}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Mã</TableCell>
              <TableCell>Mã thiết bị</TableCell>
              <TableCell>Số lượng</TableCell>
              <TableCell>Loại thời gian</TableCell>
              <TableCell>Đơn vị thời gian</TableCell>
              <TableCell>Giá tiền</TableCell>
              <TableCell></TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rental.items.map((item) => {
              return (
                <TableRow key={item.id}>
                  <TableCell>{item.id}</TableCell>
                  <TableCell>{item.equipmentId}</TableCell>
                  <TableCell>{item.quantity}</TableCell>
                  <TableCell>{item.durationType}</TableCell>
                  <TableCell>{item.durationValue}</TableCell>
                  <TableCell>{formatMoney(item.price)}</TableCell>
                  <TableCell>
                    <Button color="error" onClick={() => setOpen(true)}>
                      Báo hỏng
                    </Button>
                  </TableCell>
                  <ModalReport handleClose={() => setOpen(false)} open={open} equipmentId={item.equipmentId} />
                </TableRow>
              )
            })}
          </TableBody>
        </Table>
      </TableContainer>
    </Paper>
  )
}
