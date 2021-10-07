import React, { useCallback } from 'react'
import { useForm, FormProvider } from 'react-hook-form'
import { Button } from '@mui/material'
import TextField from '@components/hook-forms/textField'
import { useDispatch, useSelector } from 'react-redux'
import CircularProgress from '@mui/material/CircularProgress'
import { loginAction } from './store/actions'

const LoginForm = React.memo(() => {
  const dispatch = useDispatch()
  const { isSubmiting } = useSelector((state: any) => state.currentUser)
  const loginFormMethods = useForm()
  const { handleSubmit } = loginFormMethods

  const onSubmit = useCallback((values) => {
    dispatch(loginAction(values))
  }, [])

  return (
    <FormProvider {...loginFormMethods}>
      <form className="text-center" onSubmit={handleSubmit(onSubmit)}>
        <div className="mt-4">
          <TextField name="identifier" label="Email" rules={{ required: 'Vui lòng nhập email' }} />
        </div>

        <div className="mt-4">
          <TextField
            name="password"
            label="Mật khẩu"
            type="password"
            rules={{ required: 'Vui lòng nhập mật khẩu' }}
          />
        </div>

        <div className="mt-4">
          <Button variant="contained" className="mt-4" type="submit" disabled={isSubmiting}>
            Đăng nhập
            {isSubmiting && <CircularProgress color="inherit" size={18} className="ml-4" />}
          </Button>
        </div>
      </form>
    </FormProvider>
  )
})

export default LoginForm
