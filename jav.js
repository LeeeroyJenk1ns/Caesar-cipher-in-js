const alph = ['а', 'б', 'в', 'г', 'д', 'е', 'ё', 'ж', 'з', 'и', 'й', 'к', 'л', 'м', 'н', 'о', 'п', 'р', 'с', 'т', 'у', 'ф', 'х', 'ц', 'ч', 'ш', 'щ', 'ь', 'ы', 'ъ', 'э', 'ю', 'я'];
const btnEncrypt = document.getElementById('encrypt');
const btnDecrypt = document.getElementById('decrypt');
const text = document.querySelector('textarea');
const p = document.querySelector('p');

btnEncrypt.addEventListener('click', () => {
    let cipher = text.value.toLowerCase().split('');
    const offset = +document.querySelector('input').value;
    cipher.forEach((e, i) => {
        if (alph.includes(e)) {
            let iter = alph.findIndex(val => val === e);
            if (iter + offset >= alph.length) {
                cipher[i] = alph[iter + offset - alph.length];
            } else if (iter + offset <= alph.length - 1) {
                cipher[i] = alph[iter + offset];
            } else {
                console.log('Err');
            }
        }
    });
    p.innerText = cipher.join('');
});

btnDecrypt.addEventListener('click', () => {
    let cipher = text.value.toLowerCase().split('');
    const offset = +document.querySelector('input').value;
    cipher.forEach((e, i) => {
        if (alph.includes(e)) {
            let iter = alph.findIndex(val => val === e);
            if (iter - offset < 0) {
                cipher[i] = alph[alph.length + (iter - offset)];
            } else if (iter - offset >= 0) {
                cipher[i] = alph[iter - offset];
            } else {
                console.log('Err');
            }
        }
    });
    p.innerText = cipher.join('');
});