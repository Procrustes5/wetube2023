export const see = (req, res) => res.render("watch");
export const edit = (req, res) => res.send("Edit Video");
export const trending = (req, res) => res.render("Home");
export const search = (req, res) => res.send("Search");
export const deleteVideo = (req, res) => res.send("Delete Video");
export const upload = (req, res) => res.send("Upload Video");
