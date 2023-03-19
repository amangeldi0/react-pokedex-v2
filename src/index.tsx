import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { App } from 'app/App';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { ErrorBoundary } from 'shared/lib/providers/ErrorBoundary';
import { ThemeProvider } from 'shared/lib/providers/ThemeProvider';

const queryClient = new QueryClient({
    defaultOptions: {
        queries: {
            refetchOnWindowFocus: false,
        },
    },
});

const container = document.getElementById('root') as HTMLElement;
const root = createRoot(container);

root.render(
    <BrowserRouter>
        <ErrorBoundary>
            <ThemeProvider>
                <QueryClientProvider client={queryClient}>
                    <App />
                </QueryClientProvider>
            </ThemeProvider>
        </ErrorBoundary>
    </BrowserRouter>,
);
