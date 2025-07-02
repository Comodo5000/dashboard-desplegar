
import React, { useEffect } from 'react';
import { HashRouter, Routes, Route } from 'react-router-dom';
import { useSettingsStore } from './store/useSettingsStore';

import MainLayout from './components/layout/MainLayout';
import DashboardPage from './features/dashboard/DashboardPage';
import CalendarPage from './features/calendar/CalendarPage';
import TasksPage from './features/tasks/TasksPage';
import TeachingPage from './features/teaching/TeachingPage';
import AdminPage from './features/admin/AdminPage';
import RoadmapPage from './features/roadmap/RoadmapPage';
import ReportsPage from './features/reports/ReportsPage';
import SettingsPage from './features/settings/SettingsPage';
import BookingPage from './features/booking/BookingPage';


function App() {
  const theme = useSettingsStore(state => state.theme);

  useEffect(() => {
    const root = window.document.documentElement;
    root.classList.remove('light', 'dark');
    root.classList.add(theme);
  }, [theme]);

  return (
    <HashRouter>
      <Routes>
        <Route element={<MainLayout />}>
          <Route path="/" element={<DashboardPage />} />
          <Route path="/calendar" element={<CalendarPage />} />
          <Route path="/booking" element={<BookingPage />} />
          <Route path="/tasks" element={<TasksPage />} />
          <Route path="/teaching" element={<TeachingPage />} />
          <Route path="/admin" element={<AdminPage />} />
          <Route path="/roadmap" element={<RoadmapPage />} />
          <Route path="/reports" element={<ReportsPage />} />
          <Route path="/settings" element={<SettingsPage />} />
        </Route>
      </Routes>
    </HashRouter>
  );
}

export default App;