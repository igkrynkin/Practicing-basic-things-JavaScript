document.querySelectorAll('.btn').forEach(function(btn) {
    btn.addEventListener('click', function() {
        alert(`Кнопка ${btn.dataset.number}`)
    })
});