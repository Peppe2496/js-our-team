// Questo è il file che contiene tutto il codice JS della pagina web



let ourTeam =
    [
        {
            name: "Wayne Barnett",

            role: "Founder & CEO",
            picture: "wayne-barnett-founder-ceo.jpg"
        },

        {
            name: "Angela Caroll",

            role: "Chief Editor",
            picture: "angela-caroll-chief-editor.jpg"
        },

        {
            name: "Walter Gordon",

            role: "Office Manager",
            picture: "walter-gordon-office-manager.jpg"
        },

        {
            name: "Angela Lopez",

            role: "Social Media Manager",
            picture: "angela-lopez-social-media-manager.jpg"
        },

        {
            name: "Scott Estrada",

            role: "Developer",
            picture: "scott-estrada-developer.jpg"
        },

        {
            name: "Barbara Ramos",

            role: "Graphic Designer",
            picture: "barbara-ramos-graphic-designer.jpg"
        }
    ];

console.log(ourTeam);

for (let i = 0; i < ourTeam.length; i++) {
    console.log("name:", ourTeam[i].name);

    console.log("role:", ourTeam[i].role);
    console.log("picture:", ourTeam[i].picture);
    console.log("");
}

for (let i = 0; i < ourTeam.length; i++) {

document.getElementById("team_cards").innerHTML+= `

        
<div class="col-4">
<div class="card">
  <img src="img/${ourTeam[i].picture}" alt="">
  <div class="card-body">
    <h5 class="card-title">${ourTeam[i].name}</h5>
    <p class="card-text">${ourTeam[i].role}</p>
    
  </div>
</div>

</div>
`
}


