const findTheOldest = function(people) {
    
    const oldest=people.reduce((old,item)=>{
        const oldAge=getAge(old.yearOfBirth,old.yearOfDeath);
        const curAge=getAge(item.yearOfBirth,item.yearOfDeath);
        return oldAge<curAge ? item:old;
    });
    return oldest;
};

function getAge(personB,personD){
    if (!personD){
        personD=new Date().getFullYear();
    }
    return personD-personB;

}
// Do not edit below this line
module.exports = findTheOldest;

