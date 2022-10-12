let jsonData = [
    {
        "_id": "5e80777f673acf89c007ff91",
        "age": 27,
        "eyeColor": "green",
        "name": "Angelina Chang",
        "gender": "female",
        "email": "angelinachang@kangle.com",
        "phone": "+1 (938) 477-2821"
    },
    {
        "_id": "5e80777feee717674b817fd2",
        "age": 25,
        "eyeColor": "green",
        "name": "Deidre Cobb",
        "gender": "female",
        "email": "deidrecobb@kangle.com",
        "phone": "+1 (938) 477-2824"
    },
    {
        "_id": "5e80777fac368a4578dda85d",
        "age": 25,
        "eyeColor": "blue",
        "name": "Jolene Franks",
        "gender": "female",
        "email": "jolenefranks@kangle.com",
        "phone": "+1 (985) 536-3981"
    },
    {
        "_id": "5e80777ff3717874cbc78e44",
        "age": 31,
        "eyeColor": "brown",
        "name": "Waters Hardin",
        "gender": "male",
        "email": "watershardin@kangle.com",
        "phone": "+1 (938) 559-2224"
    },
    {
        "_id": "5e80777fe36842ea9e024fcd",
        "age": 34,
        "eyeColor": "green",
        "name": "Jody Chaney",
        "gender": "female",
        "email": "jodychaney@kangle.com",
        "phone": "+1 (878) 587-2602"
    },
    {
        "_id": "5e80777fafd591f57344eb33",
        "age": 31,
        "eyeColor": "green",
        "name": "Ortiz Maldonado",
        "gender": "male",
        "email": "ortizmaldonado@kangle.com",
        "phone": "+1 (986) 509-2753"
    },
    {
        "_id": "5e80777f20e48e9ada226862",
        "age": 25,
        "eyeColor": "brown",
        "name": "Stacy Burris",
        "gender": "female",
        "email": "stacyburris@kangle.com",
        "phone": "+1 (864) 577-3500"
    },
    {
        "_id": "5e80777faf334f84a2c90595",
        "age": 33,
        "eyeColor": "brown",
        "name": "Davenport Levy",
        "gender": "male",
        "email": "davenportlevy@kangle.com",
        "phone": "+1 (990) 600-2700"
    }
]

let result;
let sum = 0;
function tableMaker() {
    let dataTable = [];


    for (let data of jsonData) {
        dataTable.push(`
    <tr>
        <td>${data.age}</td>
    </tr>`);
        sum = sum + data.age;

    }
    result = sum / (dataTable.length);

    document.querySelector("#infoTable > tbody").innerHTML =
        dataTable.join("");


}

tableMaker();

function avg() {
    document.querySelector("#infoTable > tbody").innerHTML = `
    <tr>
        <td>${result}</td>
    </tr>`
}