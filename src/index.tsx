import { createRoot } from 'react-dom/client';
import { BrowserRouter } from "react-router-dom";
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ThemeProvider } from "shared/lib/providers/ThemeProvider";

import { App } from 'app/App';
import {ErrorBoundary} from "shared/lib/providers/ErrorBoundary";

const queryClient = new QueryClient({
    defaultOptions: {
        queries: {
            refetchOnWindowFocus: false,
        }
    }
});

const container = document.getElementById('root') as HTMLElement;
const root = createRoot(container);

root.render(
    <BrowserRouter>
        <ErrorBoundary>
            <ThemeProvider>
                <QueryClientProvider client={queryClient} >
                    <App />
                </QueryClientProvider>
            </ThemeProvider>
        </ErrorBoundary>
    </BrowserRouter>
)