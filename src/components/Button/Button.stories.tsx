import Button from "./Button";

export default {
    title: 'Form/Button',
    component: Button
}

export const Primary = () => <Button variant="primary">Primary</Button>
export const Secondary = () => <Button variant="secondary">Secondary</Button>
export const Success = () => <Button variant="success">Success</Button>
export function Danger() {
    return <Button variant="danger">Danger</Button>
}