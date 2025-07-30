import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import * as api from '../api';
import Dashboard from '../../pages/Dashboard';

jest.mock('../api', () => ({
  fetchUpcomingPlanning: jest.fn(),
  fetchTodayAbsences: jest.fn(),
  fetchPlanningConflicts: jest.fn(),
  fetchNotifications: jest.fn(),
}));

test('affiche planning avec données mockées', async () => {
  api.fetchUpcomingPlanning.mockResolvedValue({
    service: 'Service A',
    horaires: '9h-17h',
    equipe: 'Equipe 1',
    disponible: true,
  });
  
  // mocks des autres fonctions API si besoin...
  
  
  render(<Dashboard/>);
  
  await waitFor(() => screen.getByText(/planning à venir/i));
  expect(screen.getByText(/Service A/i)).toBeInTheDocument();
});



//npm test -- api/api/__tests__/api_test.test.js
 api.fetchTodayAbsences.mockResolvedValue([]);
  api.fetchPlanningConflicts.mockResolvedValue([]);
  api.fetchNotifications.mockResolvedValue([]);