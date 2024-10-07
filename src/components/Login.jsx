
function Login(){
    return(
        <>
        <center>
        <div className="header">
                <h1>Welcome To ERP Management</h1>
            </div>

       
        <div className='left'><br/><br/><br/>
            <h3>ERP Management System</h3>
<p>The Project Management ERP system is designed for organizations managing large-scale, long-term projects</p>
        </div>
        <div className='right'>
            <h2>Login Here</h2>
            <label>UserName</label>
            <br/>
            <input type="text" name='username' /><br/><br/>
            <label>Password</label>
            <br/> 
            <input type="password" name='password' /><br/><br/>
            <input type="submit" name='Login' /><br/>
        </div>
        <div className="footer">
            <p>&copy; Techinika Limited</p>
        </div>
        </center>
        </>
    )
}
export default Login