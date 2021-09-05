
            /*1 В какую четверть попадает стрелка минутная на часах в зависимости от введенных количества минут */
/*let x = prompt ('vvedite minuti!');*/
/*switch (x) { 
    case (x >= 0 && x <= 14): console.log("1 chetvert'"); break;
    case (x >= 15 && x <= 29): console.log("2 chetvert'"); break;
    case (x >= 30 && x <= 44): console.log("3 chetvert'"); break;
    case (x >= 45 && x <= 59): console.log("4 chetvert'"); break;
}*/
/*let chetvert = (x) => {
    let part = Math.ceil(x/15);
    return part;
}*/
            /*2 Найти произведение чисел от лим1 до лим2 */
/*let i, result=1;
let MultiLimit = (limit1, limit2) => {
    for (i=limit1; i<=limit2; i++){
        result*=1;
    }*/
/*
    for (; limit1 <= limit2 ; limit1++){
        result*=limit1;
    }
*/
/*
    return result;
}
console.log(MultiLimit(1,20));
*/
/*
function task7(array){
    return array;
}

let array = [0,1,-2,0,3,-4,0,5,-100,5,9];

//удалить все 0 и отрицательные

const filteredArray = array.filter(index => index>0 ).filter(index=> index<5);
console.log(filteredArray);

let arr=['val1',[5,5,3,23,6,1,6,3,2,1,3],'val1','val1','val1','val1'];

// сложность n^2 (с рекурсией)
function fibonachi(n){
    if (n<1) {
        return;
    }
    if (n<=2) {
        return 1;
    }
    return fibonachi (n-1) + fibonachi (n-2);
}

// сложность для машины сильно проще, чем для человека
function fibonachi_2(n){
    if (n<1){return;}
    if (n<=2){return 1;}
    let fib1 = 1, fib2 = 1;
    let sum = fib1+fib2;
    for (let i=3; i<n; i++){
        fib1=fib2;
        fib2=sum;
        sum=fib1+fib2;
    }
    return sum;
}

//заморозка объекта

const user = Object.freeze({
    name:'john',
    surname: 'fox',
    age: 20,
    isMale: true,
    role: ROLE.admin,
    action: ACTION(),
})

//const READ = 'READ';

//назначение прав доступа

// admin, moderator, user
const ROLE = Object.freeze({
    admin: 'admin',
    moderator: 'moderator',
    user: 'user',
});
// create, read, update, delete
const ACTION = Object.freeze({
    create: 'create',
    read: 'read',
    update: 'update',
    delete: 'delete',
});
// role rights

/*
const user1={
    login: 'user1',
    role_access: ROLE.user,
    action_access: {ACTION.read},
}
*/

//map: set, get, has
/*
let rights = new Map();

rights.set(ACTION.create,[ROLE.admin,ROLE.moderator]);
rights.set(ACTION.read,[ROLE.moderator,ROLE.user,ROLE.user]);
rights.set(ACTION.update,[ROLE.moderator]);
rights.set(ACTION.delete,[ROLE.admin]);

function checkPermission (action,role) {
    if (rights.has(action)){
        return rights.get(action),includes(role);
    }
    return false;
}

const array1 = [1,2,3,4,5,6,7,8,9,10];
//el1 = 1, rest = [2,3,4,5,6,7,8,9,10]
const [el1, el2, ...rest] = arr;

const arr2 = [1,2,[3,4,5,6],7,8,9,10];
//5
const [,,[,,el5]] = arr2;

// object

const user3 = {
    name:'tom',
    surname:'fox',
    age: 20,
    book: {
        cover: {
            pages:200,
            format:'20x45',
            copies:5000,
        },
        bookName:'JavaScript',
        bookYear: 2021,
    },
};
//name
console.log(user3.name);
//или
const {name} = user3;

//cover
const {book:{cover}} = user3;

//pages
const {
    book:{
        cover:{pages},
    },
} = user3;

// 1
function getUserFullName (user3) {
    return `${user.name} ${user.surname}`;
}
// 2
function getUserFullName2 (user3){
    const {name, surname} = user3;
    return `${name} ${surname}`;
}


//object and function

const user2 = {
    name: 'Tom',
    surname: 'Fox',
    age: 20,
    lang: ['ua', 'eng', 'sp'],
    car: {name: 'Mazda', model: 'Miata MX5', year: 2021, engine:{ name: 'LF', year:2001},},
    greeting1: function () {
        console.log('Hello!');
    },
    greeting2: function () {
        console.log(`Hello, ${this.name}!!`);
    },
    outThis: function () {
        console.log(this);
    },
};

user2.greeting1();
user2.greeting2();

console.log(this); // window
user2.outThis(); // tom fox

// функции конструкторы

function stud (name, surname){
    this.name = name;
    this.surname = surname;
};

const Vasya = new stud ('Vasya','Petrov');
const Masha = new stud ('Masha', 'Petrova');
const Petya = new stud ('Petya', 'Ivanov');

console.log(Vasya);
console.log(Masha);
console.log(Petya);

console.log(Vasya.name);
console.log(Vasya.surname);
*/

class squere {
    constructor (size){
        this.size = size;
    }
    perimetr(){
        return this.size+this.size;
    }
    area (){
        return this.size*this.size;
    }
}

let obj1 = new squere (10);
let obj2 = new squere (15);
let obj3 = new squere (5);

console.log('heh');
console.log(obj1.area());
console.log(obj1.perimetr());
console.log(obj2.area());
console.log(obj2.perimetr());




