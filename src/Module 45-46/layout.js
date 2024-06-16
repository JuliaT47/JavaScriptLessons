import { useSelector } from "react-redux";
import { NavLink, Outlet } from "react-router-dom";

const Layout = () => {
  const isFetching = useSelector((state) => state.users.loading);
  return (
    <>
      <header>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/contacts">Contact</NavLink>
        <NavLink to="/about">About</NavLink>
      </header>
      <main>
        <Outlet />
      </main>
    </>
  );
};
export default Layout;
