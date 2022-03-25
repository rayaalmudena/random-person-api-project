

document.querySelector("#btn").addEventListener("click", async function () {
    
    let response = await fetch("https://randomuser.me/api/");

    let persona = await response.json();

    document.querySelector(".card-img-top").src=persona.results[0].picture.large;
    document.querySelector("#first").textContent=persona.results[0].name.first;
    document.querySelector("#last").textContent=persona.results[0].name.last;
    document.querySelector("#country").textContent=persona.results[0].location.country;
    document.querySelector("#phone").textContent=persona.results[0].phone;
    document.querySelector("#email").textContent=persona.results[0].email;   

});
