import { v4 as uuidv4 } from 'uuid';
export default function createPersonObject(name,hours){
    
    return {
        'name':name,
        'hoursWorked':hours,
        'grossTips':'N/A',
        'netTips':'N/A',
        'personID':uuidv4()
    }
}