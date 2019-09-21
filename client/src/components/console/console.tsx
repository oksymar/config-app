import React, { FC, useState, useEffect } from "react";
import { Segment, Header, Input, Form } from "semantic-ui-react";
import { StyledConsoleArea, StyledLine } from "./styles";
import { HandleSendCustomCommandProps } from "../main-page/main-page";

type ConsoleProps = {
  msgList: string[];
  connectionState: boolean;
  onMsgSend: ({ command, parameters }: HandleSendCustomCommandProps) => void;
};

export const Console: FC<ConsoleProps> = ({
  msgList,
  connectionState = false,
  onMsgSend
}) => {
  const [inputMsg, setInputMsg] = useState("");

  let messagesEnd: HTMLDivElement | null = null;
  useEffect(() => scrollToBottom());

  const scrollToBottom = () => {
    messagesEnd &&
      messagesEnd.scrollIntoView({
        behavior: "smooth",
        block: "nearest",
        inline: "start"
      });
  };

  const handleSubmit = () => {
    onMsgSend({ command: inputMsg, parameters: "" });
    setInputMsg("");
  };

  return (
    <Segment>
      <Header>{`Serial terminal - ${
        connectionState ? "connected" : "not connected"
      }`}</Header>
      <StyledConsoleArea>
        {msgList.map((line, index) => (
          <StyledLine key={index}>{line}</StyledLine>
        ))}
        <div
          style={{ float: "left", clear: "both" }}
          ref={el => {
            messagesEnd = el;
          }}
        ></div>
      </StyledConsoleArea>
      <Form onSubmit={handleSubmit}>
        <Input
          fluid
          value={inputMsg}
          onChange={e => setInputMsg(e.target.value)}
        ></Input>
      </Form>
      <br />
    </Segment>
  );
};
