import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://vjmcafxkcrotcaxezusv.supabase.co"
const supabaseServiceKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InZqbWNhZnhrY3JvdGNheGV6dXN2Iiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTc3NzA0NjQ1MSwiZXhwIjoyMDkyNjIyNDUxfQ.AqX9ClqiPgleC6crdas7FCK4IPLiCXhd7GTqsL0160w"

export const supabaseServer = createClient(supabaseUrl, supabaseServiceKey);