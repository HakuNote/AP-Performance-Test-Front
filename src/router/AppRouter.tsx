import { BrowserRouter, Routes, Route } from 'react-router-dom';
import MainPage from '../pages/Main/MainPage';
import SpeedtestPage from '../pages/Speedtest/SpeedtestPage';
import Visualization from '../pages/Visualization/Visualization';

const AppRouter: React.FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/speed-test" element={<SpeedtestPage />} />
        <Route path="/visualization" element={<Visualization />} />
      </Routes>
    </BrowserRouter>
  );
};

export default AppRouter;
