import { styled } from "@mui/system";
import BaseTextField from './TextField';
import React from "react";
import { useState } from "react";
import PropTypes from 'prop-types';

const StyledTextField = styled(BaseTextField)({

});

const TextFieldCounter = ({maxLength, ...props}) => {

  const [label, setLabel] = useState(`${props.defaultValue?.length ?? 0} / ${maxLength}`)

  const onChange = (e) => {
    setLabel(`${e.target.value.length ?? 0} / ${maxLength}`)
    props.onChange && props.onChange()
  }

  return (<>
    <StyledTextField
      label={label}
      onChange={onChange}
      inputProps={{ maxLength: maxLength }}
      {...props}
    >
     
    </StyledTextField>
  </>)
}

TextFieldCounter.propTypes = {
  maxLength: PropTypes.number.isRequired
}

export default TextFieldCounter;
