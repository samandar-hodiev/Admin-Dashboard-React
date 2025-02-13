import { AuthRouter, DashboardRouter } from "@router";


const App = () => {

  let isAuth = false;

  
  return (
    <>
       {
        isAuth ? <DashboardRouter /> : <AuthRouter />
       }
    </>
  )
}

export default App;







