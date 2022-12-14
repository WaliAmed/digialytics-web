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

  fetch(
    "http://latest.digitalytics.us/api/send-news-letter-message",
    requestOptions
  )
    .then((response) => response.json())
    .then((result) => {
      if (result.status) {
        toast.success("Subscribed successfully!");
        setLoader(false);
        setNewsLetterBtnLoader("");
        setNewsLetterEmail("");
      } else {
        toast.error("Error!");
        setLoader(false);
      }
    })
    .catch((error) => console.log("error", error));
};

export default NewsLetterApi;
