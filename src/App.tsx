import './App.css';
import { ThemeProvider } from '@providers/theme-provider';
import { QueryClientProvider } from '@tanstack/react-query';
import { queryClient } from '@lib/query-client';
import { Router } from './router';
import ReactQueryDevtoolsProduction from '@hooks/rq/rq-dev-tools';
import { CacheKey } from '@common/constant';

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider defaultTheme="dark" storageKey={CacheKey.Theme}>
        <Router />
      </ThemeProvider>
      <ReactQueryDevtoolsProduction enabled={true} />
    </QueryClientProvider>
  );
}

export default App;
