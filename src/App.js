// import { Route, Routes } from "react-router-dom";
// import { mainRoutes } from "./routes/mainRoutes";
// import { Suspense } from "react";
import StudentsListPage from "./pages/studentsListPage/StudentsListPage";
import Header from "./components/header/Header";
import Subheader from "./components/subheader/Subheader";

function App() {
  return (
    <div className="container">
      <Header />
      <Subheader />
      <StudentsListPage />
    </div>
  );
}

export default App;
