document.querySelectorAll('.btn').forEach(function(btn) {
    btn.addEventListener('click', function() {
        let obj = {
            name: "Илья",
            age: 17
        }

        btn.dataset.user = JSON.stringify(obj)

        alert(`Кнопка ${btn.dataset.number}, кликов: ${ ++btn.dataset.clicks}`)

        console.log(JSON.parse(btn.dataset.user));
    })
});