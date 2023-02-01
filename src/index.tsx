import { createRoot } from 'react-dom/client';
import {BrowserRouter} from "react-router-dom";
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import {ThemeProvider} from "shared/lib/providers/ThemeProvider";

import { App } from 'app/App';

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
        <ThemeProvider>
            <QueryClientProvider client={queryClient} >
                <App />
            </QueryClientProvider>
        </ThemeProvider>
    </BrowserRouter>
)