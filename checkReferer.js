
document.addEventListener("DOMContentLoaded", function () {
    const referer = document.referrer || "";

    // 只要 Referer 里包含 fanbox 就放行
    if (referer.toLowerCase().includes("fanbox")) {
        window.location.href = "download.html";
    } else {
        window.location.href = "error.html";
    }
});
