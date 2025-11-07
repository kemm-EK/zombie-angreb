const form = document.querySelector("#webform");

const summaryArticle = document.querySelector("#form-summary article");

function cancelPopup(event) {
  event.preventDefault();
  const firstInvalid = form.querySelector(":invalid");
  if (firstInvalid) firstInvalid.focus();
}

function handleSubmit(event) {
  event.preventDefault();

  // 1. Saml værdierne fra formularen
  const formData = new FormData(form);
  const street = formData.get("location-street");
  const number = formData.get("location-number");
  const fullAddress = `${street} ${number}`;
  const zipcode = formData.get("location_zipcode");
  const city = formData.get("location_city");
  const zipcodeCity = `${zipcode} ${city}`;
  const type = formData.get("zombie-type");
  const amount = formData.get("antal");
  const behaviors = formData.getAll("behavior").join(", ");
  const description = formData.get("beskrivelse");
  const fullName = formData.get("name");
  const email = formData.get("email");
  const area = formData.get("area-code");
  const phone = formData.get("telefon");
  const phoneFull = `${area} ${phone}`;

  // 2. Vis værdierne i opsummeringen

  summaryArticle.innerHTML = `
          <h3>Din indberetning</h3>
          <ul>
            <li><strong>Adresse:</strong> ${fullAddress}</li>
            <li><strong>By:</strong> ${zipcodeCity}</li>
            <li><strong>Type:</strong> ${type}</li>
            <li><strong>Antal:</strong> ${amount}</li>
            <li><strong>Adfærd:</strong> ${behaviors}</li>
            <li><strong>Beskrivelse:</strong> ${description}</li>
            <li><strong>Navn:</strong> ${fullName}</li>
            <li><strong>Email:</strong> ${email}</li>
            <li><strong>Telefon:</strong> ${phoneFull}</li>
          </ul>
        `;

  form.reset();
}

form.addEventListener("invalid", cancelPopup, true);
form.addEventListener("submit", handleSubmit);
