import { Box, Button, Grid, Link, TextField, Typography } from '@mui/material'

export const Footer = () => {
  return (
    <Box
      sx={{
        backgroundColor: '#9df3e4',
        padding: '40px',
      }}
    >
      <Grid container spacing={4}>
        {/* Logo and Contact Info */}
        <Grid item xs={12} md={3}>
          <Typography variant="h6" gutterBottom>
            Thiết bị
          </Typography>
          <Typography variant="body2" sx={{ marginBottom: 2 }}>
            Hà Nội, Việt Nam
          </Typography>
          <Typography variant="body2">Email: support@shopname.com</Typography>
          <Typography variant="body2">Hotline: 1900 1234</Typography>
        </Grid>

        {/* Product Categories */}
        <Grid item xs={12} md={3}>
          <Typography variant="h6" gutterBottom>
            Danh mục cho thuê
          </Typography>
          <Box>
            <Link href="/packages" underline="none" color="textSecondary">
              Gói thiết bị
            </Link>
          </Box>
          <Box>
            <Link href="/products" underline="none" color="textSecondary">
              Thiết bị
            </Link>
          </Box>
        </Grid>

        {/* Useful Links */}
        <Grid item xs={12} md={3}>
          <Typography variant="h6" gutterBottom>
            Liên kết hữu ích
          </Typography>
          <Box>
            <Link href="/about" underline="none" color="textSecondary">
              Về chúng tôi
            </Link>
          </Box>
          <Box>
            <Link href="/policy" underline="none" color="textSecondary">
              Chính sách bảo mật
            </Link>
          </Box>
          <Box>
            <Link href="/terms" underline="none" color="textSecondary">
              Điều khoản dịch vụ
            </Link>
          </Box>
          <Box>
            <Link href="/contact" underline="none" color="textSecondary">
              Liên hệ
            </Link>
          </Box>
        </Grid>

        {/* Newsletter Subscription */}
        <Grid item xs={12} md={3}>
          <Typography variant="h6" gutterBottom>
            Đăng ký nhận tin
          </Typography>
          <Typography variant="body2" sx={{ marginBottom: 2 }}>
            Nhận thông báo về khuyến mãi và sản phẩm mới nhất!
          </Typography>
          <Box component="form" sx={{ display: 'flex', gap: 1 }}>
            <TextField variant="outlined" size="small" placeholder="Nhập email" sx={{ flex: 1 }} />
            <Button variant="contained" color="primary">
              Đăng ký
            </Button>
          </Box>
        </Grid>
      </Grid>

      {/* Footer Bottom */}
      <Box
        sx={{
          borderTop: '1px solid white',
          marginTop: 4,
          paddingTop: 2,
          textAlign: 'center',
        }}
      >
        <Typography variant="body2" color="textSecondary">
          © 2024 ShopName. Tất cả quyền được bảo lưu.
        </Typography>
        <Box sx={{ marginTop: 1 }}>
          <Link href="/facebook" underline="none" sx={{ mx: 1 }}>
            Facebook
          </Link>
          <Link href="/instagram" underline="none" sx={{ mx: 1 }}>
            Instagram
          </Link>
          <Link href="/twitter" underline="none" sx={{ mx: 1 }}>
            Twitter
          </Link>
        </Box>
      </Box>
    </Box>
  )
}
