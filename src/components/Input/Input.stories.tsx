import Input from "./Input";

export default {
    title: 'Input',
    component: Input
}

export const Small = () => <Input size="sm" placeholder="Small size" />
export const Medium = () => <Input size="md" placeholder="Medium size" />
export const Large = () => <Input size="lg" placeholder="Large size" />