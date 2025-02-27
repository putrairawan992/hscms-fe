export default ({ $auth, redirect }) => {
  if ($auth.user.role_user !== "jobprovider") {
    return redirect("/");
  }
};
