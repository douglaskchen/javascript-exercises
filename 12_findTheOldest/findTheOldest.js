const findTheOldest = function(peopleArr) {
    let peopleAgeArr = []
    
    peopleArr.forEach((person, index) => {
        if (Object.hasOwn(person, 'yearOfDeath')) {
            peopleAgeArr[index] = person.yearOfDeath-person.yearOfBirth;
        }
        else {
            peopleAgeArr[index] = (new Date().getFullYear()-person.yearOfBirth);
        }
    })

    let resultIndex = 0;
    let longestLifeSpan = 0;

    peopleAgeArr.forEach((age, index) => {
        if (age > longestLifeSpan) {
            longestLifeSpan = age;
            resultIndex = index;
        }
    })

    return peopleArr[resultIndex];
};

// Do not edit below this line
module.exports = findTheOldest;
