(function () {
  emailjs.init("bNacMp_PjRfua-vwO");
  console.log("hello friend");
})();

const SERVICEID = "service_xa5ak2j";
const TEMPLATEID = "template_6k62cpp";
const send = document.querySelector(".submit");
console.log(send);

send.addEventListener("click", (e) => {
  e.preventDefault();
  const params = {
    name: document.getElementById("name").value,
    email: document.getElementById("email").value,
    message: document.getElementById("message").value,
  };
  console.log(params);
  emailjs
    .send(SERVICEID, TEMPLATEID, params)
    .then((res) => {
      (document.getElementById("name").value = ""),
        (document.getElementById("email").value = ""),
        (document.getElementById("message").value = ""),
        console.log(res);
      //   toastActive();
    })
    .catch((err) => {
      console.log(err);
    });
});
