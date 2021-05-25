let activeProjectDesc;

const shopMasterbtn = document.querySelector("#shopmaster-button");
const adressbookbtn = document.querySelector("#adressbook-button");
const hackerrankbtn = document.querySelector("#hackerrank-button");

function showProject(projectName) {
  const description = document.querySelector(`#${projectName}`);

  description.style.display = "block";

  if (activeProjectDesc) {
    activeProjectDesc.style.display = 'none';
  }

  activeProjectDesc = description;
}

shopMasterbtn.addEventListener("click", function () {
  showProject("shopmaster-description");
});

adressbookbtn.addEventListener("click", function () {
  showProject("adressbook-description");
});

hackerrankbtn.addEventListener("click", function () {
  showProject("hackerrank-description");
});
