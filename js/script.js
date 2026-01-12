document.querySelectorAll(".img-zoom").forEach(img => {
    img.addEventListener("mousemove", (e) => {
            const rect = img.getBoundingClientRect();
            const x = ((e.clientX - rect.left) / rect.width) * 100;
            const y = ((e.clientY - rect.top) / rect.height) * 100;

            img.style.backgroundPosition = `${x}% ${y}%`;
        });

        img.addEventListener("mouseleave", () => {
            img.style.backgroundPosition = "center";
        });
    });

