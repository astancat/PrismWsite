document.querySelectorAll('a[href^="#"]').forEach(link => {
    link.addEventListener("click", function (event) {
        const target = document.querySelector(this.getAttribute("href"));

        if (target) {
            event.preventDefault();

            target.scrollIntoView({
                behavior: "smooth"
            });
        }
    });
});

const downloadButtons = document.querySelectorAll(".download-btn");

downloadButtons.forEach(button => {
    button.addEventListener("click", function () {
        const originalText = this.innerHTML;

        this.innerHTML = "Starting download...";

        setTimeout(() => {
            window.location.href =
                "https://github.com/astancat/pgmappfiles/raw/main/Prism_8.5_major.apk";

            this.innerHTML = originalText;
        }, 300);
    });
});