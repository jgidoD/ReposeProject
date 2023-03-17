export const Admin = () => {
    return (
        <div class="container-admin">
        <div class="grid-part logo-part">
          <div class="logo-card">
          <div class="logo"></div>
        </div>
      <div class="footer">
          {/* <h3>Leave Management</h3> */}
      </div>
        </div>
        
        
  
        
  
        <div class="grid-part login-form">
            <h1 id="admin-text">ADMIN</h1>
          <h1>Account Login</h1>
          <form>
            <input type="username" placeholder="Username"></input>
            <br/>
            <input type="password" placeholder="Password"></input>
            </form>
          <button id="login-btn">LOGIN</button>
  
        </div>
      </div>
      
    )
}