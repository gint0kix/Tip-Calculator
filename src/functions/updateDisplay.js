export default function updateDisplay(mapOfPeople){
    const container = document.getElementById('container');
    mapOfPeople.forEach((value,key)=>{
        const currentUserId = key;
        const currentUserTips = value.netTips;
        console.log(`Current User=${currentUserId} Tips=${currentUserTips}`);
        const currentUserTipDiv = document.querySelector(`[data-person-i-d='${currentUserId}'] .personTips`);
        currentUserTipDiv.textContent = `$${currentUserTips}`;
    })
}