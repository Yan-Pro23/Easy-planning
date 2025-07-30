import axios from 'axios';

import React from 'react';


const API_BASE_URL = 'http://localhost:8000/api'; // Change si nécessaire

export const fetchUpcomingPlanning = async () => {
  const response = await axios.get(`${API_BASE_URL}/planning/upcoming`);
  return response.data;
};

export const fetchTodayAbsences = async () => {
  const response = await axios.get(`${API_BASE_URL}/absences/today`);
  return response.data;
};

export const fetchPlanningConflicts = async () => {
  const response = await axios.get(`${API_BASE_URL}/conflicts`);
  return response.data;
};

export const fetchNotifications = async () => {
  const response = await axios.get(`${API_BASE_URL}/notifications`);
  return response.data;
};
