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
            preview.classList.remove("hidden");

            setTimeout(() => {
                fullPost.classList.add("hidden");
                fullPost.style.display = "none";  
                readMore.style.display = "inline-block";  // ✅ Show "Read More" again
                readLess.style.display = "none";  // ✅ Hide "Read Less"
            }, 500);
        }
    }
});
