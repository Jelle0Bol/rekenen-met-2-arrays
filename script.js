const arr = [1,2,3,4,5,6,7,8,9,10];
const arr2 = [2,4,6,8,10,12,14,16,18,20];

const optellen = arr.map((a, i) => a + arr2[i]);

document.getElementById("optellen").innerHTML = optellen;

const aftrekken = arr2.map((a, i) => a - arr[i]);

document.getElementById("aftrekken").innerHTML = aftrekken;

const vermenigvuldigen = arr.map((a, i) => a * arr2[i]);

document.getElementById("vermenigvuldigen").innerHTML = vermenigvuldigen;

const delen = arr2.map((a, i) => a / arr[i]);

document.getElementById("delen").innerHTML = delen;