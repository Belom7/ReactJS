/* 1. Написать функцию loop, которая будет принимать параметры: times (значение по умолчанию = 0), callback (значение по умолчанию = null) и будет в цикле (times раз), вызывать функцию callback. Если функцию не передана, то цикл не должен отрабатывать ни разу. Покажите применение этой функции */

const loop = (times = 0, callback = null) => {
    if (times == 0 || callback == null) {
        console.log('pip');
    } else {
        for (let x = 1; x <= times; x++) {
            console.log(callback);
        }
    }
};

loop(5, 6);

/* 2. Написать функцию calculateArea, которая будет принимать параметры, для вычисления площади (можете выбрать какую то конкретную фигуру, а можете, основываясь на переданных параметрах, выполнять требуемый алгоритм вычисления площади для переданной в параметрах фигуры) и возвращать объект вида: { area, figure, input }, где area - вычисленная площадь, figure - название фигуры, для которой вычислялась площадь, input - входные параметры, по которым было произведено вычисление. */

const calculateArea = (width, height) => {
    return( {
        area: width*height,
        figure: 'square',
        input: [width,height]
    })
};

console.log(calculateArea(4,5))

/* 3. Необходимо написать иерархию классов вида:
Human -> Employee -> Developer
Human -> Employee -> Manager
Каждый Менеджер (Manager) должен иметь внутренний массив своих сотрудников (разработчиков), а также методы по удалению/добавлению разработчиков.
Каждый Разработчик (Developer) должны иметь ссылку на Менеджера и методы для изменения менеджера (имеется ввиду возможность назначить другого менеджера).
У класса Human должны быть следующие параметры: name (строка), age (число), dateOfBirth (строка или дата)
У класса Employee должны присутствовать параметры: salary (число), department (строка)
В классе Human должен присутствовать метод displayInfo, который возвращает строку со всеми параметрами экземпляра Human.
В классе Employee должен быть реализовать такой же метод (displayInfo), который вызывает базовый метод и дополняет его параметрами из экземпляра Employee
Чтобы вызвать метод базового класса, необходимо внутри вызова метода displayInfo класса Employee написать: super.displayInfo(), это вызовет метод disaplyInfo класс Human и вернет строку с параметрами Human'a. */

class Human {
    constructor(name,age,dateOfBirth) {
        this.name = name, 
        this.age = age,
        this.dateOfBirth = dateOfBirth
    }
    displayInfo() {
        return [this.name, this.age, this.dateOfBirth]
    }
}

const human = new Human('max',29,1991)
console.log(human.displayInfo())

// class Employee extends Human {
//     constructor(name, age, dateOfBirth, salary, departament) {
//         super(name, age, dateOfBirth),
//         this.salary = salary,
//         this.departament = departament
//     }
//     displayInfo() {
//         return [...super.displayInfo(), this.salary, this.departament]  
//     }        
// }

// // class Developer {
// //     constructor() {}
// // }

// // class Manager {
// //     constructor() {
// //         let Arr = []
// //     }
// // }


// // const human = new Human('Max',29,1991)
// // console.log(human.displayInfo())

// const employee = new Employee('Max',29,1991,4,'xxxx')
// console.log(employee.displayInfo())
