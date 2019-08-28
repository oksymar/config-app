import React from "react";
import { Container, Grid, Header } from "semantic-ui-react";
import CustomCommand from "../custom-command";
import MultiParameter from "../multi-parameter";
import OnOffParameter from "../on-off-parameter";
import SetParameter from "../set-parameter";

const data = {
  label: "Configuration",
  parameters: [
    { name: "Option 1", value: "option1" },
    { name: "Option 2", value: "option2" },
    { name: "Option 3", value: "option3" }
  ]
};

export const MainPage = () => {
  // const [activeItem, setActiveItem] = useState("device1");
  return (
    <>
      {/* <MenuComponent activeItem={activeItem} setActiveItem={setActiveItem} /> */}
      <Header />
      <Container>
        <Grid columns="equal">
          <Grid.Column>
            <CustomCommand />
            <SetParameter label="Set Power" />
            <OnOffParameter label="4 channels" />
          </Grid.Column>
          <Grid.Column>
            <MultiParameter data={data} />
          </Grid.Column>
        </Grid>
      </Container>
    </>
  );
};
