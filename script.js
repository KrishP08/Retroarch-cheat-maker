document.addEventListener("DOMContentLoaded", () => {
    let cheats = [];
    let cheatCount = 0;
  
    const consoleNameInput = document.getElementById("consoleName");
    const gameNameInput = document.getElementById("gameName");
    const descriptionInput = document.getElementById("cheatDescription");
    const codeInput = document.getElementById("cheatCode");
    const enableInput = document.getElementById("cheatEnable");
    const cheatPreview = document.getElementById("cheatPreview");
  
    // Add Cheat Button
    document.getElementById("addCheat").addEventListener("click", () => {
      const description = descriptionInput.value.trim();
      const code = codeInput.value.trim().replace(/\s+/g, "+");
      const enable = enableInput.checked;
  
      if (!description || !code) {
        alert("Please fill in all fields for the cheat.");
        return;
      }
  
      cheats.push({ description, code, enable });
      cheatCount++;
      updateCheatPreview();
      clearCheatFields();
    });
  
    // Download .cht File Button
    document.getElementById("downloadCheatFile").addEventListener("click", () => {
      if (cheats.length === 0) {
        alert("No cheats to save.");
        return;
      }
  
      const consoleName = consoleNameInput.value.trim();
      const gameName = gameNameInput.value.trim();
  
      if (!consoleName || !gameName) {
        alert("Please enter the console name and game name.");
        return;
      }
  
      let fileContent = `cheats = ${cheatCount}\n\n`;
      cheats.forEach((cheat, index) => {
        fileContent += `cheat${index}_desc = "${cheat.description}"\n`;
        fileContent += `cheat${index}_code = "${cheat.code}"\n`;
        fileContent += `cheat${index}_enable = ${cheat.enable}\n\n`;
      });
  
      const blob = new Blob([fileContent], { type: "application/octet-stream" });
      const fileName = `${consoleName}_${gameName}.cht`;
  
      const a = document.createElement("a");
      a.href = URL.createObjectURL(blob);
      a.download = fileName;
      a.click();
      URL.revokeObjectURL(a.href);
    });
  
    // Update Cheat Preview
    function updateCheatPreview() {
      let previewContent = `cheats = ${cheatCount}\n\n`;
      cheats.forEach((cheat, index) => {
        previewContent += `cheat${index}_desc = "${cheat.description}"\n`;
        previewContent += `cheat${index}_code = "${cheat.code}"\n`;
        previewContent += `cheat${index}_enable = ${cheat.enable}\n\n`;
      });
      cheatPreview.textContent = previewContent;
    }
  
    // Clear Form Fields
    function clearCheatFields() {
      descriptionInput.value = "";
      codeInput.value = "";
      enableInput.checked = false;
    }
  });
  