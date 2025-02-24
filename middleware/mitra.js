export default ({ $auth, redirect }) => {
  console.log($auth.user.role_user);
  if ($auth.user.role_user !== "mitra") {
    return redirect("/dashboard-mitra");
  }
};
