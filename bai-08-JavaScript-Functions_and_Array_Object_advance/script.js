// Các loại hàm
// Declaration function (Hàm định nghĩa)
// Có tính hoisting (nghĩa là gọi được hàm trước lúc khai báo hàm đó)
// Có thuộc tính arguments chính là 1 mảng gồm các đối số truyền vào
function test(a, b, c, d){
    console.log(arguments)
    let tong = 0
    for (const element of arguments) {
        tong += element
    }
    return tong
}
var tong = test(1, 2, 3, 4)
console.log(tong)









// Expression Function
// Không có tính hoisting
// Có đối tượng arguments
var test2 = function (a, b, c, d) {
    let tong = 0
    for (const element of arguments) {
        tong += element
    }
    return tong
}
var ketqua = test2(1, 2, 3, 4)
console.log(ketqua)









// Arrow Function: thường được dùng vì cú pháp ngắn gọn 
// Không có tính hoisting
// Không có arguments  
// var test3 = (...arg) =>{
//     let tong = 0
//     for (const element of arg) {
//         tong += element
//     }
//     return tong
// }
// var ketqua = test3(1, 2, 3, 4)
// console.log(ketqua)

// setTimeout(() => console.log('3 giây'), 3000)

// ví dụ: Tính tổng các số chẵn của 1 mảng = Arrow Funtions
// const tong_so_chan = (...arg) =>{
//     let sum = 0
//     for (let element of arg) {
//         sum += parseInt(element)
//     }
//     return sum
// }
// var test = tong_so_chan(...prompt('nhập 3 số').replace(/\s+/g, ' ').trim().split(' '))
// console.log(test)

// Ví dụ 2: Cho người dùng nhập số n lớn hơn 0, dựa vào số n tính biểu thức: 1/n + 2/n + 3/n +...+ n/n
// var bieu_thuc = (num) =>{
//     const number = parseInt(num)
//     let tong = 0
//     for(let i = 1; i <= number; i++){
//         tong += i / number
//     }
//     return tong
// }

// do{
//     var nhapso = parseInt(prompt('Nhập số n').replace(/\s+/g, '').trim())
//     var check = (Number.isNaN(nhapso) || nhapso <= 0)
// }
// while (check)

// console.log(bieu_thuc(nhapso))











// try catch là 1 khối lệnh dùng để bắt lỗi chương trình
/*
try{
    //chạy vào đây đầu tiên
}
catch(error){
    //bắt được lỗi thì vào đây
}
finally{
    //luôn chạy vào nhánh cuối cùng này
}
*/
// const a = 10
// try{
//     console.log(`a = ${a}`)
// }
// catch (error){
//     console.log(error)
// }
// finally{
//     console.log('Luôn chạy vào đây')
// }\











// Làm việc với Object nâng cao

// THÊM 1 KEY MỚI VÀO OBJECT
var infoUser = {
    name: 'Lê Văn A',
    password: 'qwerty'
}
//cách 1
infoUser.phone = '1234'
//cách 2
infoUser['email'] = 'test@1234.com'
console.log(infoUser)





//  XÓA 1 KEY KHỎI OBJECT: giả sử khi xử lý dữ liệu từ backend đưa về frontend để in ra màn hình user thì ta nên xóa thuộc tính password này đi
delete infoUser.password












// Làm việc với Array nâng cao 
// forEach: duyệt qua mỗi phần tử của mảng và thực hiện 1 hành động nào đó, thay đổi trên mảng gốc
const number = [1, 2, 3, 4, 5, 6, 7, 8, 9]
let sum = 0
number.forEach((item, index,arrayOrigin) =>{
    // console.log(item)
    // console.log(index)
    sum += item
})
console.log(sum)

// nếu muốn thay đổi giá trị của các phần tử trong number thì cần thêm chỉ số index vào
number.forEach((item, index)  => {
    number[index] += 2
})
console.log(number)

// trường hợp không dùng đến các tham số trong hàm thì ta thay bằng _, ví dụ: 
//      number.forEach((_, index)












// every(): Kiểm tra tất cả các phần tử của 1 mảng phải thỏa điều kiện gì đó, chỉ trả ra giá trị true hoặc false
const mon_hoc = [
    {
        ten: "Toán",
        diem: 8.5
    },
    {
        ten: "Tin",
        diem: 8.3
    },
    {
        ten: 'Anh',
        diem: 6.7
    }
]
var hoc_sinh_gioi = mon_hoc.every((item, index) =>{
    return item.diem >= 8
})
if(hoc_sinh_gioi === true){
    console.log('Học sinh giỏi')
}
else{
    console.log('Không phải học sinh giỏi')
}










// some(): Kiểm tra chỉ cần 1 phần tử của mảng thỏa mãn 1 điều kiện gì đó là được
const mon_hoc_2 = [
    {
        ten: "Toán",
        diem: 8.5
    },
    {
        ten: "Tin",
        diem: 8.3
    },
    {
        ten: 'Anh',
        diem: 6.7
    }
]
var hoc_sinh_gioi = mon_hoc_2.some((item, index) =>{
    return item.diem >= 8 // true
})
if(hoc_sinh_gioi === true){
    console.log('Đủ điều kiện để là học sinh giỏi')
}
else{
    console.log('Chưa đủ điều kiện học sinh giỏi')
}









// find(): Tìm xem trong mảng có giá trị giống với giá trị đang cần tìm không
// - Nếu có thì trả về chính phần tử của mảng đó
// - Nếu không có thì trả về undefined
// - Chỉ tìm được một phần tử trong mảng

const mon_hoc_3 = [
    {
        ten: 'Toan',
        diem: 8.6
    },
    {
        ten: 'Van',
        diem: 8.7
    },
    {
        ten: 'Tin',
        diem: 6.5
    }
]
const check = mon_hoc_3.find((item, index, arr) =>{
    return item.ten === 'Toan'
})
console.log(check)
console.log(check.diem) // 8.6













// filter(): giống hàm find(), tìm được nhiều phần tử trong mảng, trả về một mảng các phần tử đã tìm được
const mon_hoc_4 = [
    {
        ten: 'Toan',
        diem: 8.6
    },
    {
        ten: 'Van',
        diem: 8.7
    },
    {
        ten: 'Tin',
        diem: 6.5
    }
]
const diem_tren_8 = mon_hoc_4.filter((item, index, array) =>{
    return item.diem >= 8
})
console.log(diem_tren_8) 
/*
0: {ten: 'Toan', diem: 8.6}
1: {ten: 'Van', diem: 8.7}
length: 2
[[Prototype]]: Array(0)
*/














// map(): Lặp qua từng phần tử của mảng và trả về 1 mảng mới
// - Số lượng phần tử bằng mảng cũ
// - Giá trị trả về được quyết định bởi từ          khóa return
const mon_hoc_5 = [
    {
        ten: 'Toan',
        diem: 8.6
    },
    {
        ten: 'Van',
        diem: 8.7
    },
    {
        ten: 'Tin',
        diem: 6.5
    }
]
const mang_moi = mon_hoc_5.map((item, index, array) =>{
    return item.diem
})
console.log(mang_moi) // [8.6, 8.7, 6.5]

















// reduce(): duyệt qua từng phần tử của mảng, tính toán và trả về giá trị cuối cùng

/* 
array.reduce((accumulator, currentValue, currentIndex, array) =>{ 
}, initialValue)

  - accumulator: là giá trị của lệnh return cho mỗi lần lặp

  - initialValue: giá trị khởi tạo ban đầu (optional), nếu initialValue không được gán, nó sẽ mặc định cho init là phần tử thứ 0 và item là phần tử thứ 1 ở lần lặp đầu tiên và tiếp tục sau đó.
*/

const number_test = [1, 2, 3, 4, 5]
const sum_test = number_test.reduce((total, item, index, array) =>{
    console.log(total)
    console.log(item)
    console.log('--------')
    return total + item
}, 0)
console.log(sum_test) // 15

const mon_hoc_6 = [
    {
        ten: 'Toan',
        diem: 8.6
    },
    {
        ten: 'Van',
        diem: 8.7
    },
    {
        ten: 'Tin',
        diem: 6.5
    }
]
const diem_trung_binh = mon_hoc_6.reduce((total, item) =>{
    return total + item.diem/mon_hoc_6.length
}, 0) // trường hợp trên để tính thì ta phải gán giá trị init = 0, nếu không thì biến total sẽ lấy nguyên cái object ở phần tử thứ 0 đi cộng cho cái số điểm ở phần tử thứ 1
console.log(diem_trung_binh)

