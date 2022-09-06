import AppSideBar from "./AppSideBar.jsx";
import { CButton } from "@coreui/react";
import { AppHeader } from "./components/index";
import Content from "./Content";
import "./Admin.scss";
function DashBoard() {
  return (
    <div>
      {" "}
      <AppSideBar />{" "}
      <div className="wrapper d-flex flex-column min-vh-100 bg-light">
        <AppHeader />
        <div className="body flex-grow-1 px-03 container">
          {/* <AppContent /> */}
          <Content></Content>
        </div>
        {/* <AppFooter /> */}
      </div>
    </div>
  );
}

export default DashBoard;
