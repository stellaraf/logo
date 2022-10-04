import { StellarLogo } from "./logo";

import type { StellarLogoProps } from "./types";
import type { Meta, Args, Story } from "@storybook/react";

export default {
  title: "Stellar Logo",
  component: StellarLogo,
  argTypes: {
    colorMode: {
      options: ["light", "dark"],
      mapping: { light: "light", dark: "dark" },
      control: { type: "select", labels: { light: "Light", dark: "Dark" } },
    },
  },
} as Meta<StellarLogoProps>;

const Template = (props: Args) => <StellarLogo {...props} />;

export const Logo = Template.bind({}) as Story<StellarLogoProps>;
