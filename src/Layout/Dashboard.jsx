import DashBoardNav from './../Components/DashBoardNav';
import { Outlet } from 'react-router-dom';

const Dashboard = () => {

  return (
    <div className="container mx-auto min-h-screen">
        <DashBoardNav></DashBoardNav>
        <Outlet></Outlet>
        
    </div>
  );
};

export default Dashboard;
