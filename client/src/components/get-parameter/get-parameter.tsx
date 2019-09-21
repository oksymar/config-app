import React, { useState } from "react";
import { Form, Segment, Input } from "semantic-ui-react";
import { HandleSendCustomCommandProps } from "../main-page/main-page";

type GetParameterProps = {
  label: string;
  command: string;
  onSend: ({
    command,
    parameters
  }: HandleSendCustomCommandProps) => Promise<{ id: string; data: string }>;
};

export const GetParameter: React.FC<GetParameterProps> = ({
  label,
  command,
  onSend
}) => {
  const [parameterValue, setParameterValue] = useState("");

  const handleSubmit = () => {
    setParameterValue("");
    onSend({ command, parameters: "" }).then(({ data: value }) => {
      value && setParameterValue(value);
    });
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
            control={Input}
            type="input"
            name={label}
            value={parameterValue}
            readOnly
          />
          <Form.Button floated="right" content="Send" size="large" />
        </Form.Group>
      </Form>
    </Segment>
  );
};
