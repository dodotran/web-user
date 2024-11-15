'use client'

import { cartState } from '@/utils/recoil'
import AccountCircleIcon from '@mui/icons-material/AccountCircle'
import NotificationsIcon from '@mui/icons-material/Notifications'
import SearchIcon from '@mui/icons-material/Search'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart'
import { IconButton, Stack, Typography } from '@mui/material'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { useRecoilValue } from 'recoil'
import { menu } from './menu'

export const HEADER_HEIGHT = 120

export const Header = () => {
  const cart = useRecoilValue(cartState)
  const router = useRouter()

  return (
    <Stack
      left={0}
      right={0}
      top={0}
      height={HEADER_HEIGHT}
      position="fixed"
      sx={{ backgroundColor: 'white' }}
      zIndex={1000}
    >
      <Stack
        direction="row"
        justifyContent="space-between"
        height={40}
        alignItems="center"
        px={10}
        sx={{ backgroundColor: '#9df3e4' }}
      >
        <Stack>
          <Typography fontSize={14} fontWeight={400}>
            Hotline: <b>0998.999.999</b> (8h - 21h tất cả các ngày trong tuần) Liên hệ
          </Typography>
        </Stack>
        <Stack alignItems="center" flexDirection="row">
          <IconButton>
            <NotificationsIcon />
          </IconButton>
          <Typography fontSize={14}>Thông báo cho tôi</Typography>
        </Stack>
      </Stack>

      <Stack direction="row" alignItems="center" justifyContent="space-between" px={10} py={2} height={80}>
        <Typography
          variant="h1"
          component={Link}
          href="/"
          color="base.black"
          sx={{
            textDecoration: 'none',
          }}
        >
          Thiết bị
        </Typography>

        <Stack direction="row" justifyContent="space-between" px={10} alignItems="center" gap={2}>
          {menu.map((item, index) => (
            <Typography
              fontSize={16}
              fontWeight={600}
              key={index}
              component={Link}
              color="base.black"
              sx={{ textDecoration: 'none' }}
              href={item.href}
            >
              {item.title}
            </Typography>
          ))}
        </Stack>

        <Stack direction="row" justifyContent="space-between" px={10} gap={2} alignItems="center">
          <IconButton href="/auth">
            <AccountCircleIcon />
          </IconButton>
          <IconButton
            sx={{
              position: 'relative',
              cursor: 'pointer',
            }}
            onClick={() => router.push('/cart')}
          >
            <ShoppingCartIcon />
          </IconButton>
          <IconButton>
            <SearchIcon />
          </IconButton>
        </Stack>
      </Stack>
    </Stack>
  )
}
