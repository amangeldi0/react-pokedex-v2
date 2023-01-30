import { createRoot } from 'react-dom/client';
import {BrowserRouter} from "react-router-dom";
import {ThemeProvider} from "./Theme/ThemeContext/ThemeProvider";

import { App } from './app/App';


const container = document.getElementById('root') as HTMLElement;
const root = createRoot(container);

root.render(
    <BrowserRouter>
        <ThemeProvider>
            <App />
        </ThemeProvider>
    </BrowserRouter>
)