import React from 'react';
import ReactDOM from 'react-dom/client';
import { ThemeProvider } from 'styled-components';
import { CssBaseline } from '@mui/material';
import { QueryClientProvider } from '@tanstack/react-query';
import { ErrorBoundary } from 'react-error-boundary';
import Router from './Router';
import reportWebVitals from './reportWebVitals';
import { getTheme } from './style';
import { initSettings } from './utils';
import { ErrorFallback, RequestsWrapper, SettingsWrapper } from './components/common';

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);

const { queryClient } = initSettings();

root.render(
  <React.StrictMode>
    <ErrorBoundary FallbackComponent={ErrorFallback}>
      <SettingsWrapper>
        <QueryClientProvider client={queryClient}>
          <RequestsWrapper>
            <ThemeProvider theme={getTheme('light')}>
              <Router />
              <CssBaseline />
            </ThemeProvider>
          </RequestsWrapper>
        </QueryClientProvider>
      </SettingsWrapper>
    </ErrorBoundary>
  </React.StrictMode>,
);

reportWebVitals();
