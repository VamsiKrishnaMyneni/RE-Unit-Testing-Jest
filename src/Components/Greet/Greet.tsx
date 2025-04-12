import { GreetProps } from "./greet.types";

function Greet(props: GreetProps) {
    const { name } = props;
    return (
        <>
            <h4>The king in the north</h4>
            <h3> {name}</h3>
        </>
    )
}

export default Greet
