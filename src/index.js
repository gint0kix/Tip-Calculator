import './styles/main.css'
import addPerson from './functions/addPerson';
import inputDataListCreator from './components/InputDataListCreator';
import menu_icon from './imageAssets/menu_icon.svg'
import calculateTips from './functions/calculateTips';
import updateDisplay from './functions/updateDisplay';
const peopleMap = new Map();
const employeeNames = ['Josh B','Daniela H','Dana M','Kyle F','Chris G','Adrien B','Kayla G',
                        'Naeem H','Will J','Habiba M','Zeshaan N','Mickey P','Jacob P','Sy P','Ash R'
                        ,'Emma S'];

const addButton = document.getElementById('addPerson-btn');
addButton.addEventListener('click',(e)=>{
    addPerson(e,peopleMap);
});

const newDataList = inputDataListCreator(employeeNames,'nameDataList');
document.getElementById('nameInput').appendChild(newDataList);
document.getElementById('nameInput').setAttribute('list','nameDataList');

const menuUI = document.getElementById('menu');
menuUI.src = menu_icon;
menuUI.addEventListener('click',()=>{

})
const calculateButton = document.getElementById('calculationSubmitBtn');
calculateButton.addEventListener('click',(e)=>{
    calculateTips(peopleMap);
    updateDisplay(peopleMap);
})


