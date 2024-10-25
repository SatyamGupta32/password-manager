import React from "react";
import { useNavigate } from "react-router-dom";

const AdminDashboard = () => {
  const navigate = useNavigate();

  const handleLoginClick = () => {
    navigate("/adminlogin");
  };
  const handleLogoutClick = () => {
    navigate("/adminlogout");
  };

  return (
    <div className="min-h-screen  z-[-2] w-screen transform bg-white bg-[radial-gradient(60%_120%_at_50%_50%,hsla(0,0%,100%,0)_0,rgba(252,205,238,.5)_100%)]">
      <div className="p-8">
        <h1 className="text-3xl font-bold mb-4">New Dashboard</h1>
        <p className="mb-4">
          Welcome to the new dashboard page. This page contains different
          content compared to the previous dashboard page.
        </p>

        <section className="bg-pink-600 text-gray-800 p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-semibold mb-3">Recent Activities</h2>
          <ul className="list-disc pl-5">
            <li>Activity 1: Description of recent activity.</li>
            <li>Activity 2: Description of another recent activity.</li>
            <li>Activity 3: Description of yet another recent activity.</li>
          </ul>
        </section>

        <section className="bg-pink-400 text-gray-800 p-6 mt-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-semibold mb-3">Performance Metrics</h2>
          <p className="mb-4">
            Here you can view the performance metrics for the current period.
          </p>
          <div className="flex flex-col md:flex-row gap-4">
            <div className="bg-pink-100 p-4 rounded-lg flex-1">
              <h3 className="text-xl font-semibold mb-2">Metric 1</h3>
              <p>Details about Metric 1.</p>
            </div>
            <div className="bg-pink-100 p-4 rounded-lg flex-1">
              <h3 className="text-xl font-semibold mb-2">Metric 2</h3>
              <p>Details about Metric 2.</p>
            </div>
          </div>
        </section>

        {/* Login Button */}
        <div className="mt-8 flex gap-5 justify-center">
          <button
            onClick={handleLoginClick}
            className="bg-red-600 text-white py-2 px-4 rounded-lg hover:bg-red-700 transition duration-300"
          >
            Go to Login
          </button>
          <button
            onClick={handleLogoutClick}
            className="bg-red-600 text-white py-2 px-4 rounded-lg hover:bg-red-700 transition duration-300"
          >
            Logout
          </button>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
