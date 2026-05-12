// MỘT SỐ HÀM BUILT-IN

// alert('xin chào các bạn')

// var res = confirm('bạn đã trên 18 tuổi')
//console.log(res) // Ok thì giá trị là true, còn hủy thì giá trị là false

//var a = prompt("mời bạn nhập số: ", 0)
// 0 ở đây đại diện giá trị default, và kiểu trả về của hàm này là giá trị string
//console.log(typeof(a)) // string

// setTimeout(hàm, thời gian): chạy duy nhất 1 lần sau 1 khoảng thời gian
// setTimeout(function test (){
//     console.log('da duoc 5 giay')
// }
// , 5000)

//setInterval(hàm, thời gian): chạy lặp lại hàm sau 1 khoảng thời gian
// var b = setInterval(function test(){
//     console.log('b')
// }, 1000)

// setTimeout(
//     function test2(){
//         console.log('da duoc 5 giay')
//         clearInterval(b)
//     }
// , 5000)


// String
// var fulname = 'le van a'
// console.log(fulname.length)


// indexOf('chuỗi cần tìm', startValue): tìm vị trí đầu tiên của 1 chuỗi nằm trong 1 chuỗi, nếu không tìm thấy trả về -1
// Nếu startValue không được xác định, nó sẽ tìm từ vị trí 0
// var mystring = "Xin chào! Tôi tên là test. Tôi năm nay 18 tuổi!"
// console.log(mystring.indexOf('Tôi')) // 10
// console.log(mystring.indexOf('Tôi', 11)) // 27
// console.log(mystring.indexOf('!'))
// console.log(mystring.indexOf('hello'))

// lastIndexOf(search_value, start): tìm kiếm giá trị cuối cùng của từ cần tìm, và chiều tìm kiếm là từ phải sang trái
// giá trị mặc định sẽ bắt đầu từ cuối chuỗi
// var mystring = "Xin chào! Tôi tên là test. Tôi năm nay 18 tuổi!"
// console.log(mystring.lastIndexOf('Tôi')) // 27
// console.log(mystring.lastIndexOf('Tôi', 22)) // 10
// console.log(mystring.lastIndexOf('Tôi', 0)) // -1


//slice(start, end): cắt một chuỗi và trả về 1 chuỗi mới, chuỗi ban đầu không ảnh hưởng ==> cắt từ vị trí start đến vị trí end - 1.
// var mystring = "Xin chào! Tôi tên là test. Tôi năm nay 18 tuổi!"
// var test = 'Dat123'
// var res1 = test.slice(1, 3)
// var res2 = test.slice(0)
// var res3 = test.slice(-1)
// console.log(res1) // at
// console.log(res2) //Dat123
// console.log(res3) // 3





//replace(searchValue, newValue)
//chỉ tìm từ cần thay thế đầu tiên để thay thế
var mystring = "Xin chào! Tôi tên là test. Tôi năm nay 18 tuổi!"
console.log(mystring.replace('Tôi', 'Mình'))
//Xin chào! Mình tên là test. Tôi năm nay 18 tuổi

//sử dụng Regex để thay thế toàn bộ chữ
console.log(mystring.replace(/Tôi/g, 'Mình'))
// Xin chào! Mình tên là test. Mình năm nay 18 tuổi!





//toUpperCase(): VIẾT HOA TẤT CẢ CÁC CHỮ CÁI
// và 
// toLowerCase(): viết thường tất cả các chữ cái
var mystring = "Xin chào! Tôi tên là test. Tôi năm nay 18 tuổi!"
console.log(mystring.toLowerCase())
// xin chào! tôi tên là test. tôi năm nay 18 tuổi!
console.log(mystring.toUpperCase())
// XIN CHÀO! TÔI TÊN LÀ TEST. TÔI NĂM NAY 18 TUỔI!




//trim(): dùng để bỏ đi khoảng trắng ở 2 đầu, các khoảng trắng giữa các ký tự không bị loại bỏ
var mystring = "      Xin chào! Tôi tên là test. Tôi năm nay 18 tuổi!       "
console.log(mystring.trim())




// charAt(): Dùng để lấy ký tự thông qua index
// string.charAt(index)
var mystring = 'Dat'
console.log(mystring.charAt()) // lấy ký tự đầu tiên
console.log(mystring.charAt(1)) // a 




// split(): chuyển 1 chuỗi thành 1 array
var mystring = `html, css, java`
console.log(mystring.split()) // cả string là 1 phần tử
console.log(mystring.split(', ')) // chia theo ", " thì nó sẽ trả về các mảng gồm các phần tử html, css, java

// Trường hợp dùng regex
var mystring2 =  `   html,     css,   java   `
var space_regex = /\s+/g
var mystring1 = mystring2.replace(space_regex, "")
console.log(mystring1) //html,css,java




// Làm việc với Number
var a = 10
var b = 'test'
var res = a / b
console.log(res)
console.log(typeof(res)) // trả về kiểu number, dễ gây ra bug nên ta dùng cách sau để check kiểu NaN
if(isNaN(res)){
    console.log('Số này bị lỗi')
}
else {
    console.log('Đây là số: ' + res)
}


// toString(): chuyển 1 số thành kiểu string
var a = 10 //typeof = number
var b = a.toString() // typeof = string
var c = (10).toString() // typeof = string



//toFixed(digits): Dùng để làm tròn số thập phân
// nếu digits không được điền thì nó sẽ làm tròn theo số sau dấu phẩy
// còn không thì check số phía sau digits để làm tròn: >= 5 upper, < 5 lower




// 9. Làm việc với array

//toString(): chuyển array thành 1 string
var a = [1, 2, 3, 4, 5]
console.log(a, typeof a)
console.log(a.toString(), typeof a)



//join(): chuyển array thành 1 string, có thể thêm dấu bất kỳ ngăn cách giữa các phần tử
var list = ['html', 'css', 'java_script']
console.log(list.join()) // html,css,java_script
console.log(list.join(' ')) // html css java_script
console.log(list.join(' - ')) // html - css - java_script




// pop(): Dùng để xóa phần tử cuối cùng của mảng, trả về phần tử cuối mảng
// Mảng ban đầu sẽ bị ảnh hưởng
var list = ['html', 'css', 'java_script']
console.log(list.pop()) // java_script
console.log(list) // ['html', 'css']





//push(): Thêm 1 hoặc nhiều phần tử vào cuối mảng
// Trả về độ dài mới của mảng
var list = ['html', 'css', 'java_script']
console.log(list.length) // 3
console.log(list.push('python', 'c++'))
console.log(list)
console.log(list.length) // 5




//shift(): dùng để xóa phần tử đầu mảng
var list = ['html', 'css', 'java_script']
console.log(list.shift()) // HTML
console.log(list) // ['css', 'java_script']





// unshift(): thêm 1 hoặc nhiều phần tử vào đầu mảng, trả về độ dài mới của mảng
var list = ['html', 'css', 'java_script']
console.log(list.unshift('1', '2'))
console.log(list) // ['1', '2', 'html', 'css', 'java_script']





// splice(): Xóa hoặc chèn phần tử mới vào mảng, bất kỳ vị trí nào, có ảnh hưởng đến mảng gốc
// cú pháp: array.splice(index, howmany, item1, ...., itemX)
    /*
        index: Vị trí thêm hoặc xóa
        howmany: số phần tử cần xóa (optional)
        item1, ..., itemX: phần tử cần thêm
    */
// trả về mảng bị xóa
var list = ['html', 'css', 'java_script']
console.log(list.splice(2, 0, 'bootstrap', 'typescript', 'c++', 'java')) // trả về []
console.log(list) // ['html', 'css', 'bootstrap', 'typescript', 'c++', 'java', 'java_script']
var bi_xoa = list.splice(2, 3)
console.log(bi_xoa) // ['bootstrap', 'typescript', 'c++']
console.log(list) // ['html', 'css', 'java', 'java_script']





// concat(): dùng để nối 2 array, không ảnh hưởng mảng gốc
var list1 = ['html', 'css', 'java_script']
var list2 = ['python', 'golang', 'kotlin']
var list3 = [1, 2, 3]
console.log(list1.concat(list2, list3)) 
// ['html', 'css', 'java_script', 'python', 'golang', 'kotlin', 1, 2, 3]





//slice(start, end): cắt các phần tử và trả về 1 mảng mới, chuỗi ban đầu không ảnh hưởng ==> cắt từ vị trí start đến vị trí end - 1.

var list1 = ['html', 'css', 'java_script']
console.log(list1.slice(0, 1)) // ['html']
console.log(list1.slice(0, 2)) // ['html', 'css']
console.log(list1.slice(-1)) // ['java_script]
