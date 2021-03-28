import { useEffect } from "react";

const Title = ({ text }) => {
    useEffect(() => {
        console.log("Montagem");
        return () => {
            console.log("Desmontagem");
        }
    }, []);

    return <h1>{text}</h1>
}

export default Title;