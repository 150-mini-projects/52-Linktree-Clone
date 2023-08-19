const shareButtons = document.querySelectorAll(".tile-share-btn");

async function copyText(e) {
  e.preventDefault();
  const link = this.getAttribute("link");
  try {
    await navigator.clipboard.writeText(link);
    alert("Link copied: " + link);
  } catch (err) {}
}

shareButtons.forEach((shareButton) =>
  shareButton.addEventListener("click", copyText)
);
