import { Button } from '@mui/material'
import { KeyboardArrowRight } from '@material-ui/icons'
import React from 'react'

const Launch_btn = ({sx={},...props}) => {
  return (
    <Button variant='contained' sx={{borderRadius:4.5, ...sx}}>
       {props.title}
       <KeyboardArrowRight/>
    </Button>
  )
}

export default Launch_btn