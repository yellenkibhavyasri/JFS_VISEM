// Local-image-based inventor data (images placed in images/ folder)
const inventors = [
  {
    id: 'dennis-ritchie',
    name: 'Dennis Ritchie',
    language: 'C',
    img: 'images/ritchie.jpg',
    lifespan: '1941 — 2011',
    about: 'Dennis Ritchie created the C programming language and co-developed the Unix operating system. His influence is everywhere in modern systems and languages.'
  },
  {
    id: 'bjarne-stroustrup',
    name: 'Bjarne Stroustrup',
    language: 'C++',
    img: 'images/stroustrup.jpg',
    lifespan: 'born 1950',
    about: 'Bjarne Stroustrup developed C++ to add higher-level programming abstractions to C while keeping performance.'
  },
  {
    id: 'james-gosling',
    name: 'James Gosling',
    language: 'Java',
    img: 'images/gosling.jpg',
    lifespan: 'born 1955',
    about: 'James Gosling led the team that created Java at Sun Microsystems; Java emphasizes portability via the JVM.'
  },
  {
    id: 'guido-van-rossum',
    name: 'Guido van Rossum',
    language: 'Python',
    img: 'images/guido.jpg',
    lifespan: 'born 1956',
    about: 'Guido van Rossum created Python in 1991 with a focus on readability and developer happiness.'
  },
  {
    id: 'brendan-eich',
    name: 'Brendan Eich',
    language: 'JavaScript',
    img: 'images/eich.jpg',
    lifespan: 'born 1961',
    about: 'Brendan Eich created JavaScript at Netscape in 1995; it became the primary language for web browsers.'
  }
];

// DOM refs
const selectEl = document.getElementById('inventorSelect');
const avatarWrap = document.getElementById('avatarWrap');
const avatarImg = document.getElementById('avatarImg');
const infoBox = document.getElementById('infoBox');
const infoName = document.getElementById('infoName');
const infoLang = document.getElementById('infoLang');
const infoLifespan = document.getElementById('infoLifespan');
const infoAbout = document.getElementById('infoAbout');

// Fill dropdown with options (first option left blank as placeholder)
function populateDropdown(){
  inventors.forEach(inv => {
    const opt = document.createElement('option');
    opt.value = inv.id;
    opt.textContent = `${inv.language} — ${inv.name}`;
    selectEl.appendChild(opt);
  });
}

// Clear display to initial 'no info' state
function clearDisplay(){
  // Avatar: remove src and apply 'empty' styling
  avatarImg.src = '';
  avatarImg.alt = '';
  avatarWrap.classList.add('empty');

  // Info: clear fields and mark empty
  infoName.textContent = '';
  infoLang.textContent = '';
  infoLifespan.textContent = '';
  infoAbout.textContent = '';
  infoBox.classList.add('empty');
}

// Update display when an inventor is selected
function showInventor(id){
  const inv = inventors.find(i => i.id === id);
  if(!inv) { clearDisplay(); return; }

  // Avatar
  avatarImg.src = inv.img;
  avatarImg.alt = `${inv.name} photo`;
  avatarWrap.classList.remove('empty');

  // Info card
  infoName.textContent = inv.name;
  infoLang.textContent = inv.language;
  infoLifespan.textContent = inv.lifespan || '';
  infoAbout.textContent = inv.about;
  infoBox.classList.remove('empty');
}

// Event handling
selectEl.addEventListener('change', (e) => {
  const val = e.target.value;
  if(!val) clearDisplay();
  else showInventor(val);
});

// Initialize
populateDropdown();
clearDisplay();
