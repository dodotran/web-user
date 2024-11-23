import { Input } from '@/libs/components/Form'
import { zodResolver } from '@hookform/resolvers/zod'
import { Button, Stack, Typography } from '@mui/material'
import { SubmitHandler, useForm } from 'react-hook-form'
import { RegisterInputSchema, RegisterInputType } from './type'

export default function RegisterForm({ onSwitch }) {
  const { handleSubmit, control } = useForm<RegisterInputType>({
    defaultValues: {
      email: '',
      password: '',
      name: '',
      passwordconf: '',
    },
    resolver: zodResolver(RegisterInputSchema),
  })

  const onSubmit: SubmitHandler<RegisterInputType> = (data) => {
    console.log('Registration Data:', data)
  }

  return (
    <Stack
      component="form"
      onSubmit={handleSubmit(onSubmit)}
      spacing={2}
      maxWidth={{
        xs: '100%',
        sm: 400,
        md: 500,
        lg: 600,
      }}
    >
      <Input name="name" control={control} fullWidth placeholder="Nhập tên của bạn" />

      <Input name="email" control={control} fullWidth placeholder="Email" />

      <Input name="password" control={control} fullWidth type="password" placeholder="Nhập mật khẩu của bạn" />

      <Input name="passwordconf" control={control} fullWidth type="password" placeholder="Nhập lại mật khẩu của bạn" />

      {/* <Controller
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
            helperText={errors.firstName ? errors.firstName.message : ''}
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
            helperText={errors.dob ? errors.dob.message : ''}
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
            helperText={errors.email ? errors.email.message : ''}
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
            helperText={errors.password ? errors.password.message : ''}
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
            helperText={errors.phoneNumber ? errors.phoneNumber.message : ''}
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
            helperText={errors.address ? errors.address.message : ''}
          />
        )}
      /> */}

      <Stack direction="row" spacing={3}>
        <Button type="submit" variant="contained" color="primary">
          Đăng ký
        </Button>

        <Stack gap={0.5} justifyContent="center">
          <Stack direction="row" alignItems="center" spacing="4px">
            <Typography variant="body2" align="center">
              Bạn đã có tài khoản?
            </Typography>
            <Typography onClick={onSwitch} color="#009dde" variant="body2" sx={{ cursor: 'pointer' }}>
              Đăng nhập ngay
            </Typography>
          </Stack>
        </Stack>
      </Stack>
    </Stack>
  )
}
