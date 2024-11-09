'use client'
import ProductCard from '@/libs/components/ProductCard'
import { getAllDevice } from '@/service/product.service'
import FilterListIcon from '@mui/icons-material/FilterList'
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown'
import SortByAlphaIcon from '@mui/icons-material/SortByAlpha'
import {
  Box,
  Breadcrumbs,
  FormControl,
  Grid,
  IconButton,
  Link,
  ListItemText,
  MenuItem,
  Select,
  Typography,
} from '@mui/material'
import { useQuery } from '@tanstack/react-query'
import { useState } from 'react'

function Service() {
  const [sortOption, setSortOption] = useState('descPrice')

  const handleChange = (event) => {
    const value = event.target.value
    setSortOption(value)
  }

  const { data, isLoading } = useQuery({
    queryKey: ['allDevice'],
    queryFn: () => getAllDevice(),
  });

  const devices: any = data

  return (
    <div>
      <Box paddingX={10}>
        <Breadcrumbs aria-label="breadcrumb" sx={{ marginTop: 3, color: 'black', fontSize: '14px', fontWeight: 400 }}>
          <Link underline="none" color="black" href="/">
            Trang chủ
          </Link>
          <Typography sx={{ color: 'black', fontSize: '14px', fontWeight: 400 }}>Dịch vụ</Typography>
        </Breadcrumbs>
      </Box>
      <Grid container spacing={5} alignItems={'center'}>
        <Grid item xs={12} md={6}>
          <img
            src="https://theme.hstatic.net/200000719085/1001100454/14/collection_banner.jpg?v=155"
            width={'100%'}
            height={'100%'}
            alt=""
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <Typography variant="h1" component="h1" margin={'20px 0'}>
            Tất cả dịch vụ
          </Typography>
        </Grid>
      </Grid>
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          paddingX: 10,
          borderBottom: '1px solid #ccc',
        }}
      >
        <Typography variant="body1" margin={'20px 0'}>
          Tìm kiếm theo nhu cầu
          <IconButton>
            <FilterListIcon />
          </IconButton>
        </Typography>
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
      </Box>

      <Box sx={{
        paddingX: 10,
      }}>
        <Typography variant="body2" component="p" margin={'20px 0'}>
          {devices?.length} sản phẩm
        </Typography>

        <Grid container spacing={4}>
          {
            devices?.map((device) => (
              <Grid item xs={12} md={3} key={device?.id}>
                <ProductCard product={device} />
              </Grid>
            ))
          }
        </Grid>
      </Box>
    </div>
  )
}

export default Service
