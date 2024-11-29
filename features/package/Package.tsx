'use client'

import { ProductCard } from '@/libs/components/ProductCard/ProductCard'
import { getAllPackage } from '@/service/product.service'
import { Box, Breadcrumbs, Grid, Link, Typography } from '@mui/material'
import { useQuery } from '@tanstack/react-query'
import { useState } from 'react'

export const Package = () => {
  const [sortOption, setSortOption] = useState('descPrice')

  const handleChange = (event) => {
    const value = event.target.value
    setSortOption(value)
  }

  const { data: devices } = useQuery({
    queryKey: ['allDevice'],
    queryFn: () => getAllPackage(),
  })

  return (
    <Box pb={10}>
      <Box paddingX={10}>
        <Breadcrumbs aria-label="breadcrumb" sx={{ marginTop: 3, color: 'black', fontSize: '14px', fontWeight: 400 }}>
          <Link underline="none" color="black" href="/">
            Trang chủ
          </Link>
          <Typography sx={{ color: 'black', fontSize: '14px', fontWeight: 400 }}>Gói thiết bị</Typography>
        </Breadcrumbs>
      </Box>
      <Grid container spacing={5} alignItems={'center'}>
        <Grid item xs={12} md={6}>
          <img
            src="https://mayanh24h.com/upload/assets/2024/0817/ar/banner-may-quay-camera-action.png"
            width={'100%'}
            height={'100%'}
            alt=""
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <Typography variant="h1" component="h1" margin={'20px 0'}>
            Gói thiết bị
          </Typography>
        </Grid>
      </Grid>
      {/* <Box
        sx={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          paddingX: 10,
          borderBottom: '1px solid #ccc',
        }}
      >
        <FormControl variant="outlined">
          <Select
            value={sortOption}
            onChange={handleChange}
            displayEmpty
            IconComponent={KeyboardArrowDownIcon} // Biểu tượng mũi tên xuống
            sx={{
              display: 'flex',
              alignItems: 'center',
              fontSize: 14,
              fontWeight: 500,
              color: '#333',
              '.MuiSelect-select': {
                padding: '8px 24px 8px 8px',
                display: 'flex',
                alignItems: 'center',
              },
              '.MuiSvgIcon-root': {
                marginRight: '8px',
              },
            }}
            renderValue={(selected) => {
              return (
                <Typography variant="body1" sx={{ display: 'flex', alignItems: 'center' }}>
                  <SortByAlphaIcon sx={{ marginRight: '8px' }} />
                  {selected === '' ? 'Sắp xếp' : selected}
                </Typography>
              )
            }}
          >
            <MenuItem value="ascPrice">
              <ListItemText primary="Giá: Tăng dần" />
            </MenuItem>
            <MenuItem value="descPrice">
              <ListItemText primary="Giá: Giảm dần" />
            </MenuItem>
            <MenuItem value="nameAsc">
              <ListItemText primary="Tên: A-Z" />
            </MenuItem>
            <MenuItem value="nameDesc">
              <ListItemText primary="Tên: Z-A" />
            </MenuItem>
            <MenuItem value="oldest">
              <ListItemText primary="Cũ nhất" />
            </MenuItem>
            <MenuItem value="newest">
              <ListItemText primary="Mới nhất" />
            </MenuItem>
            <MenuItem value="bestSeller">
              <ListItemText primary="Bán chạy nhất" />
            </MenuItem>
            <MenuItem value="lowStock">
              <ListItemText primary="Tồn kho giảm dần" />
            </MenuItem>
          </Select>
        </FormControl>
      </Box> */}

      <Box
        sx={{
          paddingX: 10,
        }}
      >
        <Typography variant="body2" component="p" margin={'20px 0'}>
          {devices?.length ?? 0} sản phẩm
        </Typography>

        <Grid container spacing={4}>
          {devices?.map((device) => (
            <Grid item xs={12} md={3} key={device?.id}>
              <ProductCard {...device} type="package" />
            </Grid>
          ))}
        </Grid>
      </Box>
    </Box>
  )
}
