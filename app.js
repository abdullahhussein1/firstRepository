let arr =[
    {firstName:'Abdullah',lastName:'Hussein'},
    {firstName:'Muhammed',lastName:'Yasin'},
    {firstName:'Omer',lastName:'Rizgar'}
]
let last = arr.find(obj=>obj.lastName==='Hussein')
console.log(last);