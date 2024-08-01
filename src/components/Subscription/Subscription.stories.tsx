import { Meta } from "@storybook/react"
import { Primary, Success } from "../Button/Button.stories"
import { Large, Medium } from "../Input/Input.stories"

const meta: Meta = {
    title: "Form/Subscription"
}

export default meta;

export function PrimarySubscription() {
    return (
        <>
            <Large />
            <Primary />
        </>
    )
}

export function SuccessSubscription() {
    return (
        <>
            <Medium />
            <Success />
        </>
    )
}
