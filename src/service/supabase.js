import { createClient } from "@supabase/supabase-js";
export const supabaseUrl = "https://tkvpmhdlcyrungzegdkt.supabase.co";
export const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InRrdnBtaGRsY3lydW5nemVnZGt0Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDg0MjkzOTcsImV4cCI6MjAyNDAwNTM5N30.MqefCEYlgGQ-MQt26HzEqUqS0HLgTLEt5duCoBXbvh0";
const supabase = createClient(supabaseUrl, supabaseKey);
export default supabase;
