import { Outlet } from "react-router-dom"
import SearchBar from "./SearchBar"
import SideBar from "./SideBar"

const MainPage = () => {

  return (
    <div className="w-full h-screen flex flex-col lg:flex-row justify-end items-center gap-4 lg:gap-0">
      <SideBar />
      <main className="flex-grow lg:h-full h-5/6 w-full">
        <SearchBar />
        <div className="w-full h-full lg:h-5/6 ">
          <Outlet />
        </div>
      </main>

    </div>
  )
}

export default MainPage