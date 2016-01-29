// Saves options to chrome.storage
function save_options() {
  var endpointURL = document.getElementById('endpointURL').value;
  chrome.storage.sync.set({
    endpointURL
  }, function() {
    // Update status to let user know options were saved.
    var status = document.getElementById('status');
    status.className += " alert alert-success";
    status.textContent = 'URL successfully saved.';
    setTimeout(function() {
      status.className = ""
      status.textContent = '';
    }, 2000);
  });
}

// Restores select box and checkbox state using the preferences
// stored in chrome.storage.
function restore_options() {
  // Use default value color = 'red' and likesColor = true.
  chrome.storage.sync.get({
    endpointURL: 'Your endpoint URL here'
  }, function(items) {
    document.getElementById('endpointURL').value = items.endpointURL;
  });
}
document.addEventListener('DOMContentLoaded', restore_options);
document.getElementById('save').addEventListener('click',
    save_options);