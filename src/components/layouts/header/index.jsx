import "./style.scss"
import { Container } from "@components/layouts";
import { AiOutlineDashboard } from "react-icons/ai";

const index = () => {
    return (
        <header className="bg-indigo-600">
            <Container className="container-fluid">
                <nav className="w-full h-[50px] flex justify-between items-center">
                    <a href="#" className="text-white font-bold flex items-center">
                        <AiOutlineDashboard className="text-2xl" />
                        <span className="ml-1">Dashboard</span>
                    </a>
                    <a href="#" className="text-white" >
                        Profile
                    </a>
                </nav>
            </Container>
        </header>
    )}

export default index;


