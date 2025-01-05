export function useClipboard() {
  const copyTextToClipboard = (text, alertFn) => {
    // Create a temporary textarea element
    const textArea = document.createElement("textarea");
    textArea.value = text;

    // Style the textarea to make it invisible
    textArea.style.position = "fixed";
    textArea.style.top = "0";
    textArea.style.left = "0";
    textArea.style.width = "2em";
    textArea.style.height = "2em";
    textArea.style.padding = "0";
    textArea.style.border = "none";
    textArea.style.outline = "none";
    textArea.style.boxShadow = "none";
    textArea.style.background = "transparent";

    // Append textarea to the DOM
    document.body.appendChild(textArea);
    textArea.select();

    try {
      // Copy text to clipboard
      const successful = document.execCommand("copy");
      if (successful && alertFn) {
        alertFn("Link telah berhasil disalin ke clipboard!");
      }
    } catch (err) {
      console.error("Gagal menyalin link ke clipboard:", err);
    } finally {
      // Remove the textarea from the DOM
      document.body.removeChild(textArea);
    }
  };

  return { copyTextToClipboard };
}
