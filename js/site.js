function validaFaleConosco(){
    var nome = document.frmfaleconosco.txtnome.value;
    var expRegNome = new RegExp ("^[A-zÀ-ü]{3,}([ ]{1}[A-zÀ-ü]{2,})+$");
    
    var idade = document.frmfaleconosco.txtidade.value;
    var expRegIdade = new RegExp ("^[0-9]{2,3}$");
    
    var senha = document.frmfaleconosco.txtsenha.value;
    var expRegSenha = new RegExp ("^[A-zÀ-ü0-9]{2,}")

    if(!expRegNome.test(nome)){
        alert("Preencha o campo Nome corretamente.");
        document.frmfaleconosco.txtnome.focus();
        return false;
    }

    if(document.frmfaleconosco.txtemail.value==""){
        alert("Preencha o campo Email.");
        document.frmfaleconosco.txtemail.focus();
        return false;
    }

    if(!expRegSenha.test(senha)){
        alert("Preencha o campo da Senha corretamente.");
        document.frmfaleconosco.txtsenha.focus();
        return false;
    }

    if(!expRegIdade.test(idade)){
        alert("Preencha o campo da Idade corretamente.");
        document.frmfaleconosco.txtidade.focus();
        return false;
    }

    if(document.frmfaleconosco.txtdtnasc.value==""){
        alert("Preencha o campo Data de nascimento.");
        document.frmfaleconosco.txtdtnasc.focus();
        return false;
    }

    if (document.frmfaleconosco.selmotivo.value=="") {
        alert("Preencha o campo de Preferência do Evento");
        document.frmfaleconosco.selmotivo.focus();
        return false;
    }

    if(document.frmfaleconosco.txtTitulo.value==""){
        alert("Preencha o campo Título da Apresentação.");
        document.frmfaleconosco.txtTitulo.focus();
        return false;
    }

    if(document.frmfaleconosco.txtresumo.value==""){
        alert("Preencha o campo Resumo da apresentação.");
        document.frmfaleconosco.txtresumo.focus();
        return false;
    }

    var email = document.getElementById("email").value;
    var regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!regex.test(email)) {
        alert("Email inválido!");
        document.frmfaleconosco.txtemail.focus();
        return false;
    }
    return true;
}

function verificaExtensao() {
    var extPermitidas = document.getElementById("arquivo");
  
    if(extPermitidas.files[0].type != "application/pdf") {
      alert('Extensão não permitida!');
      
      extPermitidas.value = "";

    }
}