import { Meta, StoryFn } from "@storybook/react";
import Input from "./Input";

const meta: Meta<typeof Input> = {
    title: 'Form/control/Input',
    component: Input
}

export default meta;

export const Small: StoryFn<typeof Input> = () => <Input size="sm" placeholder="Small size" />
export const Medium: StoryFn<typeof Input> = () => <Input size="md" placeholder="Medium size" />
export const Large: StoryFn<typeof Input> = () => <Input size="lg" placeholder="Large size" />

Small.storyName = "Small Input"