<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Email Client</title>
  <style>
    /* Some basic styling */
    body {
      font-family: Arial, sans-serif;
    }
    .email {
      border: 1px solid #ccc;
      padding: 10px;
      margin-bottom: 10px;
    }
  </style>
</head>
<body>
  <h1>Email Client</h1>
  <div id="folders">
    <button id="inboxBtn">Inbox</button>
    <button id="sentBtn">Sent</button>
    <button id="draftsBtn">Drafts</button>
  </div>
  <div id="emails"></div>

  <script>
    // Function to load emails from local storage
    function loadEmails() {
      return JSON.parse(localStorage.getItem('emails')) || {
        "inbox": [
          { "id": 1, "sender": "john@example.com", "subject": "Hello", "body": "Hi there!", "read": false },
          { "id": 2, "sender": "jane@example.com", "subject": "Meeting", "body": "Don't forget the meeting tomorrow.", "read": false }
        ],
        "sent": [
          { "id": 3, "recipient": "susan@example.com", "subject": "Presentation", "body": "Attached is the presentation.", "read": true }
        ],
        "drafts": [
          { "id": 4, "subject": "Reminder", "body": "Don't forget to submit the report.", "read": false }
        ]
      };
    }

    // Sample JSON data for emails
    let emails = loadEmails();

    // Function to save emails to local storage
    function saveEmails() {
      localStorage.setItem('emails', JSON.stringify(emails));
    }

    // Function to display emails for a selected folder
    function showEmails(folder) {
      const folderContent = document.getElementById('emails');
      folderContent.innerHTML = ''; // Clear previous emails

      emails[folder].forEach(email => {
        const emailDiv = document.createElement('div');
        emailDiv.classList.add('email');
        emailDiv.innerHTML = `
          <strong>${folder === 'sent' ? 'To: ' + email.recipient : 'From: ' + email.sender}</strong><br>
          <strong>Subject:</strong> ${email.subject}<br>
          <p>${email.body}</p>
        `;
        if (!email.read) {
          emailDiv.style.fontWeight = 'bold';
        }
        folderContent.appendChild(emailDiv);
      });
    }

    // Event listeners for folder buttons
    document.getElementById('inboxBtn').addEventListener('click', () => showEmails('inbox'));
    document.getElementById('sentBtn').addEventListener('click', () => showEmails('sent'));
    document.getElementById('draftsBtn').addEventListener('click', () => showEmails('drafts'));

    // Show inbox by default
    showEmails('inbox');

    // Save emails to local storage when the page unloads
    window.addEventListener('beforeunload', saveEmails);
  </script>
</body>
</html>
