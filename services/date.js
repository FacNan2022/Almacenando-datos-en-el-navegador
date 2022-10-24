export const uniqueDates = (tasks) => {
const unique = [];

tasks.forEach((task) =>{
    if(!unique.includes(task.dateFormt))unique.push(task.dateFormt)    
});
return unique;
};

export const orderDates = (dates) => {
    return dates.sort((a, b) => {
       const firstDate = moment(a, 'DD/MM/YYYY');
       const secondDate = moment(b, 'DD/MM/YYYY');
       return firstDate - secondDate;
    });
};