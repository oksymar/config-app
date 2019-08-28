import React, { useState } from "react";
import { Form, InputOnChangeData, Segment } from "semantic-ui-react";
import { NumberInput } from "./styles";

type PropsType = {
  label: string;
};

export const SetParameter: React.FC<PropsType> = props => {
  const [parameterValue, setParameterValue] = useState("");

  const handleChange = (e: React.ChangeEvent, data: InputOnChangeData) => {
    setParameterValue(data.value);
  };

  const handleSubmit = () => {
    //TODO: send msg to device
    console.log(parameterValue);
  };

  return (
    <Segment>
      <Form size="large" onSubmit={handleSubmit}>
        <Form.Field>
          <label>{props.label}</label>
        </Form.Field>
        <Form.Group>
          <Form.Field
            width={13}
            control={NumberInput}
            type="number"
            name={props.label}
            value={parameterValue}
            onChange={handleChange}
          />
          <Form.Button floated="right" content="Save" size="large" />
        </Form.Group>
      </Form>
    </Segment>
  );
};
