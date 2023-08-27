import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';
import { AppContextProvider } from "./ContextGlobal";
import { QueryClientProvider, QueryClient } from '@tanstack/react-query';

const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById("root")).render(
  <AppContextProvider>
    <QueryClientProvider client={queryClient}>
        <App />
    </QueryClientProvider>
  
  </AppContextProvider>
);
