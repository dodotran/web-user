'use client'

import { Box, BoxProps, Stack, styled } from '@mui/material'
import React from 'react'
import { Header, HEADER_HEIGHT } from './Header'

type LayoutType = BoxProps<
  'div',
  {
    children: React.ReactNode
    HeaderComponent?: React.ReactNode
    disableSidebar?: boolean
  }
>

const LayoutPage: React.FC<LayoutType> = ({
  children,
  HeaderComponent,
  disableSidebar = false,
  ...contentProps
}) => {
  return (
    <Stack direction="column">
      <Header />
      <ContentPage {...contentProps}>{children}</ContentPage>
    </Stack>
  )
}

export { LayoutPage }

const ContentPage = styled(Box)(({ theme }) => ({
  minHeight: '100vh',
  flex: 1,
  justifyContent: 'center',
  alignItems: 'center',
  overflow: 'hidden',
  marginTop: HEADER_HEIGHT,
  background: theme.palette.base.white,
  backgroundColor: theme.palette.base.white,
}))
