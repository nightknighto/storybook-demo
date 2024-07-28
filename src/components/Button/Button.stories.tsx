import Button from "./Button";

export default {
    title: 'Form/Button',
    component: Button,
    args: {
        children: 'Default Button',
        variant: 'primary'
    },
    decorators: [story => <div style={{padding: "5px", border: "1px solid black"}}>{story()}</div>]
}

export const Primary = () => <Button variant="primary">Primary</Button>
export const Secondary = () => <Button variant="secondary">Secondary</Button>
export const Success = () => <Button variant="success">Success</Button>
export const Danger = () => <Button variant="danger">Danger</Button>

const Template = args => <Button {...args} />;

export const Default = Template.bind({})

export const PrimaryA = Template.bind({});
PrimaryA.args = {
    variant: 'primary',
    children: 'Primary A'
}

export const LongPrimaryA = Template.bind({});
LongPrimaryA.args = {
    ...PrimaryA.args,
    children: 'Long Primary A'
}

export const SecondaryA = Template.bind({})
SecondaryA.args = {
    variant: 'secondary',
    children: 'Secondary A'
}
