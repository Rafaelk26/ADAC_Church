import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://vnxlqsmgwtolmmzkihlp.supabase.co"
const supabaseServiceKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InZueGxxc21nd3RvbG1temtpaGxwIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTc3NjE5NjY1MCwiZXhwIjoyMDkxNzcyNjUwfQ.3HcNSNWyqfOoADhBnG4lMZkiApUtGPpChCfzqiL-tdA"

export const supabaseServer = createClient(supabaseUrl, supabaseServiceKey);