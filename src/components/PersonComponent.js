import deletePerson from "../functions/deletePerson";
export default function createPersonComponent(personObject,mapRemovingFrom){
    const personContainer = document.createElement('div'); 
    const nameDiv = document.createElement('div');
    const hoursDiv = document.createElement('div');
    const tipsDiv = document.createElement('div');
    const deleteButton = document.createElement('button');

    nameDiv.classList.add('personName');
    hoursDiv.classList.add('personHours');
    tipsDiv.classList.add('personTips');
    personContainer.classList.add('personContainer');
    deleteButton.classList.add('deleteButton');

    nameDiv.textContent = personObject.name;
    hoursDiv.textContent = personObject.hoursWorked;
    tipsDiv.textContent = personObject.netTips;
    deleteButton.textContent = 'X';

    deleteButton.onclick = (e) =>{deletePerson(e,mapRemovingFrom)};
    personContainer.appendChild(nameDiv);
    personContainer.appendChild(hoursDiv);
    personContainer.appendChild(tipsDiv);
    personContainer.appendChild(deleteButton);

    personContainer.dataset.personID = personObject.personID;
    return personContainer;
}