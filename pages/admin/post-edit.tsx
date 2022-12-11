import Button from '@mui/material/Button'
import FormControlLabel from '@mui/material/FormControlLabel'
import Stack from '@mui/material/Stack'
import Switch from '@mui/material/Switch'
import TextField from '@mui/material/TextField'
import type { NextPage } from 'next'
import React, { useState } from 'react'
import BackOfficeLayout from '../../components/templates/BackOfficeLayout/index'
import AdminPostEditContainer from '../../container/AdminPostEdit/index'

const AdminPosts: NextPage = () => {
  const [title, setTitle] = useState('')
  const [checked, setChecked] = useState(false)
  const [label, setLabel] = useState('非公開')

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const isChecked = event.target.checked
    setChecked(isChecked)
    if (isChecked) {
      setLabel('公開')
    } else {
      setLabel('非公開')
    }
  }

  const handleSubmitButtonClick = async () => {
    window.alert('保存しました')
  }

  return (
    <BackOfficeLayout>
      <Stack spacing={5}>
        <TextField
          fullWidth
          label="タイトル"
          variant="outlined"
          value={title}
          onChange={(event) => setTitle(event.target.value)}
        />
        <AdminPostEditContainer />
        <Stack spacing={3} direction="row" justifyContent="flex-end">
          <FormControlLabel
            control={
              <Switch
                checked={checked}
                onChange={handleChange}
                inputProps={{ 'aria-label': 'controlled' }}
              />
            }
            label={label}
            labelPlacement="start"
          />
          <Button variant="contained" onClick={handleSubmitButtonClick}>
            保存
          </Button>
        </Stack>
      </Stack>
    </BackOfficeLayout>
  )
}

export default AdminPosts
