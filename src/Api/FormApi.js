import { toast } from "react-toastify";

const FormApi = (data, setLoader, setFormData, getError) => {
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

  fetch("http://latest.digitalytics.us" + "/api/contacts", requestOptions)
    .then((response) => response.json())
    .then((result) => {
      if (result.status) {
        toast.success("Message sent successfully!");
        setLoader(false);
        getError([{ field: "", message: "" }]);
        setFormData([
          {
            name: "",
            email: "",
            phone_number: "",
            message: "",
          },
        ]);
      } else {
        toast.error("Error!");
        setLoader(false);
      }
    })
    .catch((error) => {
      console.log("error", error);
      toast.error("Error!");
    });
};

export default FormApi;
