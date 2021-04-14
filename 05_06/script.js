const transcript = document.querySelector("#collapser");
transcript.classList.add("collapse");
const transcriptBtn = document.querySelector("#transcript-toggle");

transcriptBtn.addEventListener("click", () => {
  transcript.classList.contains("collapse")
    ? (transcriptBtn.innerHTML = "Collapse transcript")
    : (transcriptBtn.innerHTML = "Expand transcript");
  transcript.classList.toggle("collapse");
});
