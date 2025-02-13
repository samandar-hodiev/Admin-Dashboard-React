import { Routes, Route } from "react-router";
import { AuthLayout } from "@mainLayout";
import { Error } from "@pages";

export const AuthRouter = () => {
  return (
    <Routes>
      <Route path="/login" element={<AuthLayout />} />
      <Route path="*" element={<Error />} />
    </Routes>
  )
}



