import { Routes, Route, Navigate } from "react-router-dom";
import { Suspense, lazy, useContext, useState } from "react";
import { useQuery } from "react-query";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import Login from "./Login";
import PrivateRoutes from "./PrivateRoutes";
import AuthContext from "./authContext";

axios.defaults.baseURL = "http://localhost:3030/";

const Home = lazy(() => import("./home"));
const About = lazy(() => import("./about"));
const Contacts = lazy(() => import("./contacts"));
const NotFound = lazy(() => import("./NotFound"));
const Layout = lazy(() => import("./layout"));
const SingleContact = lazy(() => import("./singleContact"));

const RouterDom = () => {
  const navigate = useNavigate();
  const [loginUser, setLoginUser] = useState({ username: null, email: null });
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  // const { isAuthenticated, setIsAuthenticated} =
  //   useContext(AuthContext);

  const { data, isFetching } = useQuery({
    queryKey: ["userList"],
    queryFn: () => axios.get("/auth").then((res) => res.data),
    refetchOnReconnect: false,
    refetchOnWindowFocus: false,
  });

  useEffect(() => {
    const handleError = (error) => {
      navigate("/errorPage");
    };
  }, [navigate]);

  return (
    <>
      <main>
        <AuthContext.Provider value={{ isAuthenticated, setIsAuthenticated }}>
          <Suspense fallback={"Loading..."}>
            <Routes>
              <Route path="/" element={<Layout />}>
                <Route index element={<Home />} />
                <Route
                  path="/login"
                  element={<Login setLoginUser={setLoginUser} />}
                />
                <Route
                  path="/contacts"
                  element={
                    <PrivateRoutes>
                      <Contacts />
                    </PrivateRoutes>
                  }
                />
                <Route
                  path="/contacts/:id"
                  element={
                    <PrivateRoutes>
                      <SingleContact />
                    </PrivateRoutes>
                  }
                />
                <Route
                  path="/about"
                  element={
                    <PrivateRoutes>
                      <About />
                    </PrivateRoutes>
                  }
                />
                <Route path="/404" element={<NotFound />} />
                <Route path="*" element={<Navigate to="/404" />} />
              </Route>
            </Routes>
          </Suspense>
        </AuthContext.Provider>
      </main>
    </>
  );
};

export default RouterDom;
