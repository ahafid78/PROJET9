

function Login(event) {
  // Evite d'avoir une actualisation de la page lors du click sur le button
  event.preventDefault();

  // On récupére les valeurs des inputs
  var nom = document.getElementById("nom").value;
  var mail = document.getElementById("mail").value;
  var password = document.getElementById("password").value;
 
  
  

  // On test si la récupération marche
  console.log(nom,mail,password);

  var contenuHTML =document.getElementById("prophil");
  
  // On change l'HTML intérieur de la section par la carte du produit
  contenuHTML.innerHTML += `
    <div class="carte">    
    <h1>${nom}</h1>
    <h1>${mail} </h1>
    
    </div>
  `;
    
}


var listProduits = [
    {
      titre: "titre",
      auteur:"Auteur",
      publication:"12/1/2022",
      note:1,
      description:"Genres",
      prix:100,
      image: "images/Absolu-T1.jpg",
    },
    {
        titre: "titre",
        auteur:"Auteur",
        publication:"1/10/2021",
        note:1,
        description:"Genres",
        prix:200,
        image: "images/Atlas-L-histoire-de-Pa-Salt.jpg",
      },
      {
        titre: "titre",
        auteur:"Auteur",
        publication:"12/11/2017",
        note:1,
        description:"Genres",
        prix:300,
        image: "images/A-tout-jamais.jpg",
      },
      {
        titre: "titre",
        auteur:"Auteur",
        publication:"1/10/2016",
        note:2,
        description:"Genres",
        prix:400,
        image: "images/Captive.jpg",
      },
      {
        titre: "titre",
        auteur:"Auteur",
        publication:"3/11/2022",
        note:2,
        description:"Genres",
        prix:500,
        image: "images/Connaiance-illimitee.jpg",
      },
      {
        titre: "titre",
        auteur:"Auteur",
        publication:"22/1/2019",
        note:3,
        description:"Genres",
        prix:600,
        image: "images/humour.jpeg",
      },
      {
        titre: "titre",
        auteur:"Auteur",
        publication:"5/1/2015",
        note:3,
        description:"Genres",
        prix:700,
        image: "images/Inheritance-Games.jpg",
      },
      {
        titre: "titre",
        auteur:"Auteur",
        publication:"12/11/2022",
        note:3,
        description:"Genres",
        prix:720,
        image: "images/La-saga-d-auren.jpg",
      },
      {
        titre: "titre",
        auteur:"Auteur",
        publication:"10/1/2021",
        note:3,
        description:"Genres",
        prix:750,
        image: "images/Le-Silence-et-la-Colere.jpg",
      },
      {
        titre: "titre",
        auteur:"Auteur",
        publication:"12/7/2019",
        note:3,
        description:"Genres",
        prix:"Prix",
        image: "images/Le-temps-des-feminismes.jpg",
      },
      {
        titre: "titre",
        auteur:"Auteur",
        publication:"9/7/2022",
        note:4,
        description:"Genres",
        prix:800,
        image: "images/Mon-programme.jpg",
      },

    {
      titre: "titre",
      auteur:"Auteur",
      publication:"1/1/2021",
      note:7,
      description:"Genres",
      prix:900,
      image: "images/Petit-Pays.jpg",
    },
    {
        titre: "titre",
        auteur:"Auteur",
        publication:"22/5/2022",
        note:3,
        description:"Genres",
        prix:1000,
        image: "images/Reuite-Concours.jpg",
      },
      {
        titre: "titre",
        auteur:"Auteur",
        publication:"12/1/2022",
        note:7,
        description:"Genres",
        prix:2000,
        image: "images/humour.jpeg",
      },
      {
        titre: "titre",
        auteur:"Auteur",
        publication:"12/1/2016",
        note:9,
        description:"Genres",
        prix:3000,
        image: "images/paris.jpg",
      },
      {
        titre: "titre",
        auteur:"Auteur",
        publication:"1/1/2017",
        note:2,
        description:"Genres",
        prix:4000,
        image: "images/sixtinewebp.jpg",
      },
      {
        titre: "titre",
        auteur:"Auteur",
        publication:"12/1/2016",
        note:11,
        description:"Genres",
        prix:5000,
        image: "images/La-saga-d-auren.jpg",
      },
      {
        titre: "titre",
        auteur:"Auteur",
        publication:"12/1/2012",
        note:12,
        description:"Genres",
        prix:6000,
        image: "images/paris.jpg",
      },
      {
        titre: "titre",
        auteur:"Auteur",
        publication:"12/1/2014",
        note:13,
        description:"Genres",
        prix:7000,
        image: "images/Connaiance-illimitee.jpg",
      },
      {
        titre: "titre",
        auteur:"Auteur",
        publication:"12/1/2018",
        note:14,
        description:"Genres",
        prix:8000,
        image: "images/Le-temps-des-feminismes.jpg",
      },
      {
        titre: "titre",
        auteur:"Auteur",
        publication:"12/1/2012",
        note:15,
        description:"Genres",
        prix:9000,
        image: "images/Atlas-L-histoire-de-Pa-Salt.jpg",
      },
      {
        titre: "titre",
        auteur:"Auteur",
        publication:"12/1/2019",
        note:16,
        description:"Genres",
        prix:10000,
        image: "images/A-tout-jamais.jpg",
      },
      {
        titre: "titre",
        auteur:"Auteur",
        publication:"1/10/2021",
        note:1,
        description:"Genres",
        prix:200,
        image: "images/Atlas-L-histoire-de-Pa-Salt.jpg",
      },
      {
        titre: "titre",
        auteur:"Auteur",
        publication:"12/11/2017",
        note:1,
        description:"Genres",
        prix:300,
        image: "images/A-tout-jamais.jpg",
      },
      {
        titre: "titre",
        auteur:"Auteur",
        publication:"1/10/2016",
        note:2,
        description:"Genres",
        prix:400,
        image: "images/Captive.jpg",
      },
      {
        titre: "titre",
        auteur:"Auteur",
        publication:"3/11/2022",
        note:2,
        description:"Genres",
        prix:500,
        image: "images/Connaiance-illimitee.jpg",
      },
      {
        titre: "titre",
        auteur:"Auteur",
        publication:"22/1/2019",
        note:3,
        description:"Genres",
        prix:600,
        image: "images/humour.jpeg",
      },
      {
        titre: "titre",
        auteur:"Auteur",
        publication:"5/1/2015",
        note:3,
        description:"Genres",
        prix:700,
        image: "images/Inheritance-Games.jpg",
      }
  
  ];


  
  for (let index = 0; index < listProduits.length; index++) {
    // La div où on veut afficher nos produits
    // var contenuHTML = document.getElementById("products-bn-container");
  
    // Le produit actuel
    var produit = listProduits[index];

        var contenuHTML =document.getElementById("products-container");
  
    // On change l'HTML intérieur de la section par la carte du produit
    contenuHTML.innerHTML += `
      <div class="carte">
        
          <div>
          <img class="ima" src=${produit.image}
          </div>
          <h5>${produit.titre}</h5>
          <p>${produit.description}</p>
          <h6>${produit.prix}$ </h6>
          <h6>${produit.auteur} </h6>
          <h6>${produit.publication} </h6>
          <h6>${produit.note} </h6> 
      </div>
    `;
      }

function AjouterProduit(event) {
  // Evite d'avoir une actualisation de la page lors du click sur le button
  event.preventDefault();

  // On récupére les valeurs des inputs
  var titre = document.getElementById("titre").value;
  var auteur = document.getElementById("auteur").value;
  var date = document.getElementById("date").value;
  var note = document.getElementById("note").value;
  var description = document.getElementById("description").value;
  var prix = document.getElementById("prix").value;
  
  // var im = document.getElementById("avatar").value;

  // On test si la récupération marche
  console.log(titre,auteur,date,note,description,prix);
  var contenuHTML =document.getElementById("products-container");
  
  // On change l'HTML intérieur de la section par la carte du produit
  contenuHTML.innerHTML += `
    <div class="carte">
      
    <h1>${titre}</h1>
    <h2>${auteur} </h2>
    <h3>${date} </h3>
    <h3>${note} </h3>
    <p>${description}</p>
    <h6>${prix} $</h6>
    </div>
  `;
    
  if (prix <=800 ) {
         // La div où on veut afficher nos produits
         var contenuHTML = document.getElementById("products-pp-container");

                // On change l'HTML intérieur de la section par la carte du produit
        contenuHTML.innerHTML += `
        <div class="carte">
          
          <h1>${titre}</h1>
          <h2>${auteur} </h2>
          <h3>${date} </h3>
          <h3>${note} </h3>
          <p>${description}</p>
          <h6>${prix} $ </h6>
        
        </div>
      `;

      }

   if(note >= 4){
        // La div où on veut afficher nos produits
        var contenuHTML = document.getElementById("products-mn-container");

               // On change l'HTML intérieur de la section par la carte du produit
       contenuHTML.innerHTML += `
       <div class="carte">
         
         <h1>${titre}</h1>
         <h2>${auteur} </h2>
         <h3>${date} </h3>
         <h3>${note} </h3>
         <p>${description}</p>
         <h6>${prix} $</h6>
       
       </div>
     `;

     }
 

 
}

