import { GreetProps } from "./greet.types";

function Greet(props: GreetProps) {
    const { name } = props;
    return (
        <>
            <h2>Greet Component</h2>
            <h4>The king in the north</h4>
            <h3> {name ? name : 'stark'}</h3>
        </>
    )
}

export default Greet
