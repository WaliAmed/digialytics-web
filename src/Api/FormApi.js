const FormApi = (data, setLoader) => {
  var myHeaders = new Headers();
  myHeaders.append("Content-Type", "application/json");

  var raw = JSON.stringify({
    name: data.name,
    email: data.email,
    phone_number: data.phone_number,
    message: data.message,
  });

  console.log(JSON.parse(raw));

  var requestOptions = {
    method: "POST",
    headers: myHeaders,
    body: raw,
    redirect: "follow",
  };

  fetch(process.env.REACT_APP_API_URL + "/form/create", requestOptions)
    .then((response) => response.text())
    .then((result) => {
      setLoader(false);
    })
    .catch((error) => console.log("error", error));
};

export default FormApi;
