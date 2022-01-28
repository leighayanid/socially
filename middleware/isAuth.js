// middleware nuxt supabase
export default ({ $supabase, redirect }) => {
  if (!$supabase.auth.session()) {
    return redirect('/login')
  }
}
