
function activitySelection(acitivities=[]){
    acitivities.sort((a,b)=>a.end - b.end)

    const selected = []

    let lastEndTime = 0

    for(let i = 0; i < acitivities.length; i++){
        if(acitivities[i].start >= lastEndTime){
            selected.push(acitivities[i])
            lastEndTime = acitivities[i].end

        }
    }

    return selected
}

const activities = [
  { start: 1, end: 3 },
  { start: 2, end: 4 },
  { start: 3, end: 5 },
  { start: 0, end: 6 },
  { start: 5, end: 7 },
  { start: 8, end: 9 },
  { start: 5, end: 9 }
];

const result = activitySelection(activities);
console.log("Selected activities:", result);
