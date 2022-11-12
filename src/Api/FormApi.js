import { toast } from "react-toastify";

const FormApi = (data, setLoader, setFormData) => {
  var myHeaders = new Headers();
  myHeaders.append("Content-Type", "application/json");

  var raw = JSON.stringify({
    name: data.name,
    email: data.email,
    phone_number: data.phone_number,
    message: data.message,
  });

  var requestOptions = {
    method: "POST",
    headers: myHeaders,
    body: raw,
    redirect: "follow",
  };

  fetch(process.env.REACT_APP_API_URL + "/form/create", requestOptions)
    .then((response) => response.json())
    .then((result) => {
      console.log(result);

      if (result.message && result.message.errors) {
        toast.error("Error!");
        setLoader(false);
      } else if (result) {
        toast.success("Message sent successfully!");
        setLoader(false);
        setFormData([
          {
            name: "",
            email: "",
            phone_number: "",
            message: "",
          },
        ]);
      }
    })
    .catch((error) => {
      console.log("error", error);
      toast.error("Error!");
    });
};

export default FormApi;
