document.addEventListener("DOMContentLoaded", function () {
    const sidebarToggle = document.querySelector(".sidebar-toggle");
    const sidebar = document.querySelector(".sidebar");

    if (sidebarToggle && sidebar) {
        sidebarToggle.addEventListener("click", function () {
            sidebar.classList.toggle("show"); // ✅ Toggle sidebar visibility

            if (sidebar.classList.contains("show")) {
                sidebar.style.display = "flex"; // ✅ Show sidebar
            } else {
                sidebar.style.display = "none"; // ✅ Hide sidebar
            }
        });
    }
});


