type CalculateAmountParams = {
  totalAmountDay: number
  totalAmountWeek: number
  totalAmountMonth: number
  durationType: 'day' | 'week' | 'month'
  durationValue: number | string
}

export const calculatorAmount = ({
  durationType,
  totalAmountDay,
  totalAmountMonth,
  totalAmountWeek,
  durationValue,
}: CalculateAmountParams) => {
  switch (durationType) {
    case 'day':
      return totalAmountDay * Number(durationValue)
    case 'week':
      return totalAmountWeek * Number(durationValue)
    case 'month':
      return totalAmountMonth * Number(durationValue)
    default:
      return 0
  }
}
