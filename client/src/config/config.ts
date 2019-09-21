export type MultiParamFieldType = {
  type: "multiParameter";
  label: string;
  command: string;
  options: { name: string; value: string }[];
};

export type ParamFieldType = {
  type: "setParameter" | "onOffParameter" | "getParameter";
  label: string;
  command: string;
};

export type FieldType = ParamFieldType | MultiParamFieldType;

export type FieldConfigType = {
  fields: {
    left: FieldType[];
    right: FieldType[];
  };
};

export const fieldConfig: FieldConfigType = {
  fields: {
    left: [
      {
        type: "setParameter",
        label: "Set Power",
        command: "set power"
      },
      {
        type: "onOffParameter",
        label: "4 channels",
        command: "four-channels"
      },
      {
        type: "getParameter",
        label: "Get Power",
        command: "get power measure"
      },
      {
        type: "multiParameter",
        label: "Configuration",
        command: "set parameters",
        options: [
          {
            name: "Option 1",
            value: "option1"
          },
          {
            name: "Option 2",
            value: "option2"
          },
          {
            name: "Option 3",
            value: "option3"
          }
        ]
      },
      {
        type: "setParameter",
        label: "Set Velocity",
        command: "set velocity"
      },
      {
        type: "onOffParameter",
        label: "Hardware acceleration",
        command: "h-acc"
      }
    ],
    right: [
      {
        type: "getParameter",
        label: "Speed measurement",
        command: "get speed"
      },
      {
        type: "multiParameter",
        label: "Enable acceleration axis",
        command: "set parameters",
        options: [
          {
            name: "x",
            value: "x"
          },
          {
            name: "y",
            value: "y"
          },
          {
            name: "z",
            value: "z"
          }
        ]
      }
    ]
  }
};
