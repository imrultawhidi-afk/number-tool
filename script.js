function processNumbers(){

let file1 =
document
.getElementById('file1')
.value
.split(/\r?\n/)
.map(x => x.trim())
.filter(x => x);

let file2 =
document
.getElementById('file2')
.value
.split(/\r?\n/)
.map(x => x.trim())
.filter(x => x);

let set1 = new Set(file1);
let set2 = new Set(file2);

let result = [];

set1.forEach(num => {
if(!set2.has(num)){
result.push(num);
}
});

set2.forEach(num => {
if(!set1.has(num)){
result.push(num);
}
});

document
.getElementById('result')
.value = result.join('\n');

}
