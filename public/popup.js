document.addEventListener('mouseup', (event) => {
  setTimeout(() => {
    const selectedText = window.getSelection().toString();
    console.log("Selected Text:", selectedText);

    if (selectedText) {
      const popup = document.createElement('div');
      popup.textContent = 'Save Highlight?';
      popup.style.position = 'absolute';
      popup.style.top = `${event.clientY + window.scrollY}px`;
      popup.style.left = `${event.clientX + window.scrollX}px`;
      popup.style.background = 'lightgray';
      popup.style.padding = '10px';
      popup.style.borderRadius = '5px';
      popup.style.cursor = 'pointer';
      popup.style.zIndex = '9999';

      console.log("Popup Created");

      const saveButton = document.createElement('button');
      saveButton.textContent = 'Save';
      saveButton.style.marginTop = '5px';
      saveButton.addEventListener('click', () => {
        const highlights = JSON.parse(localStorage.getItem('highlights')) || [];
        highlights.push(selectedText);
        localStorage.setItem('highlights', JSON.stringify(highlights));
        document.body.removeChild(popup);
        alert('Highlight saved!');
      });

      popup.appendChild(saveButton);
      document.body.appendChild(popup);

      document.addEventListener('click', (e) => {
        if (!popup.contains(e.target)) {
          document.body.removeChild(popup);
        }
      }, { once: true });
    }
  }, 100); // Delay the execution slightly
});


