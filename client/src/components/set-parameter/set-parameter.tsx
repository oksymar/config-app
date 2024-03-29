import React, { useState } from "react";
import { Form, InputOnChangeData, Segment } from "semantic-ui-react";
import { NumberInput } from "./styles";
import { HandleSendCustomCommandProps } from "../main-page/main-page";

type SetParameterProps = {
  label: string;
  command: string;
  onSend: ({
    command,
    parameters
  }: HandleSendCustomCommandProps) => Promise<string | void>;
};

export const SetParameter: React.FC<SetParameterProps> = ({
  label,
  command,
  onSend
}) => {
  const [parameterValue, setParameterValue] = useState("");

  const handleSubmit = () => {
    onSend({ command, parameters: parameterValue });
  };

  return (
    <Segment>
      <Form size="large" onSubmit={handleSubmit}>
        <Form.Field>
          <label>{label}</label>
        </Form.Field>
        <Form.Group>
          <Form.Field
            width={13}
            control={NumberInput}
            type="input"
            name={label}
            value={parameterValue}
            onChange={(_e: React.ChangeEvent, data: InputOnChangeData) =>
              setParameterValue(data.value)
            }
          />
          <Form.Button floated="right" content="Send" size="large" />
        </Form.Group>
      </Form>
    </Segment>
  );
};
