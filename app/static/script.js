document.addEventListener("DOMContentLoaded", () => {
    const items = document.querySelectorAll("li");
    items.forEach(item => {
        item.addEventListener("click", () => {
            alert("🛒 Added to cart: " + item.textContent.trim());
        });
    });
});

