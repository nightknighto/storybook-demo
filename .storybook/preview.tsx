import type { Preview } from "@storybook/react";
import React from "react";
import Center from '../src/components/Center/Center'

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
  decorators: [
    (Story) => (
      <Center>
        <Story />
      </Center>
    ),
  ],
};

export default preview;
