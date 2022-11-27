import ReactDOM from 'react-dom/client';
import App from './App';
import { QueryClientProvider } from 'react-query'
import { queryClient } from './services/api'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <QueryClientProvider client={queryClient}>
    <App />
  </QueryClientProvider>
);
