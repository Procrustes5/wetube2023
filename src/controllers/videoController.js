export const see = (req, res) => res.render("watch", { pageTitle: "Watch" });
export const edit = (req, res) =>
  res.render("Edit Video", { pageTitle: "Edit Video" });
export const trending = (req, res) => res.render("Home", { pageTitle: "Home" });
export const search = (req, res) => res.send("Search");
export const deleteVideo = (req, res) => res.send("Delete Video");
export const upload = (req, res) => res.send("Upload Video");
