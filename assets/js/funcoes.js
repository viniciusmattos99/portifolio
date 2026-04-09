function validaFormulario() {
  const email = document.getElementById("email").value.trim();
  const feedbackElement = document.getElementById("emailFeedback");
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (!emailRegex.test(email)) {
    feedbackElement.textContent = "Insira um email válido.";
    document.getElementById("email").focus();
    return false;
  } else {
    feedbackElement.textContent = "";
    enviaEmail();
    return true;
  }
}

function enviaEmail() {
  const form = document.getElementById("form");
  // const responseText = document.getElementById("response");

  form.addEventListener("submit", async (e) => {
    e.preventDefault();
    e.stopImmediatePropagation();

    const formData = new FormData(form);
    const data = Object.fromEntries(formData.entries());

    try {
      const res = await fetch(
        "https://portifolio-x43c.onrender.com/enviarEmail",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(data),
        }
      );

      const result = await res.json();
      alert(result.message);
      // responseText.textContent = result.message;
      e.target.reset();
    } catch (err) {
      alert("Erro ao enviar o e-mail.");
    }
  });
}

function scrollFunction() {
  let botaoBackToTop = document.getElementById("backBtn");

  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    botaoBackToTop.style.display = "flex";
  } else {
    botaoBackToTop.style.display = "none";
  }
}
