import { Home } from "./components/home";
import { Event } from "./components/event";
import { Speakers } from "./components/speakers";
import { Reports } from "./components/reports";
import { Notifications } from "./components/notifications";
import { Messages } from "./components/messages";
import { Settings } from "./components/settings";
import { Collapse } from "./components/collapse";
import { Sidebar } from "./components/sidebar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div>
      <Router>
        <Sidebar>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/event" element={<Event />} />
            <Route path="/speakers" element={<Speakers />} />
            <Route path="/reports" element={<Reports />} />
            <Route path="/notifications" element={<Notifications />} />
            <Route path="/messages" element={<Messages />} />
            <Route path="/settings" element={<Settings />} />
            <Route path="/collapse" element={<Collapse />} />
          </Routes>
        </Sidebar>
      </Router>
    </div>
  );
}

export default App;
