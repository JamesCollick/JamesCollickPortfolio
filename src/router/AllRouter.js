import { Routes, Route, Navigate } from 'react-router-dom';
import HomeFour from '../views/all-home-version/HomeFour';
import NotFound from '../views/NotFound';

const AllRouter = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Navigate to="/home-four" replace />} />
        <Route path="/home-four" element={<HomeFour />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
};

export default AllRouter;
