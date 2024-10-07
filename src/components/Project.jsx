import {Link} from "react-router-dom"
import React ,{useState} from "react"
function Project(){
    const [open, setopen] =useState(false);
    return (
<>
<div className="head">
    <input type="search" name="search" placeholder="Search Here" />
</div>
<div className="menu">
    <ul>
    <li><Link to='/home' style={{color:"white"}}>Home</Link><br/></li>
    <li><Link to='/user'style={{color:"white"}}>User</Link><br/></li>
    <div className="menus" onClick={()=>{setopen(!open)}}>
     <li><Link to=''style={{color:"white"}}>Project</Link><br/></li>
     </div>
    <div className={`dropdown-menu ${open? 'active' : 'inactive'}`}>
     <li>add project</li>
     <li>view project</li>
     </div>
    <li><Link to='/report'style={{color:"white"}}>Report</Link><br/></li>
    <li><Link to='/active'style={{color:"white"}}>Active</Link><br/></li>
    <li><Link to='/notification'style={{color:"white"}}>Notification</Link><br/></li>
    <li><Link to='/message'style={{color:"white"}}>Messenger</Link><br/></li>
    <li><Link to='/resources'style={{color:"white"}}>Resources</Link><br/></li>
 
    </ul>
 
                
            
        
   </div>
   <br />
   <div className="body">
   
    <p>hello</p>
   </div>
</>
    )
}
function DropdowmItem(){
    return(
    <li className="DropdownItem">
        {/* <img src="={props.img}" alt="" /> */}
        <a>{props.text}</a> 
    </li>
    )
  
  }
export default Project