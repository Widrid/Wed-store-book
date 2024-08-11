searchForm = document.querySelector('.search-form');

document.querySelector('#search-btn').onclick = () =>{
    searchForm.classList.toggle('active');
}

let loginForm = document.querySelector('.login-form-container');

document.querySelector('#login-btn').onclick = () =>{
    loginForm.classList.toggle('active');
    if (loginForm.classList.contains('active')) {
        loginForm.style.display = "flex"; // Hiển thị khi có lớp active
        setTimeout(() => {
            loginForm.style.opacity = "1";
        }, 10); // Đảm bảo transition hoạt động đúng
    } else {
        loginForm.style.opacity = "0";
        setTimeout(() => {
            loginForm.style.display = "none"; // Ẩn sau khi transition hoàn thành
        }, 300);
    }

}

document.querySelector('#close-login-btn').onclick = () =>{
    loginForm.classList.remove('active');
    loginForm.style.opacity = "0";
    setTimeout(() => {
        loginForm.style.display = "none"; // Ẩn bảng đăng nhập sau khi hiệu ứng hoàn tất
    }, 300); // 300ms khớp với thời gian chuyển đổi trong CSS
}




window.onscroll = () =>{
    
    searchForm.classList.remove('active');
    if(window.scrollY > 80){
        document.querySelector('.header .header-2').classList.add('active');
    } else{
        document.querySelector('.header .header-2').classList.remove('active');
    }
}

window.onload = () =>{
    if(window.scrollY > 80){
        document.querySelector('.header .header-2').classList.add('active');
    } else{
        document.querySelector('.header .header-2').classList.remove('active');
    }
}

