import type { Meta, StoryObj, StoryFn } from "@storybook/react";
import Button from "./Button";

const meta: Meta<typeof Button> = {
    title: 'Form/Button',
    component: Button,
    args: {
        children: 'Default Button',
        variant: 'primary'
    },
    decorators: [story => <div style={{padding: "5px", border: "1px solid black"}}>{story()}</div>]
}

export default meta;

export const Primary: StoryFn<typeof Button> = () => <Button variant="primary">Primary</Button>
Primary.storyName = 'Primary Button'
export const Secondary: StoryFn<typeof Button> = () => <Button variant="secondary">Secondary</Button>
export const Success: StoryFn<typeof Button> = () => <Button variant="success">Success</Button>
export const Danger: StoryFn<typeof Button> = () => <Button variant="danger">Danger</Button>


export const Default: StoryObj<typeof meta> = {

}

export const PrimaryA: StoryObj<typeof meta> = {
    args: {
        variant: 'primary',
        children: 'Primary A'
    },
    name: 'Primary Button A'
}

export const LongPrimaryA: StoryObj<typeof meta> = {
    args: {
        ...PrimaryA.args,
        children: 'Long Primary A'
    }
}

export const SecondaryA: StoryObj<typeof meta> = {
    args: {
        variant: 'secondary',
        children: 'Secondary A'
    }
}
