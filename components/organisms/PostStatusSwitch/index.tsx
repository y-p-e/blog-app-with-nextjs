import FormControlLabel from '@mui/material/FormControlLabel'
import Switch from '@mui/material/Switch'
import React, { useState } from 'react'

type PostStatusSwitchProps = {
  status: string
  setStatus: (status: string) => void
}

const PostStatusSwitch = (props: PostStatusSwitchProps) => {
  const { status, setStatus } = props
  const [checked, setChecked] = useState(false)

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const isChecked = event.target.checked
    setChecked(isChecked)
    if (isChecked) {
      setStatus('公開')
    } else {
      setStatus('非公開')
    }
  }

  return (
    <FormControlLabel
      control={
        <Switch
          checked={checked}
          onChange={handleChange}
          inputProps={{ 'aria-label': 'controlled' }}
        />
      }
      label={status}
      labelPlacement="start"
    />
  )
}

export default PostStatusSwitch
