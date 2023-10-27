
var botaoImc = document.querySelector(".enviar");


function calculaImc(event){
    event.preventDefault();
    var form = document.querySelector("#calculo-imc");

    var nome = form.nome.value;
    var idade = form.idade.value;
    var peso = form.peso.value;
    var altura = form.altura.value.replace(',','.');
    var imc = (peso/(altura*altura)).toFixed(2);

    var resultadoIMC = document.querySelector(".imc");
    resultadoIMC.textContent = imc;

    var classificacao = document.querySelector('.classificacao');
    classificacao.textContent = classificadorImc(imc);

    var riscos = document.querySelector('.risco');
    riscos.textContent = identificadorRiscos(imc);

    resultadoIMC.style.color = corImc(imc);
    classificacao.style.color = corImc(imc);

    resultadoIMC.style.backgroundColor = corBgImc(imc);
    classificacao.style.backgroundColor = corBgImc(imc);
    riscos.style.backgroundColor = corBgImc(imc);

}
function corImc(imc){
    var cor = "nada" ;

    if(imc < 15.99){
        cor = "red";
    }
    if(imc >= 16 && imc <= 16.99){
        cor = "red";
    } 
    if(imc >= 17 && imc <= 18.5){
        cor = "red";
    }
    if(imc >= 18.5 && imc <= 24.9){
        cor = "green";
    }
    if(imc >= 25 && imc <= 29.9){
        cor = "orange";
    }
    if(imc >= 30 && imc <= 34.9){
        cor = "red";
    }
    if(imc >= 35 && imc <= 39.9){
       cor = "red";
    }
    if(imc >= 40){
        cor = "red";
    }
    return cor 
}
function corBgImc(imc){
    var cor = "" ;

    if(imc < 15.99){
        cor = "rgb(251, 255, 0)";
    }
    if(imc >= 16 && imc <= 16.99){
        cor = "rgb(251, 255, 0)";
    } 
    if(imc >= 17 && imc <= 18.5){
        cor = "";
    }
    if(imc >= 25 && imc <= 29.9){
        cor = "rgb(251, 255, 0)";
    }
    if(imc >= 30 && imc <= 34.9){
        cor = "rgb(251, 255, 0)";
    }
    if(imc >= 35 && imc <= 39.9){
       cor = "rgb(251, 255, 0)";
    }
    if(imc >= 40){
        cor = "rgb(30, 255, 0)";
    }
    return cor 
}
function classificadorImc(imc){
    var classificacao = "nada" ;

    if(imc < 15.99){
        classificacao = "Magreza Grave";
    }
    if(imc >= 16 && imc <= 16.99){
        classificacao = "Magreza Moderada";
    } 
    if(imc >= 17 && imc <= 18.5){
        classificacao = "Magreza Leve";
    }
    if(imc >= 18.5 && imc <= 24.9){
        classificacao = "Saudável";
    }
    if(imc >= 25 && imc <= 29.9){
        classificacao = "Sobrepeso";
    }
    if(imc >= 30 && imc <= 34.9){
        classificacao = "Obesidade Grau 1";
    }
    if(imc >= 35 && imc <= 39.9){
        classificacao = "Obesidade Grau 2 (Severa)";
    }
    if(imc >= 40){
        classificacao = "Obesidade Grau 3 (Mórbida)";
    }
    return classificacao
}
function identificadorRiscos(imc){
    var classificacao = "nada" ;

    if(imc < 15.99){
        classificacao = "Risco alto - Anorexia, Bulimia, Osteoporose e auto consumo de massa muscular, Transtornos digestivos, debilidade, fadiga crônica, stress, ansiedade e disfusões hormonais e sexuais.";
    }
    if(imc >= 16 && imc <= 16.99){
        classificacao = "Risco alto - Anorexia, Bulimia, Osteoporose e auto consumo de massa muscular, Transtornos digestivos, debilidade, fadiga crônica, stress, ansiedade e disfusões hormonais e sexuais.";
    } 
    if(imc >= 17 && imc <= 18.5){
        classificacao = "Risco moderado - Transtornos digestivos, debilidade, fadiga crônica, stress, ansiedade e disfusões hormonais.";
    }
    if(imc >= 18.5 && imc <= 24.9){
        classificacao = "Baixo risco - Estado normal, bom nível de energia, vitalidade e boa condição física. Mantenha o seu peso e IMC.";
    }
    if(imc >= 25 && imc <= 29.9){
        classificacao = "Risco moderado - Fadiga, problemas digestivos, problemas circulatórios, má circulação nas pernas, varizes.";
    }
    if(imc >= 30 && imc <= 34.9){
        classificacao = "Risco alto - Diabetes, angina de peito, enfartes, tromboFlebites, arteroscleroses, alterações mestruais, disfunções sexuais.";
    }
    if(imc >= 35 && imc <= 39.9){
        classificacao = "Risco Muito alto - Falta de Ar, apneia, sonolência, trombose pulmonar, úlceras varicosas, cancro do colon uterino e mamário, refluxo esofágico,disfunções sexuais, discriminação social, laboral e sexual.";
    }
    if(imc >= 40){
        classificacao = "Risco Muito alto - Diabetes, angina de peito, enfartes, tromboFlebites, arteroscleroses, alterações mestruais, Falta de Ar, apneia, sonolência, trombose pulmonar, úlceras varicosas, cancro do colon uterino e mamário, refluxo esofágico,disfunções sexuais, discriminação social, laboral e sexual.";
    }
    return classificacao
}

botaoImc.addEventListener('click', calculaImc)