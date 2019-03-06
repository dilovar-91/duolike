export default function ({ store, redirect }) {
  // If the user is authenticated redirect to home
  if (!store.state.auth.logOut) {
    return redirect('/')
  }
}
