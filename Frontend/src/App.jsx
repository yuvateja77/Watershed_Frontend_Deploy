import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Layout from "./components/home/Layout";
import Home from "./components/pages/Home";
import Hydrology from "./components/pages/Hydrology";
import Forecast from './components/pages/Forecast';
import MississippiRiver from "./components/pages/MississippiRiver";
import WaterDemand from "./components/pages/WaterDemand";
import ClimateIndices from "./components/pages/ClimateIndices";
import UAVImaging from "./components/pages/UAVImaging";
import Instrumentation from "./components/pages/Instrumentation";
import WaterQuality from "./components/pages/WaterQuality";
import OutreachEducation from "./components/pages/OutreachEducation";

// Define routes configuration
const routes = [
  { path: "/", element: <Home /> },
  { path: "/home", element: <Home /> },
  { path: "/Hydrology", element: <Hydrology /> },
  { path: "/Forecast", element: <Forecast /> },
  { path: "/MississippiRiver", element: <MississippiRiver /> },
  { path: "/WaterDemand", element: <WaterDemand /> },
  { path: "/ClimateIndices", element: <ClimateIndices /> },
  { path: "/UAVImaging", element: <UAVImaging /> },
  { path: "/Instrumentation", element: <Instrumentation /> },
  { path: "/WaterQuality", element: <WaterQuality /> },
  { path: "/OutreachEducation", element: <OutreachEducation /> },
];

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-50">
        <Layout>
          <Routes>
            {routes.map(({ path, element }) => (
              <Route key={path} path={path} element={element} />
            ))}
            {/* Redirect any unmatched routes to home */}
            <Route path="*" element={<Navigate to="/home" replace />} />
          </Routes>
        </Layout>
      </div>
    </Router>
  );
}

export default App;