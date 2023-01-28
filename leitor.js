var senhaV = "1234"
var senhaD = ""
var cont = 1;
while (senhaD != senhaV && cont <= 3){
    senhaD = prompt("Digite sua senha:")
    cont = cont + 1
}
if(senhaD==senhaV){ 
    document.write("Senha correta.")
}else{
    window.alert("Acesso negado.")
    //document.write("Acesso negado.")
    window.close() // comitar fechamento
}