let dropList = [
  'Lumber',
  'Port',
  'Hills',
  'OG Spot',
  'Quarry',
  'Farmland',
  'Prison',
];
let hotDropList = [
  'Stadium',
  'Hospital',
  'Storage Town',
  'Boneyard',
  'Superstore',
  'Military',
  'Airport',
  'Downtown',
];

let both = [...dropList, ...hotDropList];

let result = document.getElementById('result');

for (let i = 0; i < both.length; i++) {
  let mainDiv = document.createElement('p');
  let p = document.createTextNode(both[i]);

  mainDiv.appendChild(p);
  document.getElementById('my-list').appendChild(mainDiv);
}

function addDrop() {
  event.preventDefault();
  let input = document.getElementById('drop-input').value;
  both.push(input);
  console.log(both);

  let newDropEl = document.createElement('p');
  let dropP = document.createTextNode(input);
  newDropEl.appendChild(dropP);
  document.getElementById('my-list').appendChild(newDropEl);

  document.getElementById('submit-section').reset();
}

function dropGen() {
  let randomDrop = both[Math.floor(Math.random() * both.length)];
  result.innerHTML = randomDrop;
}

function hotDropGen() {
  let randomHotDrop =
    hotDropList[Math.floor(Math.random() * hotDropList.length)];
  result.innerHTML = randomHotDrop;
}

function omar() {
  let omarDrop = hotDropList[2];
  result.innerHTML = omarDrop;
}
