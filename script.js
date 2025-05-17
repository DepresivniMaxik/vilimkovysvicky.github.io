// oznameni pri pridani do kosiku
document.addEventListener('DOMContentLoaded', () => {
    const buttons = document.querySelectorAll('.btn-add');
    buttons.forEach(btn => {
        btn.addEventListener('click', () => {
            const productName = btn.getAttribute('data-product');
            alert(`Produkt "${productName}" byl přidán do košíku.`);
        });
    });
});
