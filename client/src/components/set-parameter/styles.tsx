import { Input } from "semantic-ui-react";
import styled from "styled-components";

export const NumberInput = styled(Input)`
  input[type="number"] {
    -moz-appearance: textfield;
  }

  input::-webkit-outer-spin-button,
  input::-webkit-inner-spin-button {
    -webkit-appearance: none;
  }
`;
