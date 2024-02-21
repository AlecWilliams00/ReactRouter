import { Routes, Route, Link} from "react-router-dom";
import Blue from './blue'
import Red from './red'
import Home from './home'
import Yellow from './yellow'
import Green from './green'


export default function mainsection(){
    return(
<div id="main-section">
   <Routes>
     <Route path= "/blue" element={<Blue/>} />
     <Route path= "/red" element={<Red/>} />
     <Route path= "/home" element={<Home/>}/>
     <Route path= "/green" element={<Green/>}/>
     <Route path= "/yellow" element={<Yellow/>}/>


   </Routes>
</div>
)};