import React from 'react'
import { TextField as MUITextField } from '@mui/material'
import { useFormContext, Controller } from 'react-hook-form'

const TextField = React.memo(({ name, rules, ...props }: any) => {
  const { control } = useFormContext()

  return (
    <Controller
      name={name}
      rules={rules}
      control={control}
      render={({ field: { value, ...filedProps }, fieldState: { error } }) => (
        <>
          <MUITextField {...props} value={value || ''} size="small" {...filedProps} />
          {error && <p className="text-left text-12 ml-1">{error.message}</p>}
        </>
      )}
    />
  )
})

export default TextField
