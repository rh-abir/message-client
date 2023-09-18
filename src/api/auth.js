export const saveUser = (user) => {
  const currentuser = {
    name: user.displayName,
    image: user.photoURL,
    email: user.email,
  };

//   console.log(user)

  fetch(`http://localhost:5000/users/${user?.email}`, {
    method: "PUT",
    headers: {
      "content-type": "application/json",
    },
    body: JSON.stringify(currentuser),
  })
    .then((res) => res.json())
    .then((data) => {
      console.log(data);
    });
};