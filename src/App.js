import { Fragment, React } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { publicRoutes } from "./router";
import DefaultLayout from "./layouts/DefaultLayout";

function App() {
  console.log("%cHello! 🙋‍♀️", "color: #0991B2;font-size: 24px;font-weight: 600;");
  console.log("%cTrang web này là trang cá nhân của KitoMC. Được viết bằng ReactJS,  Tailwind và một chút SCSS. \nCác Api được sửa đụng: Github, Lanyard, Open Weather Map.", "color: #0991B2;font-size: 14px;");

  return (
    <Router>
      <Routes>
        {publicRoutes.map((route, index) => {
          const Page = route.component;
          let Layout = DefaultLayout;

          if (route.layout) {
            Layout = route.layout;
          } else if (route.layout === null) {
            Layout = Fragment;
          }

          return (
            <Route
              key={index}
              path={route.path}
              element={
                <Layout>
                  <Page />
                </Layout>
              }
            />
          );
        })}
      </Routes>
    </Router>
  );
}

export default App;
