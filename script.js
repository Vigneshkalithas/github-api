var getid = document.getElementsByTagName("input");

async function getdetail() {
  try {
    var userData = await fetch(`https://api.github.com/users/${getid[0].value}/repos`);
    console.log(userData);
    var userDetails = await userData.json();
    console.log(userDetails);


    // var tbody = document.getElementById("tot-body")
    // tbody.innerHTML ="";
    
    userDetails.forEach((data) => {

      var cardDiv = document.createElement("div");
      cardDiv.setAttribute("class", "contain");
      
      var innerdiv = document.createElement("div");
      innerdiv.setAttribute("id","contain")
      innerdiv.setAttribute("class", "card");
      innerdiv.style.width = "18rem";

      innerdiv.innerHTML = `
    <img src="${data.owner.avatar_url}" class="card-img-top" alt="${data.owner.login}">
    <div class="card-body">
    <h5 class="card-title">User Name: ${data.owner.login}</h5>
      <p class="card-text">Repo_name : ${data.name}</p>
      <p class="card-text">Forks_count : ${data.forks_count}</p>
      <p class="card-text">Star_count : ${data.stargazers_count}</p>
      <a href="${data.clone_url}" class="btn btn-success">repository link</a>
    </div>
  `;
      document.getElementsByClassName("card").innerText = "";
      
      cardDiv.appendChild(innerdiv);
      document.body.appendChild(cardDiv);
      
    });
  } catch (error) {
    console.log("Something Went wrong please wait we will rectify shortly");
  }
}


