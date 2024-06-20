document.querySelectorAll('.download-btn').forEach(function (button) {
  button.addEventListener('click', function () {
    let tabId = this.getAttribute('data-tab-id');
    let tab = document.getElementById(tabId);
    let title = tab.querySelector('h3').innerText;
    let content = tab.querySelector('p').innerText;
    let notes = tab.querySelector('.notes-textarea').value;

    let checklistData = { title: title, content: content, notes: notes };
    let json = JSON.stringify(checklistData, null, 2);
    let blob = new Blob([json], { type: "application/json" });
    let url = URL.createObjectURL(blob);

    let a = document.createElement('a');
    a.href = url;
    a.download = title.replace(/\s+/g, '_') + '_progress.json';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
  });
});