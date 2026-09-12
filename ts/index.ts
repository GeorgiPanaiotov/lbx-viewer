const dropZone = document.getElementById("drop-zone");
const fileInput = document.getElementById("file-input");

dropZone?.addEventListener("click", () => fileInput?.click());

fileInput?.addEventListener("change", (e) => handleFile((e?.target as any)?.files[0]));

dropZone?.addEventListener("dragover", (e) => e.preventDefault());
dropZone?.addEventListener("drop", (e) => {
  e.preventDefault();
  if ((e?.dataTransfer as any).files.length) handleFile((e?.dataTransfer as any).files[0]);
});

function handleFile(file: Blob) {
  if (!file) return;

  const reader = new FileReader();

  reader.readAsText(file);
  reader.onload = (e) => parseCustomTextFormat((e?.target as any).result);
}

function parseCustomTextFormat(bytes: string | ArrayBuffer | null) {
  console.log("Raw File Bytes Loaded:", bytes);
}
