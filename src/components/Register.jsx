import {Link} from "react-router-dom"
function Register(){
    return (
<>
<div className="head">
    <input type="search" name="search" placeholder="Search Here" />
</div>
<div className="menu">
    <ul>
    <li><Link to='/home' style={{color:"white"}}>Home</Link><br/></li>
    <li><Link to='/user'style={{color:"white"}}>User</Link><br/></li>
    <li><Link to='/project'style={{color:"white"}}>Project</Link><br/></li>
    <li><Link to='/report'style={{color:"white"}}>Report</Link><br/></li>
    <li><Link to='/active'style={{color:"white"}}>Active</Link><br/></li>
    <li><Link to='/notification'style={{color:"white"}}>Notification</Link><br/></li>
    <li><Link to='/message'style={{color:"white"}}>Messenger</Link><br/></li>
    <li><Link to='/resources'style={{color:"white"}}>Resources</Link><br/></li>
    </ul>
   </div>
   <br />
   <div className="body">
    
    <fieldset>
        <h3>REGISTER NEW USER</h3>
    <label>Email</label>
            <br/>
            <input type="email" name='email' /><br/><br/>
            <label>Role</label>
            <br/>
            <input type="text" name='role' /><br/><br/>
            <label>UserName</label>
            <br/>
            <input type="text" name='username' /><br/><br/>
            <label>Password</label>
            <br/> 
            <input type="password" name='password' /><br/><br/>
            <input type="submit" name='Register'value='Register'/><br/>
    </fieldset>
    
   </div>
</>
    )
}
export default Register