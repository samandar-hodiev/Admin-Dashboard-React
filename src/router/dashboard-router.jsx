import { Routes, Route } from "react-router";
import { Dashboard } from "@mainLayout";
import { Home, Leads, Orders, Users } from "@pages/index";


export const DashboardRouter = () => {
    return (
       <Routes>
         <Route path="/" element={<Dashboard />}>
            <Route path="/home" element={<Home />} />
            <Route path="/leads" element={<Leads />} />
            <Route path="/orders" element={<Orders />} />
            <Route path="/users" element={<Users />} />
        </Route>
       </Routes>
    )
}

