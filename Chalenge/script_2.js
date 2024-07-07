function criptogra(){
    let entry = document.getElementById('entrada').value;
    
    let mapa = {
       'e': 'enter', 
       'i': 'imes', 
       'o': 'ober', 
       'a': 'ai',
       'u': 'ufat'
    }
    
    let entry_2 = entry;

    for(let oldletter in mapa){
        let newletter = mapa[oldletter]; 
        let mmm = new RegExp(oldletter, 'g');
        entry_2 = entry_2.replace(mmm, newletter);
    }

    document.getElementById('saida').textContent = entry_2;
}

function descripto(){
    let entry = document.getElementById('entrada').value;
    
    let mapa = {
       'enter': 'e', 
       'imes': 'i', 
       'ober': 'o', 
       'ai': 'a',
       'ufat': 'u'
    }
    
    let entry_2 = entry;

    for(let oldletter in mapa){
        let newletter = mapa[oldletter]; 
        let mmm = new RegExp(oldletter, 'g');
        entry_2 = entry_2.replace(mmm, newletter);
    }

    document.getElementById('saida').textContent = entry_2;
}

function copiartxt(){
    let cop = document.getElementById('saida');
    cop.select();

    navigator.clipboard.writeText(cop.value).then(function(){
        var nono = document.getElementById('copino');
        nono.style.display = 'block';
        setTimeout(function() {
            nono.style.display = 'none';
        }, 3000);
    }, function(err){
        alert('falha', err);
    });
}

function colar(){
    navigator.clipboard.readText().then(function(text){
        document.getElementById('entrada').value = text;
    })
}
