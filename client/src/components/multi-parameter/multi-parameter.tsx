import React, { useState } from "react";
import { Form, Segment, Checkbox } from "semantic-ui-react";
import { StyledButton } from "./styles";

type FieldType = {
  name: string;
  value: string;
};

type PropsType = {
  data: {
    label: string;
    parameters: Array<FieldType>;
  };
};

export const MultiParameter: React.FC<PropsType> = props => {
  const [parameters, setParameters] = useState<Array<string>>([]);

  const handleSubmit = () => {
    //TODO: send msg to device
    console.log(parameters);
  };

  const renderRadioButtons = (fields: Array<FieldType>) => {
    return fields.map(field => {
      return (
        <Form.Field
          label={field.name}
          control={Checkbox}
          key={field.value}
          onChange={() => {
            console.log("here");
            parameters.includes(field.value)
              ? setParameters(parameters.filter(e => e !== field.value))
              : setParameters([...parameters, field.value]);
          }}
        />
      );
    });
  };

  return (
    <Segment>
      <Form size="large" onSubmit={handleSubmit}>
        <Form.Group grouped>
          <label>{props.data.label}</label>
          {renderRadioButtons(props.data.parameters)}
          <StyledButton floated="right" content="Save" size="large" />
        </Form.Group>
      </Form>
    </Segment>
  );
};
