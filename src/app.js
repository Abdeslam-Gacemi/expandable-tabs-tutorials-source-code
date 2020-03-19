window.addEventListener('DOMContentLoaded', function () {
    document.querySelectorAll('.btn').forEach(function (btn) {
        btn.onclick = function (ev) {
            var currentItem = btn.parentElement.parentElement;
            if (currentItem.classList.contains('expanded')) {
                currentItem.classList.remove('expanded');
                this.classList.remove('clicked');
            } else {
                document.querySelectorAll('.item').forEach(function (item) {
                    item.classList.remove('expanded');
                    item.querySelector('.btn').classList.remove('clicked');
                });
                currentItem.classList.add('expanded');
                this.classList.add('clicked');
            }
        }
    });
});