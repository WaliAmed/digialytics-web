import { toast } from "react-toastify";

const NewsLetterApi = (
  email,
  setLoader,
  setNewsLetterBtnLoader,
  setNewsLetterEmail
) => {
  var myHeaders = new Headers();
  myHeaders.append("Content-Type", "application/json");

  var raw = JSON.stringify({
    email: email,
  });

  var requestOptions = {
    method: "POST",
    headers: myHeaders,
    body: raw,
    redirect: "follow",
  };

  fetch(process.env.REACT_APP_API_URL + "/newsLetter/send", requestOptions)
    .then((response) => response.json())
    .then((result) => {
      console.log(result);

      if (result.message && result.message.errors) {
        toast.error("Error!");
        setLoader(false);
      } else if (result) {
        toast.success("Subscribed successfully!");
        setLoader(false);
        setNewsLetterBtnLoader("");
        setNewsLetterEmail("");
      }
    })
    .catch((error) => console.log("error", error));
};

export default NewsLetterApi;
