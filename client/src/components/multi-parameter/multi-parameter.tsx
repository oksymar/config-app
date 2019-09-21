import React, { useState } from "react";
import { Form, Segment, Checkbox } from "semantic-ui-react";
import { StyledButton } from "./styles";
import { HandleSendCustomCommandProps } from "../main-page/main-page";

type FieldType = {
  name: string;
  value: string;
};

type MultiParameterProps = {
  label: string;
  command: string;
  options: Array<FieldType>;
  onSend: ({
    command,
    parameters
  }: HandleSendCustomCommandProps) => Promise<string | void>;
};

export const MultiParameter: React.FC<MultiParameterProps> = ({
  label,
  command,
  options,
  onSend
}) => {
  const [parameters, setParameters] = useState<Array<string>>([]);

  const handleSubmit = () => {
    onSend({ command, parameters: parameters.join(", ") });
  };

  const renderRadioButtons = (fields: Array<FieldType>) => {
    return fields.map(field => {
      return (
        <Form.Field
          label={field.name}
          control={Checkbox}
          key={field.value}
          onChange={() => {
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
          <label>{label}</label>
          {renderRadioButtons(options)}
          <StyledButton floated="right" content="Send" size="large" />
        </Form.Group>
      </Form>
    </Segment>
  );
};
