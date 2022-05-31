const googleSearchButton = document.querySelector("#btn-google-search");

googleSearchButton.addEventListener("click", function (event) {
  //default működés: formon belül egy gombra klikkelve elküldi a formot
  event.preventDefault();

  const form = document.querySelector("#form-google-search");

  const searchTerm = form.querySelector('input[name="q"]').value; //megkeressük a form-on belüli input field-et, aminek a neve q és annak vesszük a value-t vagyis az általunk begépelt kifejezést

  if (searchTerm === "") {
    alert("Írj már be valamit!!");
  } else {
    //a submit ugyanaz, mintha a submit button-ra clickelnénk
    form.submit();
  }
});
