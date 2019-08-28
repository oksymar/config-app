import React, { useState } from "react";
import { Form, Segment, Radio } from "semantic-ui-react";
import { StyledButton } from "./styles";

type PropsType = {
  label: string;
};

export const OnOffParameter: React.FC<PropsType> = props => {
  const [state, setState] = useState(false);

  const handleSubmit = () => {
    //TODO: send msg to device
    console.log(state);
  };

  return (
    <Segment>
      <Form size="large" onSubmit={handleSubmit}>
        <Form.Group grouped>
          <label>{props.label}</label>
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
          <StyledButton floated="right" content="Save" size="large" />
        </Form.Group>
      </Form>
    </Segment>
  );
};
