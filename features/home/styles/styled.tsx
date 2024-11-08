import { Stack, styled } from '@mui/material'

export const CategoryCard = styled(Stack)(({ theme }) => ({
  width: '100%',
  backgroundColor: 'grey',
  justifyContent: 'center',
  alignItems: 'center',
  aspectRatio: '4 / 3',
  overflow: 'hidden',
  cursor: 'pointer',
}))
