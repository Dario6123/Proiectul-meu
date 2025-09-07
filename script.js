// Dark Mode
const btn = document.getElementById("darkModeBtn");
btn.addEventListener("click",()=>{
  document.body.classList.toggle("dark");
  btn.textContent=document.body.classList.contains("dark")?"☀️":"🌙";
});

// Coș de cumpărături
let cos=JSON.parse(localStorage.getItem("cos"))||[];

function actualizeazaCos(){
  const lista=document.getElementById("listaCos");
  const total=document.getElementById("total");
  lista.innerHTML="";
  let suma=0;
  cos.forEach((produs,index)=>{
    const li=document.createElement("li");
    li.textContent=`${produs.nume} - ${produs.pret} RON`;
    const btnSterge=document.createElement("button");
    btnSterge.textContent="❌";
    btnSterge.onclick=()=>stergeProdus(index);
    li.appendChild(btnSterge);
    lista.appendChild(li);
    suma+=produs.pret;
  });
  total.textContent=`Total: ${suma} RON`;
  localStorage.setItem("cos",JSON.stringify(cos));
}

function adaugaCos(nume,pret){cos.push({nume,pret});actualizeazaCos();}
function stergeProdus(index){cos.splice(index,1);actualizeazaCos();}
function golesteCos(){cos=[];actualizeazaCos();}

actualizeazaCos();
