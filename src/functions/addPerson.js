import createPersonObject from "./PersonObjectFactory";
import createPersonComponent from "../components/PersonComponent";
export default function addPerson(e,mapAppendingTo){
    const newPersonNameInput = document.getElementById('nameInput');
    const newPersonHoursInput = document.getElementById('hourInput');
    const containerDisplay = document.getElementById('container');
    const newPersonNameValue = newPersonNameInput.value;
    const newPersonHourValue = newPersonHoursInput.value;
    if(newPersonNameValue==="" || newPersonHourValue===""){
        alert('Please Enter Both Fields before adding');
        return;
    }
    if(newPersonHourValue<0){
        alert('Please Enter an hour value greator than 0');
        return;
    }
    const newPersonObject = createPersonObject(newPersonNameValue,newPersonHourValue);
    mapAppendingTo.set(newPersonObject.personID,newPersonObject);
    const newPersonComponent = createPersonComponent(newPersonObject,mapAppendingTo);
    containerDisplay.appendChild(newPersonComponent);

    newPersonNameInput.value = '';
    newPersonHoursInput.value = '';
    
}