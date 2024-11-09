// RegisterForm.js
import React from 'react';
import { useForm, Controller } from 'react-hook-form';
import { TextField, Button, Typography, Radio, RadioGroup, FormControlLabel, FormControl, FormLabel } from '@mui/material';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

// Validation schema using Yup
const schema = yup.object().shape({
  lastName: yup.string().required("Họ là bắt buộc"),
  firstName: yup.string().required("Tên là bắt buộc"),
  gender: yup.string().required("Giới tính là bắt buộc"),
  dob: yup.date().required("Ngày sinh là bắt buộc").typeError("Ngày sinh không hợp lệ"),
  email: yup.string().email("Email không hợp lệ").required("Email là bắt buộc"),
  password: yup.string().min(6, "Mật khẩu phải có ít nhất 6 ký tự").required("Mật khẩu là bắt buộc"),
  phoneNumber: yup.string().matches(/^[0-9]{10,11}$/, "Số điện thoại không hợp lệ").required("Số điện thoại là bắt buộc"),
  address: yup.string().required("Địa chỉ là bắt buộc"),
});

export default function RegisterForm({ onSwitch }) {
  const { handleSubmit, control, formState: { errors } } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = (data) => {
    console.log("Registration Data:", data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Controller
        name="lastName"
        control={control}
        render={({ field }) => (
          <TextField
            {...field}
            label="Họ"
            variant="outlined"
            margin="normal"
            fullWidth
            error={!!errors.lastName}
            helperText={errors.lastName ? errors.lastName.message : ""}
          />
        )}
      />
      <Controller
        name="firstName"
        control={control}
        render={({ field }) => (
          <TextField
            {...field}
            label="Tên"
            variant="outlined"
            margin="normal"
            fullWidth
            error={!!errors.firstName}
            helperText={errors.firstName ? errors.firstName.message : ""}
          />
        )}
      />
      <FormControl component="fieldset" margin="normal">
        <FormLabel component="legend">Giới tính</FormLabel>
        <Controller
          name="gender"
          control={control}
          render={({ field }) => (
            <RadioGroup {...field} row defaultValue={'male'}>
              <FormControlLabel value="male" control={<Radio />} label="Nữ" />
              <FormControlLabel value="female" control={<Radio />} label="Nam" />
            </RadioGroup>
          )}
        />
        {errors.gender && <p style={{ color: 'red' }}>{errors.gender.message}</p>}
      </FormControl>
      <Controller
        name="dob"
        control={control}
        render={({ field }) => (
          <TextField
            {...field}
            label="Ngày sinh"
            type="date"
            InputLabelProps={{ shrink: true }}
            variant="outlined"
            margin="normal"
            fullWidth
            error={!!errors.dob}
            helperText={errors.dob ? errors.dob.message : ""}
          />
        )}
      />
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
      <Controller
        name="phoneNumber"
        control={control}
        render={({ field }) => (
          <TextField
            {...field}
            label="Số điện thoại"
            variant="outlined"
            margin="normal"
            fullWidth
            error={!!errors.phoneNumber}
            helperText={errors.phoneNumber ? errors.phoneNumber.message : ""}
          />
        )}
      />
      <Controller
        name="address"
        control={control}
        render={({ field }) => (
          <TextField
            {...field}
            label="Địa chỉ"
            variant="outlined"
            margin="normal"
            fullWidth
            error={!!errors.address}
            helperText={errors.address ? errors.address.message : ""}
          />
        )}
      />
      <Button type="submit" variant="contained" color="primary" fullWidth>
        Đăng ký
      </Button>
      <Typography variant="body2" align="center" sx={{ mt: 2 }}>
        Bạn đã có tài khoản? <Button onClick={onSwitch} variant="text" color="primary">Đăng nhập ngay</Button>
      </Typography>
    </form>
  );
}
