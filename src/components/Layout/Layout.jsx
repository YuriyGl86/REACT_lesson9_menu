import { Outlet } from "react-router-dom"
import { Menu } from "../Menu"

export  function Layout() {
  return (
    <div>
        <Menu/>
        <div className="page">
          <Outlet/>
        </div>
      </div>
  )
}
