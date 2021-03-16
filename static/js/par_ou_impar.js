function Par_ou_Impar() {
   const pai =  document.getElementById("flex-box-result");
   const filho = pai.querySelector("#valor");
   console.log(pai);
   console.log(filho);
   if (filho != null){
    document.getElementById("flex-box-result").removeChild(filho);
   } 
   var num = document.getElementById("valor").value;
   num = parseInt(num);
    try {
        
        if (isNaN(num)) throw "O valor passado não é um número";
        if (num % 2 == 0){
            var nome = "par";
        }
        else{
            var nome = "impar";
        }
        var texto = document.createTextNode("O número " + num + " é " + nome);
   }
   catch (erro){
       var texto = document.createTextNode(erro);
   }
        var h1 = document.createElement("h1");
        h1.setAttribute("id","valor");
        h1.appendChild(texto);
        document.getElementById("flex-box-result").appendChild(h1);
}

