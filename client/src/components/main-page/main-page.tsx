import React, { useState, useEffect } from "react";
import { Container, Grid, Header } from "semantic-ui-react";
import axios from "axios";
import MultiParameter from "../multi-parameter";
import OnOffParameter from "../on-off-parameter";
import SetParameter from "../set-parameter";
import Console from "../console";
import GetParameter from "../get-parameter";
import { fieldConfig, FieldType } from "../../config/config";

export type HandleSendCustomCommandProps = {
  command: string;
  parameters: string;
};

const checkConnction = async (
  setConnectionState: React.Dispatch<React.SetStateAction<boolean>>
) => {
  let state = false;
  try {
    state = await axios.get("/api/connected").then(res => res.data.data);
  } catch (err) {
    console.log(err);
  } finally {
    setConnectionState(state);
  }
};

export const MainPage = () => {
  // const [activeItem, setActiveItem] = useState("device1");
  const [msgList, setMsgList] = useState<string[]>([]);
  const [connectionState, setConnectionState] = useState(false);
  const { left: leftFields, right: rightFields } = fieldConfig.fields;

  useEffect(() => {
    checkConnction(setConnectionState);
    setInterval(async () => {
      checkConnction(setConnectionState);
    }, 3000);
  }, []);

  const handleSendCustomCommand = async ({
    command,
    parameters
  }: HandleSendCustomCommandProps) => {
    setMsgList([...msgList, `> ${command} ${parameters}`]);
    return await axios
      .post("/api/command/custom", { command, parameters })
      .then(({ data, status }) => {
        if (status === 200) {
          setMsgList(prevMsgList => [...prevMsgList, data.data]);
          return data;
        }
      });
  };
  const renderFields = (fields: FieldType[]) => {
    return fields.map((field, index) => {
      const type = field.type;

      if (type === "setParameter") {
        return (
          <SetParameter
            {...field}
            onSend={handleSendCustomCommand}
            key={index}
          />
        );
      }

      if (type === "onOffParameter") {
        return (
          <OnOffParameter
            {...field}
            onSend={handleSendCustomCommand}
            key={index}
          />
        );
      }

      if (type === "getParameter") {
        return (
          <GetParameter
            {...field}
            onSend={handleSendCustomCommand}
            key={index}
          />
        );
      }

      if (type === "multiParameter" && "options" in field) {
        return (
          <MultiParameter
            {...field}
            onSend={handleSendCustomCommand}
            key={index}
          />
        );
      }

      return null;
    });
  };

  return (
    <>
      {/* <MenuComponent activeItem={activeItem} setActiveItem={setActiveItem} /> */}
      <Header />
      <Container>
        <Grid columns="equal">
          <Grid.Column>{renderFields(leftFields)}</Grid.Column>
          <Grid.Column>
            <Console
              msgList={msgList}
              onMsgSend={handleSendCustomCommand}
              connectionState={connectionState}
            />
            {renderFields(rightFields)}
          </Grid.Column>
        </Grid>
      </Container>
    </>
  );
};
