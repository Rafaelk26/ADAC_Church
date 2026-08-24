import { createClient } from '@supabase/supabase-js'

const supabaseUrl = "https://vjmcafxkcrotcaxezusv.supabase.co"
const supabaseKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InZqbWNhZnhrY3JvdGNheGV6dXN2Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzcwNDY0NTEsImV4cCI6MjA5MjYyMjQ1MX0.-wqrwQQ8OC1yJI507v7Z0ReoDQl1yyAKibdM0izAu_Y"

export const supabase = createClient(supabaseUrl, supabaseKey)