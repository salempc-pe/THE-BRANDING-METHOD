import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Layout } from './components/Layout';
import { Home } from './pages/Home';
import { Driver } from './pages/Driver';
import { Tool } from './pages/Tool';
import { ToolMap } from './pages/ToolMap';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="driver/:id" element={<Driver />} />
          <Route path="driver/:driverId/tool/:toolId" element={<Tool />} />
          <Route path="map" element={<ToolMap />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
