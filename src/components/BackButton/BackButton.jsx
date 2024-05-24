import { Link } from "react-router-dom";
export const BackButton = ({ to, children }) => {
    return <Link to={to}>{ children}</Link>

}