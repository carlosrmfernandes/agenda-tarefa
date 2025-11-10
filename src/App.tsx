import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import Tasks from "./pages/Tasks";
import Users from "./pages/Users";
import NotFound from "./pages/NotFound";

const App = () => (
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/tasks" element={<Tasks />} />
          <Route path="/users" element={<Users />} />          
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
);

export default App;
