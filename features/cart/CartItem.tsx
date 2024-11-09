import React from 'react';
import { Box, Typography, IconButton } from '@mui/material';
import RemoveCircleOutlineIcon from '@mui/icons-material/RemoveCircleOutline';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import { formatMoney } from '@/utils';
import { useRecoilState } from 'recoil';
import { cartState } from '@/utils/recoil';

const CartItem = ({ cart }) => {
  const [cartList, setCartList] = useRecoilState(cartState);

  // Function to handle increasing quantity
  const handleIncreaseQuantity = () => {
    const updatedCartList = cartList.map(item =>
      item.id === cart.id ? { ...item, quantity: item.quantity + 1 } : item
    );
    setCartList(updatedCartList);
  };

  // Function to handle decreasing quantity
  const handleDecreaseQuantity = () => {
    const updatedCartList = cartList.map(item =>
      item.id === cart.id && item.quantity > 1
        ? { ...item, quantity: item.quantity - 1 }
        : item
    );
    setCartList(updatedCartList);
  };

  // Function to handle removing an item
  const handleRemoveItem = () => {
    const updatedCartList = cartList.filter(item => item.id !== cart.id);
    setCartList(updatedCartList);
  };

  return (
    <Box sx={{
      display: 'flex',
      alignItems: 'center',
      padding: 2,
      backgroundColor: '#f9f9f9',
      borderRadius: 2,
      mb: 1
    }}>
      <Box sx={{ position: 'relative' }}>
        <Box
          component="img"
          sx={{ width: 80, height: 120, mr: 2, borderRadius: 1, objectFit: 'cover' }}
          src={cart?.image} // Replace with actual image path
          alt={cart?.name}
        />
        <Box
          onClick={handleRemoveItem}
          sx={{
            position: 'absolute', top: 0, left: '-10px',
            fontSize: '10px',
            color: 'white',
            backgroundColor: '#8f9bb3',
            width: 24,
            height: 24,
            borderRadius: '50%',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            cursor: 'pointer'
          }}
        >
          Xóa
        </Box>
      </Box>
      <Box sx={{ flexGrow: 1 }}>
        <Typography variant="body1" sx={{ fontWeight: 600 }}>{cart?.name}</Typography>
        <Typography variant="body1" sx={{ color: 'text.secondary', mt: 1 }}>{formatMoney(cart?.priceDay)}</Typography>
      </Box>
      <Box sx={{ display: 'flex', alignItems: 'center' }}>
        <IconButton color="primary" onClick={handleDecreaseQuantity}>
          <RemoveCircleOutlineIcon />
        </IconButton>
        <Typography variant="body1" sx={{ mx: 1 }}>{cart?.quantity}</Typography>
        <IconButton color="primary" onClick={handleIncreaseQuantity}>
          <AddCircleOutlineIcon />
        </IconButton>
      </Box>
    </Box>
  );
};

export default CartItem;
