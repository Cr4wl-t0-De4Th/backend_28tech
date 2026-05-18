console.log(window)
console.log(window.innerHeight)
console.log(window.innerWidth)

// BOM WINDOW

// window.open(url, tab_name, options)
var button_open = document.querySelector('#button_open')
var newtab;
button_open.onclick = () => {
    newtab = window.open('https://www.28tech.com.vn', '28tech', '_blank', 'width=300, heigth=300,left=300, top=300')
}


//window.close(): nếu ta không lưu cái newtab mới thì cái window.close() này sẽ xóa chính cái tab mà cái nút window.open(), tức là tab gốc
var button_close = document.querySelector('#button_close')
button_close.onclick = () =>{
    if (newtab){
        newtab.close() // tương đương với       newtab.window.close()
    }
}

console.log(screen.width)
console.log(screen.height)













// BOM LOCATION

console.log(window.location)

// phương thức reload()
const button_reload = document.querySelector('#button_reload')
button_reload.onclick = () => window.location.reload()
// setTimeout(() =>{
//     button_reload.onclick()
// }, 2000)










// BOM history
console.log(history)
/*
<button onclick="goback()">Trở lại</button>

    <script>
        var goback = () =>{
            window.history.back()
        }
    </script>
*/













//BOM navigator
console.log(navigator)

setInterval(() =>{
    console.log(navigator.onLine) // check xem người dùng có đang online trên trang web không, trường hợp có wifi, và không có wifi
}, 2000)















// Cookies
const fullName = prompt('nhap ten cua ban')

document.cookie = `fullName=${fullName}`

function setCookie(cname, cvalue, exdays){
    var d = new Date()
    d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000))
    var expires = 'expires=' + d.toUTCString()
    document.cookie = cname + '=' + cvalue  + ';' + expires
}
setCookie(`fullname`, fullName, 3) // 3 ngày