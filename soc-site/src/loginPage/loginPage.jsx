// import "./loginPage.css"
import Loggin from '../buttons/shesvla'
import Logo from '../logo/logo'
import Register from '../buttons/register'
import "../loginPage/loginPage.css"
import WreBlur from '../wreBlur/wreBlur'
import GeoGeInfo from '../GeoGeInfo/geoGeInfo'
import LoginValue from '../LoginValue/loginValue'


const LoginPage = ()=> {
  return(

    <>

    <section className='loginPageSectionTeg'>
        <nav className='loginPageNavTeg'>
          <div>
            <Logo/>
          </div>
        
          <div className='loginPageDivTeg2'>
             <Loggin/>
             <Register/>
          </div>
        
        </nav>
   
    </section>
     <WreBlur/>

     <div className='geoGeInfoDiv'>
        <GeoGeInfo/> 
        <LoginValue/>
     </div>
    
    </>
  )
}

export default LoginPage