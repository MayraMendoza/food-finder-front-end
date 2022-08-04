import React, { Fragment, useContext } from 'react';
import NavButton from './NavButton';
import { AuthContext } from '../Providers/AuthProviders';


const Navbar = (props) => {
  const [auth]= useContext(AuthContext);
  return (
    <Fragment>
      <div style={{
        backgroundColor: "#F1A734",
        position: 'fixed',
        width: '100%',
        zIndex: 9999,
        top: 0,
        left: 0,
        height: '75px',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between'
      }}>
        <h1 style={{
          fontFamily: "math",
          fontWeight: 'bold',
          fontSize: '2.5em',
          margin: "0 20px"
        }}>Restaurant Finder </h1>
        <div style={{
          margin: '0 20px',
          flexDirection: 'row',
          background: "transparent",
          userSelect: "none",
          alignItems: 'center',
        }}>
            {auth.id ?(
              <p style={{ frontweight: 'bold', color: 'white'}}>Hi {auth.name}!</p>
            ):null}
            <NavButton to="/" label='Home'/>
            {auth.id?(
              <Fragment>
                <NavButton to ="/profile" label='Profile'/>
                <NavButton to="/restaurants" label='Restaurants'/>
                <NavButton to="dishes" label='Dishes'/>

              </Fragment>

            ):(
              <NavButton to="/Login" label='Login'/>
            )}
            
            
            {/* <NavButton to="/test" label='Test'/> */}


        </div>
        </div>
      <div style={{height: '75px'}} />
    </Fragment>
  )
}

export default Navbar;