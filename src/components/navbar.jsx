import { Routes, Route, Link} from "react-router-dom";

export default function navbar(){
    return (
<div id="navbar">
<Link to = "/red">Red</Link>
<Link to = "/blue">Blue</Link>
<Link to = "/home">Home </Link>
<Link to = "/yellow">Yellow </Link>    
<Link to = "/green">Green </Link>    

</div>
    )};