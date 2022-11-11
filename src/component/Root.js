import { Link, Outlet } from 'react-router-dom'
const Root = () => {
  return <div style={{ display: 'flex', flexDirection: 'column', width: '100vw' }}>
    {
      //<nav>
      //   <Link to="/" >Home</Link>
      //   <Link to="/survay-builder/e9129f18-9c26-433f-b5c3-7cfa41952241" >Survay-builder</Link>
      // </nav>
      // 
    }
    <Outlet />
  </div>
}

export default Root
