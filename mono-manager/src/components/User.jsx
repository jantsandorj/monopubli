import { useUser } from "../hooks"
export const User = (props) => {

    const { getUser } = useUser()
    return <>{getUser()[props.name]}</>
}