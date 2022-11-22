import { Route, Routes } from "react-router";

import HomeView from "@/views/Home/HomeView";
import AuthOutlet from "@/views/Auth/AuthOutlet";
import LoginView from "./views/Auth/Login/LoginView";
import { store } from "@/store/store";
import { Provider } from "react-redux";

import "./App.css";
import "@/common/i18n/i18n";
import ProfileView from "./views/Profile/ProfileView";
import DashboardStartView from "./views/Dashboard/DashboardStartView";
import DashboardOutlet from "./views/Dashboard/DashboardOutlet";

function App() {
  return (
    <Provider store={store}>
      <Routes>
        <Route path="/" element={<HomeView />} />
        <Route path="/auth" element={<AuthOutlet />}>
          <Route path="login" element={<LoginView />}></Route>
          <Route path="me/:username" element={<ProfileView />}></Route>
        </Route>
        <Route path="/dashboard" element={<DashboardOutlet />}>
          <Route path="start" element={<DashboardStartView />}></Route>
        </Route>
      </Routes>
    </Provider>
  );
}

export default App;
