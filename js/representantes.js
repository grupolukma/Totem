document.getElementById('state-df').addEventListener('click', function() {
    document.getElementById('mensagem').innerText = 'Distrito Industrial | Brasília \n Representantes: ';
    document.getElementById('reps').innerText = 'Mayara (17)99999999';
});

document.getElementById('state-rs').addEventListener('click', function() {
    document.getElementById('mensagem').innerText = 'Rio Grande do Sul';
});

document.getElementById('state-sc').addEventListener('click', function() {
    document.getElementById('mensagem').innerText = 'Santa Catarina';
});

document.getElementById('state-pr').addEventListener('click', function() {
    document.getElementById('mensagem').innerText = 'Paraná';
});

document.getElementById('state-sp').addEventListener('click', function() {
    document.getElementById('mensagem').innerText = 'São Paulo';
        // Criar uma lista de objetos com nome e caminho da imagem
        var nomes1 = [
            { nome: 'José  |  17 99999-9999  |  mail.com' },
            { nome: 'Sandro  |  17 99999-9999  |  mail.com' },
            { nome: 'Carlos  |  17 99999-9999  |  mail.com' }
        ];
        
        var nomes2 = [
            { nome: 'Mayara  |  17 99999-9999  |  mail.com' },
            { nome: 'Diego  |  17 99999-9999  |  mail.com' },
            { nome: 'Matheus  |  17 99999-9999  |  mail.com' }
        ];
        
        var tabelaHTML = '<table>';
        
        // Adiciona a linha com nomes do array nomes1
        tabelaHTML += '<tr>';
        nomes1.forEach(function(item) {
            tabelaHTML += '<td>' + item.nome + '</td>';
        });
        tabelaHTML += '</tr>';
        
        // Adiciona a linha com nomes do array nomes2
        tabelaHTML += '<tr>';
        nomes2.forEach(function(item) {
            tabelaHTML += '<td>' + item.nome + '</td>';
        });
        tabelaHTML += '</tr>';
        
        tabelaHTML += '</table>';
        
        document.getElementById('reps').innerHTML = tabelaHTML;
    });


document.getElementById('state-mg').addEventListener('click', function() {
    document.getElementById('mensagem').innerText = 'Minas Gerais';

    var nomes1 = [
        { nome: 'eduardo', imagem: '../img/logo.png' },
        { nome: 'adnan', imagem: '../img/logo.png' },
        { nome: 'jonas', imagem: '../img/logo.png' }
    ];

    var tabelaHTML = '<table>';
    
        tabelaHTML += '<tr>';
        nomes1.forEach(function(item) {
            tabelaHTML += '<td><img src="' + item.imagem + '" alt="Imagem de ' + item.nome + '"> ' + item.nome + '</td>';
        });
        tabelaHTML += '</tr>';
    
        tabelaHTML += '</table>';
    
        document.getElementById('reps').innerHTML = tabelaHTML;
});

document.getElementById('state-rj').addEventListener('click', function() {
    document.getElementById('mensagem').innerText = 'Rio de Janeiro';
});

document.getElementById('state-es').addEventListener('click', function() {
    document.getElementById('mensagem').innerText = 'Espirito Santo';
});

document.getElementById('state-mt').addEventListener('click', function() {
    document.getElementById('mensagem').innerText = 'Mato Grosso';
});

document.getElementById('state-ms').addEventListener('click', function() {
    document.getElementById('mensagem').innerText = 'Mato Grosso do Sul';
});

document.getElementById('state-go').addEventListener('click', function() {
    document.getElementById('mensagem').innerText = 'Goiás';

    var nomes1 = [
        { nome: 'RAUL </br> 17 99999-9999 </br> mail.com', imagem: '../img/logo.png' },
        { nome: 'RODRIGO LEITE </br> 17 99999-9999 </br> mail.com', imagem: '../img/logo.png' },
        { nome: 'RONI FEITOSA </br> 17 99999-9999 </br> mail.com', imagem: '../img/logo.png' }
    ];
    
    var tabelaHTML = '<table>';
    
    tabelaHTML += '<tr>';
    nomes1.forEach(function(item) {
        // Inclui a imagem acima do nome
        tabelaHTML += '<td><img src="' + item.imagem + '" alt="Imagem de ' + item.nome + '"></td>';
    });
    
    tabelaHTML += '</tr>';
    
    tabelaHTML += '<tr>';
    nomes1.forEach(function(item) {
        // Inclui o nome
        tabelaHTML += '<td>' + item.nome + '</td>';
    });
    tabelaHTML += '</tr>';
    
    tabelaHTML += '</table>';
    
    document.getElementById('reps').innerHTML = tabelaHTML;
});

document.getElementById('state-pe').addEventListener('click', function() {
    document.getElementById('mensagem').innerText = 'Pernambuco';
});

document.getElementById('state-ce').addEventListener('click', function() {
    document.getElementById('mensagem').innerText = 'Ceará';
});

document.getElementById('state-se').addEventListener('click', function() {
    document.getElementById('mensagem').innerText = 'Sergipe';
});

document.getElementById('state-ba').addEventListener('click', function() {
    document.getElementById('mensagem').innerText = 'Bahia';
});

document.getElementById('state-ma').addEventListener('click', function() {
    document.getElementById('mensagem').innerText = 'Maranhão';
});

document.getElementById('state-pi').addEventListener('click', function() {
    document.getElementById('mensagem').innerText = 'Piauí';
});

document.getElementById('state-al').addEventListener('click', function() {
    document.getElementById('mensagem').innerText = 'Alagoas';
});

document.getElementById('state-pb').addEventListener('click', function() {
    document.getElementById('mensagem').innerText = 'Paraíba';
});

document.getElementById('state-rn').addEventListener('click', function() {
    document.getElementById('mensagem').innerText = 'Rio Grande do Norte';
});

document.getElementById('state-am').addEventListener('click', function() {
    document.getElementById('mensagem').innerText = 'Amazonas';
});

document.getElementById('state-to').addEventListener('click', function() {
    document.getElementById('mensagem').innerText = 'Tocantins';
});

document.getElementById('state-ap').addEventListener('click', function() {
    document.getElementById('mensagem').innerText = 'Amapá';
});

document.getElementById('state-ac').addEventListener('click', function() {
    document.getElementById('mensagem').innerText = 'Acre';
});

document.getElementById('state-ro').addEventListener('click', function() {
    document.getElementById('mensagem').innerText = 'Rondônia';
});

document.getElementById('state-rr').addEventListener('click', function() {
    document.getElementById('mensagem').innerText = 'Roraima';
});

document.getElementById('state-pa').addEventListener('click', function() {
    document.getElementById('mensagem').innerText = 'Pará';
});