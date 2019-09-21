import React, { useState, FC } from "react";
import { Form, Input, InputOnChangeData, Segment } from "semantic-ui-react";
import axios from "axios";

type CustomCommandProps = {
  onSend: (msg: string) => Promise<void>;
};

export const CustomCommand: FC<CustomCommandProps> = ({ onSend }) => {
  const [command, setCommand] = useState("");

  const handleChange = (e: React.ChangeEvent, data: InputOnChangeData) => {
    setCommand(data.value);
  };

  const handleSubmit = async () => {
    onSend(command);
    setCommand("");
  };

  return (
    <Segment>
      <Form size="large" onSubmit={handleSubmit}>
        <Form.Field>
          <label>Custom command</label>
        </Form.Field>
        <Form.Group>
          <Form.Field
            width={13}
            control={Input}
            name="command"
            value={command}
            onChange={handleChange}
          />
          <Form.Button floated="right" content="Save" size="large" />
        </Form.Group>
      </Form>
    </Segment>
  );
};
