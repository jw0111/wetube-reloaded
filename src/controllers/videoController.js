export const trending = (req, res) => {
  const videos = [
    {
      title: "First Video",
      rating: 5,
      comments: 2,
      createdAt: "2 minutes ago",
      views: 59,
      id: 1,
    },
    {
      title: "Second Video",
      rating: 4,
      comments: 4,
      createdAt: "5 minutes ago",
      views: 21,
      id: 2,
    },
    {
      title: "Third Video",
      rating: 3,
      comments: 1,
      createdAt: "3 minutes ago",
      views: 33,
      id: 3,
    },
  ];
  res.render("home", { pageTitle: "Home", videos });
};
export const see = (req, res) => res.render("watch");
export const edit = (req, res) => res.render("edit");
export const search = (req, res) => res.send("Search");
export const upload = (req, res) => res.send("Upload");
export const deleteVideo = (req, res) =>
  res.send(`Delete Video : ${req.params.id}`);
