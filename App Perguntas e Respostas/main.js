






var elementos = document.querySelectorAll('[type=radio]');

for (let i = 0; i < elementos.length; i++) {
    elementos[i].addEventListener('change', function(e){
        let marcado = e.target.value;

        if (marcado === 'correta') {
            e.target.previousElementSibling.style.backgroundColor = 'green';
            alert('ACERTOU');
        } else {
            e.target.previousElementSibling.style.backgroundColor = 'red';
            alert('Errou')
            let els = document.querySelectorAll('[type=radio]');
            for (let n = 0; n < els.length; n++) {
                els[n].disabled = false;
                
            }

        }
    })    
}