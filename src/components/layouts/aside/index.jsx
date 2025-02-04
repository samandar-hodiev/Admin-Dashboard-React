import { Link, NavLink } from "react-router-dom";
import "./style.scss"
import { navigation } from "@mocks/navigation";


const index = () => {
    return (
        <aside className="bg-indigo-600 w-[16%] min-h-screen">
            <nav>
                <ul className="list px-[2px]">
                    {navigation?.length && navigation?.map((item) => {
                        return (
                            <li key={item?.id} >
                                <NavLink to={item.path} className="list-item">
                                    <span><i className={item?.icon}></i></span>
                                    {item?.name}
                                </NavLink>
                            </li>
                        )
                    })}
                </ul>

                <Link to="/login">
                    <button type="submit" className="absolute bottom-[120px] left-4 w-[120px] text-slate-200 bg-blue-800 hover:bg-blue-900 focus:ring-2 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm py-2">
                        Log out
                    </button>
                </Link>
            </nav>
        </aside>
    )
}

export default index;