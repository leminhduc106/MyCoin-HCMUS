# MyCoin-HCMUS

Họ và tên: Lê Minh Đức - MSSV: 19127369

Bài tập cá nhân Blockchain: Xây dựng hệ thống tiền điện tử MyCoin Các công nghệ mới trong phát triển phần mềm

Link demo: https://youtu.be/FiF7JSDenxg
# Cài đặt modules/dependencies
### `npm install`

## Chạy chương trình
### `npm start`
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

# Các chức năng của project
## Tạo ví
- Chỉ cần dùng tên là có thể tạo ra ví mới
- Ví mới được tạo sẽ có số coin là 0
## Hiển thị ví
- Xem số coin (balance) của ví
- Tên ví
## Xem thống kê tài khoản
- Hiển thị số coin được chuyển và nhận của mỗi ví trong mỗi lần giao dịch với ví khác
## Gởi coin cho một địa chỉ khác
- Gởi tiền điện tử cho các ví trong cùng mạng lưới
- Sử dụng thuật toán Proof of Work (PoW) (hardcode độ khó trong việc đào là 2, có thể chỉnh sửa nếu muốn)
- Nếu chỉ có 1 ví thì không thể chuyển tiền
- Nếu có 2 ví thì sẽ chuyển tiền được nhưng miner sẽ là "Not Available"
- Nếu có 3 ví trở lên khi chuyển tiền sẽ có miner (random 1 ví ngẫu nhiên trong các ví còn lại) và miner sẽ có reward là 1 coin
- Sau mỗi lần gửi tiền thì mỗi giao dịch sẽ được thêm vào hệ thống blockchain.
## Xem lịch sử giao dịch
- Mỗi giao dịch sau khi được tạo sẽ được thêm vào lịch sử giao dịch.

## Tham khảo
- Slide bài giảng của Thầy Trần Văn Quý
- https://lhartikk.github.io/
- https://github.com/Savjee/savjeecoin-frontend
- https://www.youtube.com/watch?v=AQV0WNpE_3g&list=PLzvRQMJ9HDiTqZmbtFisdXFxul5k0F-Q4&index=1
- https://etherscan.io/
