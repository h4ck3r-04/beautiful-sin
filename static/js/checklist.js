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

document.addEventListener('DOMContentLoaded', function () {
  let tabCount = 1;

  const tabModal = document.getElementById('tabModal');
  const tabNameInput = document.getElementById('tabName');
  const tabContentSelect = document.getElementById('tabContentSelect');
  const createTabButton = document.getElementById('createTab');
  const emptyMessage = document.getElementById('emptyMessage');

  // Define the options data
  const optionsData = [
    { value: 'Header', title: 'Header' },
    { value: 'Content 1', title: 'Content 1' },
    { value: 'Content 2', title: 'Content 2' }
  ];

  // Populate the select element with options
  optionsData.forEach(option => {
    const optionElement = document.createElement('option');
    optionElement.value = option.value;
    optionElement.text = option.title;
    tabContentSelect.appendChild(optionElement);
  });

  function addCloseEvent(button) {
    button.addEventListener('click', function (e) {
      e.stopPropagation();
      const tabLink = button.closest('a');
      const tabId = tabLink.getAttribute('href').substring(1);
      const tabElement = document.getElementById(tabId);

      // Remove the tab and its content
      button.closest('li').remove();
      tabElement.remove();

      // Check if any tabs are left
      if (!document.querySelector('.nav-tabs li:not(:last-child)')) {
        emptyMessage.style.display = 'flex';
      }
    });
  }

  document.getElementById('addTab').addEventListener('click', function (e) {
    e.preventDefault();

    // Show modal
    tabModal.style.display = 'flex';
  });

  createTabButton.addEventListener('click', function () {
    const tabName = tabNameInput.value.trim();
    const tabContent = tabContentSelect.value;

    if (!tabName) {
      alert('Please enter a tab name');
      return;
    }

    // Create a new tab list item
    const newTab = document.createElement('li');
    const newTabLink = document.createElement('a');
    const newTabId = 'tab' + tabCount;

    newTabLink.href = '#' + newTabId;
    newTabLink.setAttribute('data-toggle', 'tab');
    newTabLink.className = 'nav-link';
    newTabLink.innerHTML = tabName +
      '<button class="close" type="button" title="Close"><i class="ti ti-x"></i></button>';

    // Append the new tab
    newTab.appendChild(newTabLink);
    document.getElementById('tabList').insertBefore(newTab, document.getElementById('addTab').parentNode);

    // Create a new tab content item
    const newTabContent = document.createElement('div');
    newTabContent.className = 'tab-pane fade';
    newTabContent.id = newTabId;
    newTabContent.innerHTML = '<h3>' + tabContent + '</h3>';

    document.getElementById('tabContent').appendChild(newTabContent);

    // Increment the tab count
    tabCount++;

    // Add event listener to the close button
    const closeButton = newTab.querySelector('.close');
    addCloseEvent(closeButton);

    // Hide modal and reset inputs
    tabModal.style.display = 'none';
    tabNameInput.value = '';
    tabContentSelect.value = 'Header';

    // Hide empty message
    emptyMessage.style.display = 'none';
  });

  // Close modal when clicking outside of it
  window.addEventListener('click', function (e) {
    if (e.target == tabModal) {
      tabModal.style.display = 'none';
      tabNameInput.value = '';
      tabContentSelect.value = 'Header';
    }
  });

  // Add event listeners to existing close buttons
  document.querySelectorAll('.nav-tabs .close').forEach(button => {
    addCloseEvent(button);
  });

  // Initially check if any tabs are present
  if (document.querySelectorAll('.nav-tabs li:not(:last-child)').length === 0) {
    emptyMessage.style.display = 'flex';
  } else {
    emptyMessage.style.display = 'none';
  }
});
