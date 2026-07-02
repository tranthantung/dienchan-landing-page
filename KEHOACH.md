# Kế hoạch Thiết kế Landing Page Diện Chẩn - Khóa Học Cơ Bản (Bản Nâng Cấp Tự Nhiên, Nhã Nhặn & Thuyết Phục Cao)

Kế hoạch này phác thảo cấu trúc, thẩm mỹ, công nghệ và các tính năng chi tiết cho Landing Page giới thiệu **Khóa học Diện Chẩn Cơ Bản**. Bản cập nhật này áp dụng tông màu tươi sáng, tinh tế, nhã nhặn và tự nhiên, mang lại cảm giác bình yên, thư thái của y học tự nhiên.

---

## Hệ thống Thiết kế (Design System) & Thẩm mỹ Tự Nhiên (Bright & Organic)

*   **Tông màu chủ đạo (Color Palette):**
    *   **Background (Nền chính):** Trắng sữa mềm mại / Kem nhạt (`#FAF9F6`) - Tạo cảm giác thư giãn sâu, dễ chịu, ấm áp như không gian thiền định.
    *   **Surface (Nền thẻ):** Trắng tinh khiết (`#FFFFFF`) - Giúp các khối nội dung nổi bật một cách tinh tế.
    *   **Primary (Màu chính):** Xanh lá xô thơm (Sage Green - `#4A7C59`) - Màu thảo mộc tự nhiên, nhã nhặn, đại diện cho sức khỏe xanh và sự chữa lành.
    *   **Secondary (Màu phụ):** Vàng cát ấm / Vàng mơ nhạt (Warm Sand - `#D4A373`) - Đại diện cho năng lượng cơ thể, đất ấm và các huyệt đạo Diện Chẩn.
    *   **Accent (Màu điểm nhấn):** Đất nung nhạt (Terra Cotta - `#E07A5F`) - Dành cho các nút hành động (CTA) và điểm nhấn quan trọng, tạo sự tương phản nổi bật nhưng vô cùng tự nhiên và ấm áp.
    *   **Text Primary (Chữ chính):** Xám than rừng sâu (`#2E3A33`) - Nhã nhặn hơn màu đen thuần túy, tạo sự hài hòa tuyệt đối với thiên nhiên.
    *   **Text Secondary (Chữ phụ):** Xám khói thảo mộc (`#6B7A72`).
    *   **Border (Viền):** Xanh rêu mờ nhạt (`#E2ECE9`).
*   **Typography (Hệ thống chữ):**
    *   **Display Font:** *Playfair Display* (Serif) có độ tương phản cao, mang đậm tính Editorial (tạp chí), uy tín và sang trọng.
    *   **Primary Font:** *Inter* hoặc *Plus Jakarta Sans* (Sans-serif) làm nền tảng cho văn bản nhỏ, đảm bảo độ đọc cao trên thiết bị di động.
*   **Grid & Spacing:** Áp dụng hệ lưới 8px làm chuẩn. Khoảng cách (padding) giữa các phần chính rộng rãi (64px - 120px) giúp trang web có không gian "thở" tự nhiên và cao cấp.

---

## Cấu trúc Trang & Các Thành phần UI Tương tác (Tối ưu Chuyển Đổi)

### 1. Sticky Glassmorphism Navbar (Thanh điều hướng cố định)
*   **Bố cục:** Flexbox, `space-between`, hiệu ứng kính mờ `backdrop-filter: blur(12px)`.
*   **Nội dung:** Logo & Tên thương hiệu, Menu liên kết nhanh, ô tìm kiếm triệu chứng nhanh và nút CTA chính "Đăng Ký Ngay".

### 2. Hero Section (Phần đầu trang ấn tượng)
*   **Bố cục:** Căn giữa, padding lớn.
*   **Nội dung:**
    *   Badge: "Khóa học chính thống từ GS.TSKH Bùi Quốc Châu".
    *   Tiêu đề lớn (`<h1>`): "Diện Chẩn Bùi Quốc Châu - Đánh thức khả năng tự chữa lành".
    *   Mô tả ngắn gọn: Giải pháp tự chăm sóc sức khỏe chủ động không dùng thuốc, không dùng kim.
    *   **Metrics:** "15,000+ Học viên" | "4.9★ Đánh giá" | "100% Thực hành thực tế".
    *   **Nút CTA kép:** Nút chính "Đăng ký Nhận ưu đãi 50%" và nút phụ "Xem bài học thử".

### 3. Pain Point Section: "Bạn có đang gặp những vấn đề này?" (Chạm nỗi đau)
*   **Mục tiêu:** Giúp người đọc đồng cảm sâu sắc với tình trạng sức khỏe hiện tại của họ.
*   **Nội dung:** Thiết kế dạng grid 3 thẻ trực quan:
    *   *Thẻ 1:* Lạm dụng thuốc tây – Sợ tác dụng phụ, hại gan thận nhưng ngưng thuốc thì bệnh tái phát.
    *   *Thẻ 2:* Đau nhức hành hạ – Đau mỏi vai gáy, mất ngủ, đau đầu, tê bì tay chân kéo dài.
    *   *Thẻ 3:* Tốn kém chi phí – Thường xuyên đi bệnh viện, bấm huyệt, châm cứu tốn kém tiền bạc và thời gian.

### 4. Solution Section: "Tại sao Diện Chẩn là câu trả lời cho bạn?" (Giải pháp đột phá)
*   **Mục tiêu:** Giúp người đọc hiểu ngay Diện Chẩn là gì và tính ưu việt của phương pháp.
*   **Nội dung:** Bảng so sánh trực quan và ngắn gọn:
    | Đặc điểm | Thuốc Tây / Đông Y | Châm Cứu Truyền Thống | Diện Chẩn Bùi Quốc Châu |
    | :--- | :--- | :--- | :--- |
    | **Sử dụng thuốc** | Có (nhiều tác dụng phụ) | Không | **Hoàn toàn KHÔNG dùng thuốc** |
    | **Xâm lấn cơ thể** | Không | Có (dùng kim châm) | **KHÔNG dùng kim (chỉ dùng cây lăn, dò)** |
    | **Người thực hiện** | Bác sĩ, dược sĩ | Trị liệu viên có chuyên môn | **Tự mình làm cho mình & người thân** |
    | **Địa điểm thực hiện** | Bệnh viện, tiệm thuốc | Phòng khám | **Bất kỳ lúc nào, bất kỳ nơi đâu** |

### 5. Interactive Symptom Filter Bar & Curriculum (Học phần & Lọc triệu chứng)
*   **Tính năng tương tác:** Thanh trượt chứa các triệu chứng như *Đau vai gáy*, *Mất ngủ*, *Viêm xoang*, *Tiêu hóa*. Khi nhấp vào, trang tự động cuộn đến/làm nổi bật Module học tương ứng.
*   **Chi tiết Học phần:** Lộ trình 5 Module chi tiết từ lý thuyết đến thực hành tìm huyệt, dán cao và phác đồ điều trị thực tế.

### 6. Interactive Quick-Practice Demo: "Thử Diện Chẩn Ngay Tại Chỗ" (Thuyết phục bằng hành động)
*   **Mục tiêu:** Cho người đọc tự kiểm nghiệm hiệu quả tức thì của Diện Chẩn ngay trên Landing Page để tăng 200% niềm tin.
*   **Cách thức:** Thiết kế slide/tab tương tác hướng dẫn 2 kỹ thuật siêu đơn giản nhưng hiệu quả cực nhanh:
    *   *Kỹ thuật 1:* "Giảm stress & Tỉnh táo tức thì" - Hướng dẫn vuốt từ ấn đường lên trán hoặc gạch 6 vùng phản chiếu bằng ngón tay.
    *   *Kỹ thuật 2:* "Dịu ngay cơn đau đầu" - Hướng dẫn day ấn nhẹ huyệt 19 hoặc huyệt phản chiếu ở ngón tay cái.
    *   *Giao diện:* Sử dụng sơ đồ mặt người Diện Chẩn được thiết kế tối giản, hiện đại và động tác mô phỏng rõ ràng.

### 7. Social Proof & Case Studies: "Người thật - Việc thật" (Bằng chứng uy tín)
*   **Nội dung:** Kể câu chuyện chuyển đổi thành công của 3 học viên điển hình:
    *   *Câu chuyện 1:* Cô giáo nghỉ hưu thoát khỏi đau cổ vai gáy mãn tính.
    *   *Câu chuyện 2:* Nhân viên văn phòng chữa dứt điểm chứng mất ngủ kinh niên.
    *   *Câu chuyện 3:* Người mẹ tự chăm sóc con nhỏ khỏi cảm cúm, sổ mũi không cần kháng sinh.
*   **Hình thức:** Thẻ đánh giá có ảnh chụp trước/sau hoặc ảnh học viên đang tự thực hành, kèm huy hiệu "Học viên Đã xác thực".

### 8. Giảng viên Uy tín (Instructor Profile)
*   Hình ảnh chân dung chuyên nghiệp của Giảng viên chính thống, tiểu sử truyền cảm hứng và cam kết đồng hành cùng học viên.

### 9. Offer & Guarantee Section: "Ưu đãi giới hạn & Cam kết 100%" (Đăng ký ngay)
*   **Mục tiêu:** Xóa bỏ hoàn toàn rào cản tài chính và nỗi sợ thất bại để kích thích đăng ký.
*   **Gói Học phí Siêu giá trị:**
    *   Học phí gốc: `2.400.000đ` -> Học phí ưu đãi hôm nay: **1.199.000đ** (Giảm 50%).
    *   **Bộ quà tặng kèm (Trị giá 800k):** Bộ 3 dụng cụ Diện Chẩn cơ bản + Sách cẩm nang sinh huyệt độc quyền + Tham gia Cộng đồng hỗ trợ trọn đời của giảng viên.
    *   **Đồng hồ đếm ngược (Countdown Timer):** "Ưu đãi chỉ dành cho 20 người đăng ký đầu tiên hôm nay".
    *   **Cam kết Vàng (Risk-Free Guarantee):** *Hoàn tiền 100% trong vòng 7 ngày* nếu học viên thực hành đúng hướng dẫn nhưng không cảm nhận được sự thay đổi của cơ thể.

### 10. Form Đăng ký Tối giản & Fat Footer
*   Biểu mẫu đăng ký thu thập Tên, SĐT, Email và lựa chọn triệu chứng quan tâm để giảng viên tư vấn.
*   Footer màu tối tự nhiên (`#2E3A33` - Xám rêu rừng sâu) chứa liên kết nhanh, địa chỉ đào tạo và Medical Disclaimer (Miễn trừ trách nhiệm y khoa).

---

## Tương tác, Hiệu ứng & Tối ưu hóa hiệu năng

1.  **Lazy Loading:** Áp dụng cho ảnh và video.
2.  **Scroll Reveal (Intersection Observer):** Hiệu ứng `fade-in-up` cho các thẻ nỗi đau, thẻ học phần và đánh giá.
3.  **Active & Hover States:** Phản hồi xúc giác thị giác trên các nút CTA, tab thực hành thử và bộ lọc triệu chứng.
4.  **Countdown Timer:** Tích hợp bộ đếm thời gian thực bằng JS để tạo cảm giác cấp bách (Urgency).
5.  **Smooth Scrolling:** Cuộn trang mượt mà qua thuộc tính CSS `scroll-behavior: smooth`.

---

## Kế hoạch Xác minh (Verification Plan)

1.  **Kiểm tra Trải nghiệm thực hành thử (Quick-Practice Demo):**
    *   Bấm chuyển đổi giữa các kỹ thuật thực hành thử để xem sơ đồ và hướng dẫn tương ứng hiển thị chính xác.
2.  **Kiểm tra Bộ đếm ngược (Countdown Timer):**
    *   Xác minh thời gian đếm ngược giảm đều đặn theo từng giây và tự động reset hoặc hiển thị thông báo phù hợp khi hết giờ.
3.  **Kiểm tra tính hợp lệ của Form Đăng ký:**
    *   Kiểm tra báo lỗi khi bỏ trống thông tin hoặc nhập sai định dạng số điện thoại.
