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
