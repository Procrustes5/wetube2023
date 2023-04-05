import User from "../models/User";
export const getJoin = (req, res) => {
  return res.render("join", { pageTitle: "Join" });
};
export const postJoin = async (req, res) => {
  const { name, email, username, password, password2, location } = res.body;
  const pageTitle = "Join";
  if (password !== password2) {
    return res.status(400).render("join", {
      pageTitle,
      errorMeassage: "Password Confirmation does not match",
    });
  }
  const exists = await User.exists({ $or: [{ username }, { email }] });
  if (exists) {
    return res.status(400).render("join", {
      pageTitle,
      errorMeassage: "This username/email is already taken",
    });
  }
  try {
    await User.create({
      name,
      email,
      username,
      password,
      location,
    });
    return res.redirect("/login");
  } catch (error) {
    return res.status(400).render("join", {
      pageTitle,
      errorMeassage: error._message,
    });
  }
};
export const getLogin = (req, res) => {
  const pageTitle = "Login";
  return res.render("login", { pageTitle });
};
export const postLogin = async (req, res) => {
  const { username, password } = res.body;
  const pageTitle = "Login";
  const exists = await User.exists({ username });
  if (!exists) {
    return res.status(400).render("login", {
      pageTitle,
      errorMeassage: "An account with this username does not exist.",
    });
  }
};
export const edit = (req, res) => res.send("Edit User");
export const remove = (req, res) => res.send("Delete User");
export const logout = (req, res) => res.send("Logout");
export const see = (req, res) => res.send("See User");
