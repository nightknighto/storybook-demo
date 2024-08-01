import type { Meta, StoryObj } from "@storybook/react";
import Light from "./Light";

const meta: Meta<typeof Light> = {
    component: Light,
    title: 'Light',
    tags: ['autodocs']
}

export default meta;

export const Base: StoryObj<typeof meta> = {
    args: {

    }
}

export const Red: StoryObj<typeof meta> = {
    args: {
        variant: 'red'
    }
}

export const Yellow: StoryObj<typeof meta> = {
    args: {
        variant: 'yellow'
    }
}

export const Grouped: StoryObj<typeof meta> = {
    render: () => (
        <div>
            <Light variant="red" />
            <Light variant="yellow" />
            <Light variant="green" />
        </div>

    )
}