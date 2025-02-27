export default ({ $auth, redirect }) => {
  if ($auth.user.role_user !== "mitra") {
    return redirect("/dashboard-mitra");
  }
};
