import { Outlet } from "react-router-dom"

const Wrapper = () => {
    return (
        <div className="mx-4 sm:mx-8 md:mx-16 lg:mx-24 xl:mx-96"><Outlet /></div>
    )
}
export default Wrapper