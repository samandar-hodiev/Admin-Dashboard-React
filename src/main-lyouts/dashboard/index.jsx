import { Outlet } from "react-router";
import "./style.scss";
import { Header, Sections, Aside, Footer } from "@components/layouts";


const index = () => {
    return (
        <>
            <Header />
            <Sections className="flex">
                <Aside />
                <Sections className="p-2">
                    <div className="w-[calc(100vw_-_270px)] routing rounded-md border border-indigo-400 border-dashed p-4">
                        <Outlet />
                    </div>
                </Sections>
            </Sections>
            <Footer />
        </>
    )
}

export default index;

