import styled from "styled-components";
import { Field } from "formik";

const CustomField = styled(Field)`
  text-align: ${props => props.align};
  .MuiInputBase-input {
    padding: 10px;
  }
  .MuiInputBase-multiline {
    padding-bottom: 0;
  }
  .MuiInput-underline:after {
    border-bottom: 2px solid #575757;
  }

  && .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline {
    border-color: #575757;
  }
  &&.MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline {
    border-color: #575757;
  }
  && .MuiOutlinedInput-root.Mui-error .MuiOutlinedInput-notchedOutline {
    border-color: #f44336;
  }
  &&.MuiOutlinedInput-root.Mui-error .MuiOutlinedInput-notchedOutline {
    border-color: #f44336;
  }

  .MuiOutlinedInput-multiline {
    padding: 10px;
  }

  width: 205px;
`;

export default CustomField;
