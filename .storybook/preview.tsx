import type { Preview } from "@storybook/react";
import React from "react";
import Center from '../src/components/Center/Center'
import { CSSReset, theme, ThemeProvider } from "@chakra-ui/core";

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
    (Story) => (
      <ThemeProvider theme={theme}>
        <CSSReset />
        <Story />
      </ThemeProvider>
    )
  ]
};

export default preview;
