import { Button } from "@chakra-ui/core";
import { Meta, StoryObj } from "@storybook/react";

const meta: Meta = {
    title: 'Charka/Button',
    component: Button,
    argTypes: {
        onClick: { action: 'clicked' }
    },
    tags: ['autodocs']
}

export default meta;

export const Success: StoryObj<typeof Button> = {
    args: {
        variantColor: 'green',
        children: 'Success'
    }
}
export const Danger: StoryObj<typeof Button> = {
    args: {
        variantColor: 'red',
        children: 'Danger'
    }
}