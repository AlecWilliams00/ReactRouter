import { Routes, Route, Link} from "react-router-dom";



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