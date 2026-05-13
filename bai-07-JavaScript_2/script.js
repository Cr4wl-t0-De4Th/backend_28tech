//if else cơ bản
var a = 10
var b = 20

if (a > b){
    console.log('a lớn hơn b')
}
else if(a === b){
    console.log('hai số a và b bằng nhau')
}
else{
    console.log('b lớn hơn a')
}



// Toán tử ba ngôi
var b = prompt('Nhập tuổi: ')
var res = parseInt(b) >= 18 ? 'bạn đã đủ 18 tuổi' : 'bạn chưa đủ 18 tuổi'
console.log(parseInt(b), typeof b)
console.log(res)





// Switch case
// mỗi nhánh sẽ có 1 điều kiện cụ thể và điều kiện đó phải sử dụng toán tử so sánh bằng
// nếu gặp từ khóa break thì nó sẽ dừng lại
var c = 18
switch (c){
    case 16:
    case 17: // có thể gom nhóm các case
        console.log('16 hoặc 17 tuổi')
    case 18:
        console.log('18 tuổi')
        break // (dừng lại ở case này khi thõa mãn tránh check thêm dòng dưới, nếu bỏ break thì nó cũng sẽ in ra 19 tuổi vàkhông thõa mãn)
    case 19:
        console.log('19 tuổi')
    default:
        console.log('không thõa mãn')
}





// Vòng lặp For
for(var i = 0; i <= 10; i++){
    console.log(i)
}

for(var i = 0; i <= 10; i++){
    for(var j = 0; j <= 10; j++){
        console.log(`Hàng ${i} Cột ${j}`)
    }
}




// Vòng lặp For In: dùng để lấy ra key của 1 object (có thể áp dụng cho string và array nhưng không khuyến khích)
var infoUser = {
    fullname: `Quang Dat`,
    phone: `1234556678`,
    email: `test@gmail.com`
}

for (const key in infoUser) {
    console.log(typeof key) // string
    const element = infoUser[key];
    console.log(`${key}: ${element}`)
}
// bắt buộc phải dùng infoUser[key] bởi vì vòng lặp sẽ xem xét cái biến key như là 1 string, thì khi đó dùng infoUser.key sẽ trả ra Undefine




// Vòng lặp For of: dùng để lấy ra phần tử của 1 array, string
// Không áp dụng được với object
var arr = [1, 2, 3, 4, 5, 6, 7, 8, 9]
var str = "hello world"
for (const element of arr) {
    console.log(element, typeof element)
}
for (const element of str) {
    console.log(element)
}




// vòng lặp while
var i = 1
while(i <= 6){
    console.log(i) 
    i++
}



// vòng lặp do...while: luôn thực hiện ít nhất 1 lần lặp
var i = 1
do{
    console.log(i)
    ++i
}
while(i >= 2 && i <= 10)




// Cách khai báo biến
// từ khóa var
var a = 10
if(a === 10){
    var b = 20
    console.log(b)
}
// console.log(b) // vẫn in ra được b ==> chứng tỏ var là biến toàn cục


// từ khóa let: chỉ có phạm vi truy cập trong khối khai báo
var a = 10
if(a === 10){
    let test = 20
    console.log(test)
}
console.log(test)



// từ khóa constant: chỉ có phạm vi trong khối khai báo, là hằng số nên không thể gán lại giá trị
var a1 = 10
if (a1 === 10){
    const b1 = 20
    console.log(b1)
    b1 = 21 // lỗi không thể gán
    console.log(b1)
}
console.log(b1)


