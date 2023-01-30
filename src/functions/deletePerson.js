export default function deletePerson(e,mapRemovingFrom){
    const personRow = e.target.parentElement;
    const userID = personRow.dataset.personID;
    mapRemovingFrom.delete(userID);
    personRow.remove();
}