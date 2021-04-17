(function() {
    let input = document.querySelector('.input');
    input.addEventListener('keyup', (e) => {

        let str = input.value.toLowerCase();
        let items = document.querySelectorAll('.item');
        let regex = new RegExp(str, 'gm');

        if (str.length <= 3) {

            items.forEach(el => el.classList.remove('hide'));

        } else {

            items.forEach(el => {
                el.classList.remove('hide');
                if (!regex.exec(el.textContent.toLocaleLowerCase())) {
                    el.classList.add('hide');
                }
            })

        }
    })
})();