import React from 'react'
import { Box } from '@mui/system'
import Button1_btn from '../Buttons/Button1'

const Buttons = () => {
  return (
    <Box sx={{display:'flex', flexDirection:'column'}}>
      <Button1_btn label={'Button1'}/>
    </Box>
  )
}

export default Buttons