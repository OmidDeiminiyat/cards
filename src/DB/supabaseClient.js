// supabaseClient.js
import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://updnkehvxnsgbqrlkesk.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InVwZG5rZWh2eG5zZ2JxcmxrZXNrIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzA0NDc3ODIsImV4cCI6MjA0NjAyMzc4Mn0.1e1uLSBDsYkAaeDF9DB30UC9CtjRCBqNIbR3QLXQGeA';
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
