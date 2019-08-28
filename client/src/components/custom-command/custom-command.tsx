import React, { useState } from "react";
import { Form, Input, InputOnChangeData, Segment } from "semantic-ui-react";
import axios from "axios";

export const CustomCommand: React.FC = () => {
  const [command, setCommand] = useState("");

  const handleChange = (e: React.ChangeEvent, data: InputOnChangeData) => {
    setCommand(data.value);
  };

  const handleSubmit = async () => {
    await axios.post("/api/command/custom", { command: command });
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
