import { Routes, Route, Navigate } from "react-router-dom";
import { Suspense, lazy, useState } from "react";
import { useQuery } from "react-query";
import Login from "./Login";
import PrivateRoutes from "./PrivateRoutes";

const Home = lazy(() => import("./home"));
const About = lazy(() => import("./about"));
const Contacts = lazy(() => import("./contacts"));
const NotFound = lazy(() => import("./NotFound"));
const Layout = lazy(() => import("./layout"));
const SingleContact = lazy(() => import("./singleContact"));

function RouterDom() {
  const [loginUser, setLoginUser] = useState({ username: null, email: null });
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const { data, isFetching } = useQuery({
    queryFn: ["userList"],
    // queryFn: getAllUsers,
    refetchOnReconnect: false,
    refetchOnWindowFocus: false,
  });

  console.log({ data, loginUser });

  return (
    <>
      <main>
        <Suspense fallback={"Loading..."}>
          <Routes>
            <Route
              path="/"
              element={
                <Layout
                  isFetching={isFetching}
                  isAuthenticated={isAuthenticated}
                />
              }
            >
              <Route index element={<Home />} />
              <Route
                path="/login"
                element={<Login setLoginUser={setLoginUser} />}
              />
              <Route
                path="/contacts"
                element={
                  <PrivateRoutes isAuthenticated={isAuthenticated}>
                    <Contacts />
                  </PrivateRoutes>
                }
              />
              <Route
                path="/contacts/:id"
                element={
                  <PrivateRoutes isAuthenticated={isAuthenticated}>
                    <SingleContact />
                  </PrivateRoutes>
                }
              />
              <Route
                path="/about"
                element={
                  <PrivateRoutes isAuthenticated={isAuthenticated}>
                    <About />
                  </PrivateRoutes>
                }
              />
              <Route path="/404" element={<NotFound />} />
              <Route path="*" element={<Navigate to="/404" />} />
            </Route>
          </Routes>
        </Suspense>
      </main>
    </>
  );
}
export default RouterDom;
