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
  width: 205px;

  .MuiInput-underline:after {
    border-bottom: 2px solid #575757;
  }
  .MuiOutlinedInput-multiline {
    padding: 10px;
  }
  && .MuiOutlinedInput-root.Mui-focused {
    border-color: #575757 !important;
  }

  // -------------------------------

  fieldset {
    border: none;
  }
  .MuiInputBase-input:focus {
    border: 2px solid #575757;
    border-radius: 4px;
  }
  .MuiInputBase-input {
    border: 1px solid rgba(0, 0, 0, 0.23);
    border-radius: 4px;
  }
  .MuiInputBase-input:hover:not(:focus) {
    border: 1px solid #575757;
    border-radius: 4px;
  }
`;

export default CustomField;
