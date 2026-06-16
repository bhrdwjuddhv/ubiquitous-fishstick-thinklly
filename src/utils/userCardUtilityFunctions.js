function TotalUsers (users){
    return users.length
}

function AverageAge(users){
    let ageSum = 0;
    users.forEach(user => {
        ageSum += user.dob.age
    })
    return Math.round(ageSum/users.length);
}

function uniqueCountries(users){

    const countries = new Set(
        users.map(user => user.location.country)
    );
    console.log("Countries:", countries);
    return countries.size;
}








export {
    TotalUsers,
    AverageAge,
    uniqueCountries,

}