let btn = document.getElementById('btn');
let output = document.getElementById('output');
const host = 'http://www.boredapi.com/api/activity/';

btn.addEventListener('click', async function(event){
    output.innerHTML = await makeRequest(host);
})


async function makeRequest(url){
    let response = await fetch(url);
    let data = await response.json();
    return data.activity;
}

console.log(makeRequest('http://www.boredapi.com/api/activity/'));