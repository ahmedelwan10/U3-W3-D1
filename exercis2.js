class Pet {
    constructor(petName, ownerName, species, breed) {
        this.petName = petName;
        this.ownerName = ownerName;
        this.species = species;
        this.breed = breed;
    }

    hasSameOwner(otherPet) {
        return this.ownerName === otherPet.ownerName;
    }
}

const petForm = document.getElementById("petForm");
const petList = document.getElementById("petList");

petForm.addEventListener("submit", function (e) {
    e.preventDefault();

    const petName = document.getElementById("petName").value;
    const ownerName = document.getElementById("ownerName").value;
    const species = document.getElementById("species").value;
    const breed = document.getElementById("breed").value;

    const newPet = new Pet(petName, ownerName, species, breed);

    
    const listItem = document.createElement("li");
    listItem.textContent = `Pet Name: ${newPet.petName}, Owner Name: ${newPet.ownerName}, Species: ${newPet.species}, Breed: ${newPet.breed}`;
    petList.appendChild(listItem);

  
    petForm.reset();
});
