import React from 'react'
import { Box } from '@mui/system'
import Button1_btn from '../Buttons/Button1'
import Contained_btn from '../Buttons/Contained_btn'
import Launch_btn from '../Buttons/Launch_btn'
import Outlined_btn from '../Buttons/Outlined_btn'
import Main_btn from '../Buttons/Main_btn'

const Buttons = () => {
  return (
    <Box sx={{display:'flex', flexDirection:'column'}}>
      <Button1_btn label={'Button1'}/>
      <Contained_btn arrow sx={{width:'15%', mx:2, my:2, color:'white'}}>
        Button2
      </Contained_btn>
      <Launch_btn sx={{width:'15%', mx:2, my:2, color:'white'}} title={'Button3'}/>
      <Main_btn label={'Button 4'}/>
      <Outlined_btn sx={{width:'15%', mx:2, my:2}} arrowRev>
        Button 5
      </Outlined_btn>
    </Box>
  )
}

export default Buttons