document.querySelectorAll('.btn').forEach(function(btn) {
    btn.addEventListener('click', function() {
        alert(btn.dataset.numberString)
    })
});