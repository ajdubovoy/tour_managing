const BASE_URL = '/api/v1';


function getFetch(url) {
  // For use when doing GET requests, i.e. from an #index action, to keep code DRY
  return fetch(url, { credentials: "same-origin" }).then(r => r.json());
}

const csrfToken = document.querySelector('meta[name="csrf-token"]').attributes.content.value;

function postFetch(url, body, callback) {
  // The same as getFetch for POST requests
  return fetch(url, {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
      'X-CSRF-Token': csrfToken
    },
    credentials: 'same-origin',
    body: JSON.stringify(body)
  }).then(r => r.json())
    .then(r => callback(r));
}

function patchFetch(url, body, callback) {
  // The same as getFetch for PATCH requests
  return fetch(url, {
    method: 'PATCH',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
      'X-CSRF-Token': csrfToken
    },
    credentials: 'same-origin',
    body: JSON.stringify(body)
  }).then(r => r.json())
    .then(r => callback(r));
}

