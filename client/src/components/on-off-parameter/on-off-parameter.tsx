import React, { useState } from "react";
import { Form, Segment, Radio } from "semantic-ui-react";
import { StyledButton } from "./styles";
import { HandleSendCustomCommandProps } from "../main-page/main-page";

type OnOffParameterProps = {
  label: string;
  command: string;
  onSend: ({
    command,
    parameters
  }: HandleSendCustomCommandProps) => Promise<string | void>;
};

export const OnOffParameter: React.FC<OnOffParameterProps> = ({
  label,
  command,
  onSend
}) => {
  const [state, setState] = useState(false);

  const handleSubmit = () => {
    onSend({ command, parameters: state ? "on" : "off" });
  };

  return (
    <Segment>
      <Form size="large" onSubmit={handleSubmit}>
        <Form.Group grouped>
          <label>{label}</label>
          <Form.Field
            label="On"
            control={Radio}
            name="state"
            onChange={() => setState(true)}
            checked={state}
          />
          <Form.Field
            label="Off"
            control={Radio}
            name="state"
            onChange={() => setState(false)}
            checked={!state}
          />
          <StyledButton floated="right" content="Send" size="large" />
        </Form.Group>
      </Form>
    </Segment>
  );
};
