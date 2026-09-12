"use strict";
const dropZone = document.getElementById("drop-zone");
const fileInput = document.getElementById("file-input");
dropZone?.addEventListener("click", () => fileInput?.click());
fileInput?.addEventListener("change", (e) => handleFile(e?.target?.files[0]));
dropZone?.addEventListener("dragover", (e) => e.preventDefault());
dropZone?.addEventListener("drop", (e) => {
    e.preventDefault();
    if ((e?.dataTransfer).files.length)
        handleFile((e?.dataTransfer).files[0]);
});
function handleFile(file) {
    if (!file)
        return;
    const reader = new FileReader();
    reader.readAsText(file);
    reader.onload = (e) => parseCustomTextFormat((e?.target).result);
}
function parseCustomTextFormat(bytes) {
    console.log("Raw File Bytes Loaded:", bytes);
}
