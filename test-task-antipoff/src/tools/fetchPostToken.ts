// use fake user {email: "eve.holt@reqres.in", password: "pistol",}

export const fetchPostToken=(email:string, password:string) => {
  const requestOptions = {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      email,
      password,
    }),
  };


  fetch("https://reqres.in/api/register", requestOptions)
    .then((res) => {
      if (res.status != 200) {
        alert(`Response status: ${res.status}`);
      } else return res.json();
    })
    .then((data) => console.log(data));
}
