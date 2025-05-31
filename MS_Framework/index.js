// This script will inject MS Framework CSS dynamically using a valid API key
// Save this as ms-framework-loader.js and let users include it like a JS file

(function() {
    const API_KEY = "your-user-api-key"; // Replace or generate per user
    const CSS_ENDPOINT = `https://yourdomain.com/get-css.php?key=${API_KEY}`;

    fetch(CSS_ENDPOINT)
        .then(response => {
            if (!response.ok) {
                throw new Error("Invalid or expired API key.");
            }
            return response.text();
        })
        .then(css => {
            const style = document.createElement('style');
            style.textContent = css;
            document.head.appendChild(style);
        })
        .catch(error => {
            console.error("Failed to load MS Framework CSS:", error.message);
        });
})();
