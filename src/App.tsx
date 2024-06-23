import { CacheKey } from '@common/constant';
import { ModeToggle } from '@components/ModeToggle';
import { reactQueryDebugging } from '@config/env';
import ReactQueryDevtoolsProduction from '@hooks/rq/rq-dev-tools';
import { queryClient } from '@lib/query-client';
import { ThemeProvider } from '@providers/theme-provider';
import { QueryClientProvider } from '@tanstack/react-query';

import { Router } from './router';

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider defaultTheme="dark" storageKey={CacheKey.Theme}>
        <Router />
        <ModeToggle />
      </ThemeProvider>
      <ReactQueryDevtoolsProduction enabled={reactQueryDebugging} />
    </QueryClientProvider>
  );
}

export default App;
