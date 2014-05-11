function cancelar(){
    
    $("#email").val("");
    
    $("#senha").val("");
    
    $("#msgEmail").html("");
    $("#msgSenha").html("");
    
    
}

function salvarEmail(){
    
    var txtEmail = $("#email").val();
    var txtSenha = $("#senha").val();
    
    
    $("#msgEmail").html("");
    $("#msgSenha").html("");
    
    if(txtEmail.length == 0){
        
        $("#msgEmail").css("color","#ff1a1a");
        $("#msgEmail").append("Preencha o campo de email.");
        
    }
    else if(txtSenha.length == 0){
        $("#msgSenha").css("color","#ff1a1a");
        $("#msgSenha").append("Preencha o campo de senha.");
    }
    else{
    
    
        $("#msgEmail").html("");
        $("#msgSenha").html("");
        
        
        if(indice == -1){

            var email = JSON.stringify({ 
                Email : $("#email").val(), 
                Senha : $("#senha").val()
            }); 

            tbEmailSenha.push(email);         

        }
        else{

            tbEmailSenha[indice] = JSON.stringify({ 
                Email : $("#email").val(), 
                Senha : $("#senha").val()
            }); 

        }

        localStorage.setItem("tbEmailSenha", JSON.stringify(tbEmailSenha)); 
        criarLista();
        indice = -1;


        $("#email").val("");

        $("#senha").val("");
        
    }
    
    return true; 
    
}

function criarLista(){ 
    
    $("#lista").html("");    
    
    for(var i in tbEmailSenha){
        
        var email = JSON.parse(tbEmailSenha[i]); 
        $("#lista").append("<li><a onclick='exibirAlterarEmail("+i+")'>"+ email.Email+"</a></li>"); 
        
    }

}

function exibirAlterarEmail(selecionado){ 
    
    $("#msgEmail").html("");
    $("#msgSenha").html("");
    
    indice = selecionado;
    
    var email = JSON.parse(tbEmailSenha[selecionado]);
    $("#email").val(email.Email);
    
    $("#senha").val(email.Senha);    

    $("#senha").focus();     
    
}

function abrirTela(url,objeto){
    
    $(objeto).load(url);
    
}
 
var indice = -1; 
var tbEmailSenha = localStorage.getItem("tbEmailSenha");
tbEmailSenha = JSON.parse(tbEmailSenha); 
if(tbEmailSenha == null) 
    tbEmailSenha = []; 

abrirTela("paginaPrincipal.html","#tela");

criarLista();