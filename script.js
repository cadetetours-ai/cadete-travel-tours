const whatsapp = "258823905132";

const tabs = document.querySelectorAll(".tab");
const serviceType = document.getElementById("serviceType");

tabs.forEach(tab => {
  tab.addEventListener("click", () => {
    tabs.forEach(t => t.classList.remove("active"));
    tab.classList.add("active");
    serviceType.value = tab.dataset.type;
  });
});

document.getElementById("bookingForm").addEventListener("submit", function(e){
  e.preventDefault();

  const typeNames = {
    hotel: "Reserva de Hotel",
    transfer: "Transfer",
    combo: "Hotel + Transfer",
    tour: "Tour / Pacote Turístico"
  };

  const type = typeNames[serviceType.value] || "Reserva";
  const destination = document.getElementById("destination").value;
  const arrival = document.getElementById("arrival").value;
  const departure = document.getElementById("departure").value || "Não informado";
  const people = document.getElementById("people").value;
  const name = document.getElementById("name").value;
  const phone = document.getElementById("phone").value;
  const email = document.getElementById("email").value || "Não informado";
  const notes = document.getElementById("notes").value || "Sem observações";

  const message =
`Olá Cadete Travel & Tours! 👋

Quero solicitar uma *${type}*.

👤 Nome: ${name}
📞 Telefone/WhatsApp: ${phone}
📧 E-mail: ${email}
📍 Destino: ${destination}
📅 Chegada: ${arrival}
📅 Saída: ${departure}
👥 Pessoas: ${people}
📝 Observações: ${notes}

Peço, por favor, a confirmação da disponibilidade e do preço.`;

  window.open(`https://wa.me/${whatsapp}?text=${encodeURIComponent(message)}`, "_blank");
});

document.getElementById("menuToggle").addEventListener("click", () => {
  const nav = document.getElementById("mainNav");
  const open = nav.style.display === "flex";
  nav.style.display = open ? "" : "flex";
  if (!open) {
    nav.style.position = "absolute";
    nav.style.top = "70px";
    nav.style.left = "0";
    nav.style.right = "0";
    nav.style.background = "#fff";
    nav.style.padding = "20px";
    nav.style.flexDirection = "column";
    nav.style.boxShadow = "0 10px 20px #0002";
  }
});

let english = false;
document.getElementById("langBtn").addEventListener("click", () => {
  english = !english;
  document.getElementById("langBtn").textContent = english ? "PT" : "EN";

  document.querySelectorAll("[data-pt]").forEach(el => {
    el.innerHTML = english ? el.dataset.en : el.dataset.pt;
  });
});

document.querySelectorAll('input[type="date"]').forEach(input => {
  input.addEventListener("change", () => {
    const arrival = document.getElementById("arrival").value;
    const departure = document.getElementById("departure").value;
    if (arrival && departure && departure < arrival) {
      alert("A data de saída não pode ser anterior à data de chegada.");
      input.value = "";
    }
  });
});
