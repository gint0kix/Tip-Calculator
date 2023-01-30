export default function optionFactory(value,text){
    const newOption = document.createElement('option');
    newOption.value = value;
    newOption.textContent = text;
    return newOption;
}