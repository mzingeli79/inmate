const searchButton = document.querySelector('.search-button'); //button
const inmateList = document.querySelector('.inmate-list'); //ul
const findInmate = document.querySelector('.find-this-inmate'); //textbox
const displayText = document.querySelector('.display-text'); //display text
const inmateHead = document.querySelector('.heading');
const resetButton = document.querySelector('.reset-button');

const inmates = [
  {
    id:1,
    firstName : 'alex',
    lastName : 'Vause',
    arrestedFor : 'Drug Distribution',
    sentence : '6 years'
  },

  {
    id:2,
    firstName : 'piper',
    lastName : 'Chapman',
    arrestedFor : 'Drug Smuggling',
    sentence : '2 years'
  },
  {
    id:3,
    firstName : 'galina',
    lastName : 'Reznikov',
    arrestedFor : 'Attempted Murder',
    sentence : '10 years'
    },
    {
      id:4,
      firstName : 'morello',
      lastName : 'Mucio',
      arrestedFor : 'Theft',
      sentence : '5 years'
      },
      {
        id:5,
        firstName : 'susan',
        lastName : 'Williams',
        arrestedFor : 'Murder',
        sentence : 'Life'
        },
        {
          id:6,
          firstName : 'nikols',
          lastName : 'McCutcheon',
          arrestedFor : 'Drug Possession',
          sentence : '4 years'
          },
          {
            id:7,
            firstName : 'tasha',
            lastName : 'Jefferson',
            arrestedFor : 'Drug Possession',
            sentence : '4 years'
            }
];

const text = 'In-mate is not in the System';
const headtext = 'In-mate Information:';


searchButton.addEventListener('click', function() {
  for(let i = 0; i < inmates.length; i++){
    if(inmates[i].id == findInmate.value || inmates[i].firstName == findInmate.value){
      const head = document.createElement('H1');
      const newLi = document.createElement('LI');
      const newLi1 = document.createElement('LI');
      const newLi2 = document.createElement('LI');
      const newli3 = document.createElement('Li');
      const headContent = document.createTextNode(headtext);
      const liContent = document.createTextNode('Name: ' + inmates[i].firstName);
      const liContent1 = document.createTextNode('Last Name: ' + inmates[i].lastName);
      const liContent2 = document.createTextNode('Arrested For: ' + inmates[i].arrestedFor);
      const liContent3 = document.createTextNode('Sentence: ' + inmates[i].sentence);
      head.appendChild(headContent);
      newLi.appendChild(liContent);
      newLi1.appendChild(liContent1);
      newLi2.appendChild(liContent2);
      newli3.appendChild(liContent3);

     return inmateHead.appendChild(head), inmateList.appendChild(newLi),inmateList.appendChild(newLi1),inmateList.appendChild(newLi2),inmateList.appendChild(newli3);
    }
  }
  const newP = document.createElement('H1');
  const pContent = document.createTextNode(text);
  newP.appendChild(pContent);
  return displayText.appendChild(newP);
});
