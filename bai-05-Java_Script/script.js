var button = document.querySelector('#cach3')
button.onclick = () =>{
    alert('Hello word3')
}


// var a = 10
var b = 3
var c = a + b
var full_name = 'test'
console.log(c)


var res = a + full_name
console.log(res) // 10test

var e = b - a

var f = a * b

var g = (a / b)
console.log(g)
var h = a ** b // phép lũy thừa

var k = a % b // chia lấy dư
console.log(k)


var n = a++
var m = --a


var e = 2
var f = 3
f **= e
console.log(f)


// CÁC TOÁN TỬ SO SÁNH
// JS có dạng kiểu so sánh nghiêm ngặt (===, !==) và so sánh không nghiêm ngặt (==, !=)
var fake_str = 20
var real_str = "20"
console.log(fake_str == real_str) // true

var fake_str1 = 20
var real_str1 = "20"
console.log(fake_str1 === real_str1) // false


// Toán tử logic: &&, ||, !
// var a = 10;
var b = 20;
var c = 30;
var d = 40;
// var e = a > b && c < d;
var e = a > b || c < d;
console.log(e);
console.log(!e);


// 4.1. Kiểu dữ liệu nguyên thủy (Primitive Data)
  // Kiểu Number
    //var a = 10; // Số nguyên
    var b = 10.5; // Số thực
    var c = Infinity; // Số dương vô cùng
    var d = -Infinity; // Số âm vô cùng
    var e = 10 / "a"; // NaN
    console.log(e);

  // Kiểu String
    var msg1 = 'Đây là string dùng dấu nháy đơn';
    var msg2 = "Đây là string dùng dấu nháy kép";
    var msg3 = `Đây là string dùng dấu backtick`; // template string trong ES6

  //Kiểu Boolean
    var isDarkMode = true; // Chế độ dark mode
    var isDarkMode = false; // Chế độ light mode


  //Kiểu Undefined
      var test;
      console.log(test);

  //Kiểu Null
    var a = null;
    console.log(a);

// 4.2. Dữ liệu phức tạp (Complex Data)
  // Kiểu Function
    // var a = 10 + 20 + 30;
    
    // function tinhTong(a, b, c) {
    //   return a + b + c;
    // }

    // var x = tinhTong(10, 20, 30);
    // console.log(x);

    // S = 3.14 * R;
    var r1 = 20;
    // var s1 = 3.14 * r1;

    var r2 = 30;
    // var s2 = 3.14 * r2;

    function tinhDTHT(r) {
      return 3.14 * r;
    }

    var s1 = tinhDTHT(r1);
    // console.log(s1);

    var s2 = tinhDTHT(r2);
    // console.log(s2);

// Kiểu Object
    //Object
    var infoUser = {
        username: "test",
        password: "test1"
    }
    console.log(infoUser.password) // test1
    console.log(infoUser.username) // test

    //Array
    var list_User = [
        'user1', 'user2', 'user3'
    ]
    console.log(list_User)