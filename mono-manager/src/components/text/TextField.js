import { styled } from "@mui/system";
import { 
  TextField as BaseTextField,
} from '@mui/material';
import React from "react";

const StyledTextField = styled(BaseTextField)({

});

const TextField = ({...props}) => {

  return (<>
    <StyledTextField 
      size="small"
      type="text"
      fullWidth
      {...props}
    >
     
    </StyledTextField>
  </>)
}

export default TextField;
