# Team Spirit — TheBaseWeb

Một trang web tĩnh (portfolio / team landing) do nhóm phát triển gồm 3 thành viên thực hiện. Dự án dùng HTML/CSS/SCSS và JavaScript để hiển thị trang chủ, trang profile của từng thành viên và một số demo project nhỏ.

## Tổng quan

- Project: Team Spirit / TheBaseWeb
- Mục đích: portfolio nhóm, giới thiệu thành viên và các project mẫu
- Ngôn ngữ/Thư viện: HTML, CSS (SCSS), JavaScript

## Nội dung chính

Thư mục và các file quan trọng:

- `index.html` — Trang chủ (Team Spirit)
- `public/css/` — Thư mục chứa CSS/SCSS
  - `home/` — style cho trang chủ
  - `profile/` — style cho các trang profile cá nhân
- `public/script/` — JavaScript
  - `script.js` — script cho trang chủ
  - `profile/script.js` — script cho behavior trên trang profile (ví dụ: scroll mượt)
- `public/images/` — Hình ảnh sử dụng trong trang
- `public/page/profile/` — Trang profile cho từng thành viên
  - `Duong/index.html`, `Hau/index.html`, `Vinh/index.html`

## Chạy/preview cục bộ

Đây là một website tĩnh — bạn có thể mở `index.html` trực tiếp trong trình duyệt. Để có trải nghiệm tốt hơn (tránh một số vấn đề đường dẫn), hãy chạy một máy chủ tĩnh cục bộ.

Ví dụ dùng Python 3 (trong môi trường Bash trên Windows hoặc WSL):

```bash
# chuyển tới thư mục chứa file index.html (để an toàn, làm từ gốc workspace)
cd /d/MAY/DOWNLOAD/TheBaseWeb
# hoặc dùng đường dẫn tương tự trong WSL
python -m http.server 8000
```

Mở trình duyệt vào: `http://localhost:8000` và duyệt tới `index.html`.

Nếu dùng VS Code, extension "Live Server" sẽ cho phép preview nhanh bằng một click.

## Sửa đổi & thêm thành viên

- Các profile cá nhân nằm ở `public/page/profile/<Tên>/index.html`.
- Ảnh profile để trong `public/images/` và đường dẫn trong HTML là tương đối tới thư mục `images`.
- CSS SCSS nằm tại `public/css/` — nếu bạn chỉnh SCSS, compile (ví dụ dùng sass) sang CSS tương ứng.

Ví dụ thêm thành viên mới:

1. Tạo thư mục `public/page/profile/TenMoi/`
2. Copy một file `index.html` của thành viên khác và chỉnh thông tin (tên, ảnh, link project,...)
3. Thêm ảnh vào `public/images/`
4. Kiểm tra các đường dẫn CSS/JS trên trang profile

## Điểm cần lưu ý / troubleshooting

- Đường dẫn file trong các trang profile dùng cả đường dẫn tuyệt đối (`/public/...`) và tương đối (`../../../images/`), nên khi preview bằng server cục bộ, hãy đảm bảo root là thư mục gốc của repo.
- Nếu CSS/SCSS thay đổi, compile SCSS sang CSS để trang dùng file `.css` mới.

## License

Miễn phí sử dụng trong phạm vi học tập và demo. Nếu cần, đổi sang MIT license hoặc license khác theo thỏa thuận nhóm.

## Tác giả / Liên hệ

- Nhóm: Team Spirit (Duong, Hau, Vinh)
- Repo owner (local): phuchau26
- Email liên hệ: phuchau.2005.vlg@mail.com

---

Nếu bạn muốn, mình có thể thêm hướng dẫn build SCSS (ví dụ file npm scripts / package.json) hoặc thêm template cho trang profile để dễ tạo thành viên mới — muốn làm tiếp phần nào?
