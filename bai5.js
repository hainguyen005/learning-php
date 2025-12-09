document.getElementById('btndangki').addEventListener('click', function() {
    // 1. Lấy giá trị từ các trường input
    //const hoDem = document.getElementById('password').value;
    const ten = document.getElementById('account').value;
    const email = document.getElementById('email').value;
    const sdt = document.getElementById('phonenumber').value;
    const ghiChu = document.getElementById('node').value;

    // Lấy giá trị của thành phố được chọn
    // Tìm thẻ <select> (không có ID, nên ta dùng tên thẻ hoặc class nếu có)
    const selectThanhPho = document.querySelector('select');
    // Lấy giá trị của <option> được chọn
    const thanhPho = selectThanhPho.value; 
    

    // 2. Hiển thị thông tin ra console
    console.log('--- THÔNG TIN ĐĂNG KÝ ---');
    //console.log('', hoDem);
    console.log('Tên:', ten);
    console.log('Địa chỉ Email:', email);
    console.log('Số điện thoại (SĐT):', sdt);
    console.log('Thành phố (Giá trị):', thanhPho); // Giá trị value trong <option>
    console.log('Ghi chú:', ghiChu);
    console.log('---------------------------');
});