// LoginForm.js
import React from 'react';
import { useForm, Controller } from 'react-hook-form';
import { TextField, Button, Typography } from '@mui/material';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

const schema = yup.object().shape({
  email: yup.string().email("Email không hợp lệ").required("Email là bắt buộc"),
  password: yup.string().min(6, "Mật khẩu phải có ít nhất 6 ký tự").required("Mật khẩu là bắt buộc"),
});

export default function LoginForm({ onSwitch }) {
  const { handleSubmit, control, formState: { errors } } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = (data) => {
    console.log("Login Data:", data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      {/* Login form fields go here */}
      <Controller
        name="email"
        control={control}
        render={({ field }) => (
          <TextField
            {...field}
            label="Email"
            variant="outlined"
            margin="normal"
            fullWidth
            error={!!errors.email}
            helperText={errors.email ? errors.email.message : ""}
          />
        )}
      />
      <Controller
        name="password"
        control={control}
        render={({ field }) => (
          <TextField
            {...field}
            label="Mật khẩu"
            type="password"
            variant="outlined"
            margin="normal"
            fullWidth
            error={!!errors.password}
            helperText={errors.password ? errors.password.message : ""}
          />
        )}
      />
      <Button type="submit" variant="contained" color="primary" fullWidth>
        Đăng nhập
      </Button>
      <Typography variant="body2" align="center" sx={{ mt: 2 }}>
        Chưa có tài khoản? <Button onClick={onSwitch} variant="text" color="primary">Đăng ký ngay</Button>
      </Typography>
    </form>
  );
}
