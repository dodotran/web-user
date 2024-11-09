import React from 'react';
import { Box, Typography, Button, IconButton } from '@mui/material';
import { CopyAll as CopyAllIcon, Info as InfoIcon } from '@mui/icons-material';

const VoucherList = ({ vouchers }) => {
  return (
    <Box sx={{ padding: 2, backgroundColor: '#fff', borderRadius: 2, boxShadow: 1 }}>
      <Typography variant="h6" sx={{ fontWeight: 'bold', mb: 2 }}>Khuyến mãi dành cho bạn</Typography>
      <Box>
        {vouchers && vouchers.map((voucher, index) => (
          <Box
            key={voucher.code}
            sx={{
              display: 'flex',
              alignItems: 'center',
              padding: 2,
              borderBottom: index < vouchers.length - 1 ? '1px solid #e0e0e0' : 'none',
            }}
          >
            <Box component="img" src={voucher.image} alt={voucher.title} sx={{ width: 60, height: 60, mr: 2 }} />
            <Box sx={{ flex: 1 }}>
              <Typography variant="body1" sx={{ fontWeight: 600 }}>{voucher.title}</Typography>
              <Typography variant="body2" sx={{ color: 'text.secondary' }}>{voucher.description}</Typography>
              <Typography variant="body2" sx={{ color: 'text.secondary', fontSize: '12px', mt: 1 }}>
                Mã: <strong>{voucher.code}</strong> &nbsp;|&nbsp; HSD: {voucher.expiryDate}
              </Typography>
            </Box>
            <Button
              variant="outlined"
              color="primary"
              size="small"
              startIcon={<CopyAllIcon />}
              sx={{ fontSize: '12px', fontWeight: 500 }}
              onClick={() => navigator.clipboard.writeText(voucher.code)}
            >
              Sao chép mã
            </Button>
            <IconButton size="small" sx={{ color: '#8f9bb3', ml: 1 }}>
              <InfoIcon />
            </IconButton>
          </Box>
        ))}
      </Box>
    </Box>
  );
};

export default VoucherList