# B25DCTV049 - TH2: Thư viện sách

Họ tên: Đỗ Thanh Long
Mã sinh viên: B25DCTV049

## Cấu trúc

- `phan-a/`: JavaScript thuần (DOM, fetch + async/await, localStorage, module)
- `phan-b/`: React cơ bản (Vite, component, props, children, useState)

## Cách chạy

- Phần A: mở `phan-a/index.html` bằng Live Server.
- Phần B: `cd phan-b`, `npm install`, `npm run dev`.

## So sánh Phần A (DOM thuần) và Phần B (React)

| | Phần A (DOM thuần) | Phần B (React) |
|---|---|---|
| Cập nhật giao diện | Tự gọi `render()` và thao tác DOM bằng `createElement` | Đổi state, React tự render lại |
| Tái sử dụng | Hàm `createCard` | Component + props (`BookCard`, `BookList`...) |
| Xử lý sự kiện | Event delegation: 1 listener trên lưới | Truyền hàm xử lý xuống component con qua props |
| Quản lý dữ liệu | Biến toàn cục `books`, `favs` + localStorage | `useState` ở `App`, truyền xuống bằng props |
| Độ dài, bảo trì | Code dài hơn, dễ quên cập nhật giao diện | Gọn hơn, luồng dữ liệu rõ ràng |

## Nhận xét

Phần A giúp hiểu cách trình duyệt làm việc ở mức thấp (DOM, sự kiện, fetch). Phần B ngắn gọn hơn vì chỉ cần mô tả giao diện theo dữ liệu, React lo việc cập nhật.