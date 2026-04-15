import { createClient } from '@supabase/supabase-js'

const supabaseUrl = "https://vnxlqsmgwtolmmzkihlp.supabase.co"
const supabaseKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InZueGxxc21nd3RvbG1temtpaGxwIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzYxOTY2NTAsImV4cCI6MjA5MTc3MjY1MH0.MX3vJ6-4yUsUbVv4j0bDA1rTLs8Nq0e2g3b7euun_gQ"

export const supabase = createClient(supabaseUrl, supabaseKey)