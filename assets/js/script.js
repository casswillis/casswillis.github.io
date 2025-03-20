document.body.addEventListener("click", function (event) {
    const postContainer = event.target.closest(".post-box");
    if (!postContainer) return;

    const preview = postContainer.querySelector(".preview");
    const fullPost = postContainer.querySelector(".full");
    const readMore = postContainer.querySelector(".read-more");
    const readLess = postContainer.querySelector(".read-less");

    if (event.target.classList.contains("read-more")) {
        event.preventDefault();
        console.log("✅ Read More Clicked on:", postContainer);

        if (preview && fullPost && readMore && readLess) {
            preview.classList.add("hidden");

            setTimeout(() => {
                fullPost.classList.remove("hidden");
                fullPost.style.display = "block";  
                readMore.style.display = "none";  // ✅ Hide "Read More"
                readLess.style.display = "inline-block";  // ✅ Show "Read Less"
            }, 500);
        }
    }

    if (event.target.classList.contains("read-less")) {
    event.preventDefault();
    console.log("✅ Read Less Clicked on:", postContainer);

    if (preview && fullPost && readMore && readLess) {
        fullPost.style.opacity = "0";  // Fade out before hiding
        setTimeout(() => {
            fullPost.classList.add("hidden");
            fullPost.style.display = "none";  
            preview.classList.remove("hidden");  // Ensure preview is visible
            readMore.style.display = "inline-block";  // ✅ Show "Read More" again
            readLess.style.display = "none";  // ✅ Hide "Read Less"
        }, 300); // Shorter transition time
    }
}

});

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


