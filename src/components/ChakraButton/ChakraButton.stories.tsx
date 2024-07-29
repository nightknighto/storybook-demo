import { Button } from "@chakra-ui/core";

export default {
    title: 'Charka/Button',
    component: Button,
    argTypes: {
        onClick: { action: 'clicked' }
    }
}

const Template = args => <Button {...args} />

export const Success = Template.bind({})
Success.args = {
    variantColor: 'green',
    children: 'Success'
}
export const Danger = Template.bind({})
Danger.args = {
    variantColor: 'red',
    children: 'Danger'
}