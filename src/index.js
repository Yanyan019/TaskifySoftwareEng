import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { createClient } from '@supabase/supabase-js';
import {SessionContextProvider} from '@supabase/auth-helpers-react';

const supabase = createClient(
  "https://pnlbywjhmadogzygtydn.supabase.co",
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InBubGJ5d2pobWFkb2d6eWd0eWRuIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTM0MzY3MTgsImV4cCI6MjAyOTAxMjcxOH0.5SOT2cQPJ5qIDbu6PTjgCNedmu2FSo9-G3ZYdlYTrCk"
);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <SessionContextProvider supabaseClient={supabase}>
    <App />
    </SessionContextProvider>
  </React.StrictMode>
);
