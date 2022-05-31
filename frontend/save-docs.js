setInterval(save, 3000);

//async: lassan futó fgv,
async function save() {
  const textarea = document.querySelector("#doc-text");
  const docText = textarea.value;

  const saveText = document.querySelector("#save-in-progress-text");
  saveText.classList.remove("hidden");
  //await:akkor folytatódik az alatta lévő kódsor mikor befejeződött az adott művelet
  await fetch("http://127.0.0.1:9000/", {
    method: "POST",
    body: docText,
  });
  saveText.classList.add("hidden");
}
