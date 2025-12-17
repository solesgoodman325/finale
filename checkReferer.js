document.addEventListener("DOMContentLoaded", function () {
    // 获取 Referer
    const referer = document.referrer;

    // 判断 Referer 是否包含 "fanbox"
    if (referer.toLowerCase().includes("fanbox")) {
        // 如果包含 "fanbox"，加载 download.html 页面
        window.location.href = "download.html";
    } else {
        // 否则，跳转到 error 页面
        window.location.href = "error.html";
    }
});

