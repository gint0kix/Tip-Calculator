import optionFactory from "../functions/optionFactory";
export default function inputDataListCreator(listOfNames,dataListId){
    const newDataListElement = document.createElement('datalist');
    newDataListElement.id = dataListId;
    for(let name of listOfNames){
        const personName = name.split(' ');
        const newOption = optionFactory(`${personName[0]} ${personName[1][0]}`,name);
        newDataListElement.appendChild(newOption);
    }
    return newDataListElement;
}