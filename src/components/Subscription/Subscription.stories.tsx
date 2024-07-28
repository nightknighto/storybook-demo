import { Primary, Success } from "../Button/Button.stories"
import { Large, Medium } from "../Input/Input.stories"

export default {
    title: "Form/Subscription"
}

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