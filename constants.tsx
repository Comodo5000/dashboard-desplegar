
import React from 'react';

export const SIDEBAR_LINKS = [
    { path: '/', title: 'Dashboard', icon: <i className="fas fa-tachometer-alt"></i> },
    { path: '/calendar', title: 'Calendario', icon: <i className="fas fa-calendar-alt"></i> },
    { path: '/booking', title: 'Agendar Asesoría', icon: <i className="fas fa-calendar-check"></i> },
    { path: '/tasks', title: 'Tareas Pendientes', icon: <i className="fas fa-tasks"></i> },
    { path: '/teaching', title: 'Actividades Docentes', icon: <i className="fas fa-chalkboard-teacher"></i> },
    { path: '/admin', title: 'Gestión Administrativa', icon: <i className="fas fa-briefcase"></i> },
    { path: '/roadmap', title: 'Hoja de Ruta', icon: <i className="fas fa-road"></i> },
    { path: '/reports', title: 'Reportes y Análisis', icon: <i className="fas fa-chart-line"></i> },
    { path: '/settings', title: 'Configuración', icon: <i className="fas fa-cog"></i> },
];

export const TECNM_COLORS = {
    azul: '#002F6C',
    gris: '#63666A',
    azulClaro: '#0056b3',
    azulMuyClaro: '#e8f0ff',
    blanco: '#ffffff',
    grisClaro: '#f8f9fa',
    grisMedio: '#e9ecef',
    textoPrincipal: '#212529',
    textoSecundario: '#6c757d',
    exito: '#28a745',
    advertencia: '#ffc107',
    peligro: '#dc3545',
    info: '#17a2b8',
};

export const DARK_COLORS = {
    background: '#1a202c', // slate-800
    card: '#2d3748', // slate-700
    cardHover: '#4a5568', // slate-600
    border: '#4a5568', // slate-600
    textPrimary: '#f7fafc', // gray-100
    textSecondary: '#a0aec0', // gray-400
    azul: '#3b82f6' // blue-500
};