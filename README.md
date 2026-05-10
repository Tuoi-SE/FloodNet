<!-- PROJECT SHIELDS -->
<!--
*** I'm using markdown "reference style" links for readability.
*** Reference links are enclosed in brackets [ ] instead of parentheses ( ).
*** See the bottom of this document for the declaration of the reference variables.
-->
[![Contributors][contributors-shield]][contributors-url]
[![Forks][forks-shield]][forks-url]
[![Stargazers][stars-shield]][stars-url]
[![Issues][issues-shield]][issues-url]
[![MIT License][license-shield]][license-url]
[![LinkedIn][linkedin-shield]][linkedin-url]

<!-- PROJECT LOGO -->
<br />
<div align="center">
  <a href="https://github.com/your_username/FloodNet">
    <img src="https://raw.githubusercontent.com/othneildrew/Best-README-Template/master/images/logo.png" alt="Logo" width="120" height="120">
  </a>

  <h1 align="center">🌊 FloodNet</h1>

  <p align="center">
    <strong>Bản đồ Cảnh báo Ngập lụt Thời gian thực từ Cộng đồng & Trí tuệ Nhân tạo</strong>
    <br />
    <a href="https://github.com/your_username/FloodNet/tree/main/docs"><strong>Khám phá tài liệu chi tiết »</strong></a>
    <br />
    <br />
    <a href="https://floodnet.vn">Xem Demo</a>
    ·
    <a href="https://github.com/your_username/FloodNet/issues">Báo lỗi</a>
    ·
    <a href="https://github.com/your_username/FloodNet/issues">Đề xuất tính năng</a>
  </p>
</div>

<!-- TABLE OF CONTENTS -->
<details>
  <summary>📖 <strong>MỤC LỤC</strong> (Nhấn để mở rộng)</summary>
  <ol>
    <li>
      <a href="#-tổng-quan-dự-án">Tổng quan dự án</a>
      <ul>
        <li><a href="#bối-cảnh-và-vấn-đề-problem-statement">Bối cảnh & Vấn đề</a></li>
        <li><a href="#giải-pháp-của-floodnet-solution">Giải pháp</a></li>
        <li><a href="#tuyên-ngôn-giá-trị-value-proposition">Tuyên ngôn giá trị</a></li>
        <li><a href="#công-nghệ-sử-dụng-tech-stack">Công nghệ sử dụng</a></li>
      </ul>
    </li>
    <li>
      <a href="#-kiến-trúc-hệ-thống">Kiến trúc hệ thống</a>
      <ul>
        <li><a href="#sơ-đồ-tổng-thể-architecture-diagram">Sơ đồ tổng thể</a></li>
        <li><a href="#luồng-dữ-liệu-data-flow">Luồng dữ liệu (Data Flow)</a></li>
      </ul>
    </li>
    <li>
      <a href="#-tính-năng-chi-tiết-features">Tính năng chi tiết</a>
      <ul>
        <li><a href="#1-data-ingestion-hệ-thống-thu-thập">Data Ingestion</a></li>
        <li><a href="#2-ai-processing-xử-lý-ảnh">AI Processing</a></li>
        <li><a href="#3-real-time-dashboard-bản-đồ">Real-time Dashboard</a></li>
      </ul>
    </li>
    <li>
      <a href="#-hướng-dẫn-cài-đặt-getting-started">Hướng dẫn cài đặt (Getting Started)</a>
      <ul>
        <li><a href="#yêu-cầu-hệ-thống-prerequisites">Yêu cầu hệ thống</a></li>
        <li><a href="#cài-đặt-backend-ai">Cài đặt Backend & AI</a></li>
        <li><a href="#cài-đặt-frontend">Cài đặt Frontend</a></li>
      </ul>
    </li>
    <li><a href="#-hướng-dẫn-sử-dụng-usage">Hướng dẫn sử dụng</a></li>
    <li><a href="#-api-documentation">Tài liệu API</a></li>
    <li><a href="#-lộ-trình-phát-triển-roadmap">Lộ trình phát triển (Roadmap)</a></li>
    <li><a href="#-đối-tượng-người-dùng-stakeholders">Đối tượng người dùng</a></li>
    <li><a href="#-đóng-góp-contributing">Đóng góp (Contributing)</a></li>
    <li><a href="#-giấy-phép-license">Giấy phép</a></li>
    <li><a href="#-liên-hệ-contact">Liên hệ</a></li>
    <li><a href="#-lời-cảm-ơn-acknowledgments">Lời cảm ơn</a></li>
  </ol>
</details>

---

## 🌟 Tổng quan dự án

### Bối cảnh và Vấn đề (Problem Statement)
Mỗi năm, vào mùa mưa bão hoặc triều cường, người dân tại các đô thị lớn ở Việt Nam (đặc biệt là TP.HCM và Hà Nội) phải gánh chịu những thiệt hại to lớn:
1. **Thiệt hại về tài sản:** Hàng ngàn xe máy, ô tô bị chết máy, thủy kích do đi vào vùng ngập sâu.
2. **Tổn thất về thời gian:** Giao thông tê liệt, trễ giờ làm, giờ học, ảnh hưởng nghiêm trọng đến năng suất xã hội.

**Những điểm yếu của hệ thống cảnh báo hiện tại:**
* **Thiếu tính thời gian thực (Real-time):** Thông tin cảnh báo trên VOV Giao thông, báo điện tử hay các hội nhóm Facebook thường có độ trễ từ 30 phút đến 1 tiếng đồng hồ. Khi người dân nhận được tin, họ có thể đã ở giữa rốn ngập.
* **Thiếu tính trực quan:** Thông tin dạng văn bản thô (ví dụ: *"Đường Nguyễn Hữu Cảnh đang ngập"*) không cung cấp đủ ngữ cảnh. Người dùng không thể biết ngập 10cm (vẫn đi được) hay ngập 50cm (chắc chắn chết máy).
* **Chi phí triển khai khổng lồ:** Các dự án Smart City của chính phủ sử dụng cảm biến siêu âm/radar và camera chuyên dụng có giá hàng trăm triệu đồng mỗi trạm. Điều này dẫn đến số lượng điểm đo rất hạn chế, để lại vô số "điểm mù" ngập lụt trong thành phố.

### Giải pháp của FloodNet (Solution)
**FloodNet** ra đời với sứ mệnh giải quyết bài toán trên bằng cách tận dụng nguồn lực từ chính cộng đồng (**Crowdsourcing**) và sức mạnh của Trí tuệ Nhân tạo (**AI - Computer Vision**). 

Thay vì lắp đặt các trạm cảm biến đắt tiền, FloodNet biến **mỗi chiếc điện thoại thông minh và mỗi camera an ninh** thành một "trạm đo lường" thông minh. Người dùng chỉ cần chụp một bức ảnh đường ngập gửi qua Zalo, AI của hệ thống sẽ tự động phân tích hình ảnh, ước lượng độ sâu của nước và cập nhật ngay lập tức lên bản đồ chung.

### Tuyên ngôn giá trị (Value Proposition)
> *"Né ngập chính xác, bảo vệ tài sản và thời gian chỉ với 1 cú click xem bản đồ."*

* **Giao thức thu thập (Zero-friction):** Người dùng không cần tải thêm bất kỳ ứng dụng nặng nề nào. Gửi ảnh trực tiếp qua Zalo OA quen thuộc trong chưa đầy 3 thao tác.
* **Tự động hóa hoàn toàn:** Trí tuệ nhân tạo loại bỏ sai số do cảm tính của con người, tự động phân loại mức độ ngập lụt.
* **Chi phí hạ tầng ~ 0đ:** Tận dụng hạ tầng thiết bị sẵn có của xã hội.

### Công nghệ sử dụng (Tech Stack)
Dự án được xây dựng dựa trên các công nghệ mã nguồn mở và nền tảng đám mây mạnh mẽ, đảm bảo tính mở rộng (Scalability) và hiệu năng (Performance).

* [![Python][Python.org]][Python-url]
* [![FastAPI][FastAPI.com]][FastAPI-url]
* [![YOLO][YOLO.com]][YOLO-url]
* [![React][React.js]][React-url]
* [![AWS S3][AWS.com]][AWS-url]
* [![PostgreSQL][PostgreSQL.org]][PostgreSQL-url]
* [![Docker][Docker.com]][Docker-url]

<p align="right">(<a href="#readme-top">quay lại đầu trang</a>)</p>

---

## 🏗️ Kiến trúc hệ thống

Hệ thống được thiết kế theo kiến trúc **Microservices** để đảm bảo khả năng xử lý lượng lớn request đồng thời (đặc biệt khi có bão/mưa lớn diện rộng).

### Sơ đồ tổng thể (Architecture Diagram)

```mermaid
graph TD
    %% Định nghĩa các node
    subgraph Data_Sources [Nguồn Dữ liệu (Data Sources)]
        User_Zalo[Người dùng qua Zalo OA\n(Chụp ảnh/Gửi tin nhắn)]
        IoT_Camera[Camera IP / Node tự chế\n(Gửi ảnh định kỳ)]
    end

    subgraph API_Layer [Tầng API & Routing]
        Webhook_Service[Zalo Webhook Service]
        Ingest_API[REST API Ingestion]
        API_Gateway{API Gateway / Load Balancer}
    end

    subgraph Core_Processing [Tầng Xử lý Cốt lõi]
        Message_Queue[[Message Queue\ne.g., RabbitMQ/Kafka]]
        Storage[(Cloud Storage S3\nLưu ảnh thô)]
        AI_Worker((AI Processing Worker\nYOLO Model))
        DB[(Cơ sở dữ liệu\nPostgreSQL/PostGIS)]
    end

    subgraph Frontend_Layer [Tầng Hiển thị]
        WebSocket_Server[Real-time Server\n(Socket.io)]
        Web_App[Web App / PWA Dashboard]
    end

    %% Luồng kết nối
    User_Zalo -- HTTPS POST --> Webhook_Service
    IoT_Camera -- HTTPS POST --> Ingest_API
    Webhook_Service --> API_Gateway
    Ingest_API --> API_Gateway
    
    API_Gateway -- 1. Lưu ảnh --> Storage
    API_Gateway -- 2. Đẩy Job --> Message_Queue
    
    Message_Queue -. Kéo Job .-> AI_Worker
    AI_Worker -- Tải ảnh --> Storage
    AI_Worker -- 3. Ghi kết quả\n(Level Ngập, Tọa độ) --> DB
    
    DB -- Kích hoạt Event --> WebSocket_Server
    WebSocket_Server -- Push Real-time --> Web_App
```

### Luồng dữ liệu (Data Flow)
1. **Thu thập:** Người dùng hoặc Camera gửi 1 payload chứa `(Hình ảnh, Tọa độ GPS, Timestamp)` về hệ thống.
2. **Tiếp nhận:** API Gateway nhận request, lưu trữ ảnh thô vào AWS S3 để bảo đảm an toàn dữ liệu, đồng thời đẩy một Event vào Message Queue.
3. **Phân tích (Dưới 5s):** AI Worker nhận Event, tải ảnh từ S3, chạy mô hình YOLO Object Detection. Mô hình nhận diện vùng nước, vật thể tham chiếu (bánh xe, cột điện) để kết luận mức độ ngập.
4. **Lưu trữ:** Kết quả phân tích (Ví dụ: `Level 1 - Ngập < 15cm`) được lưu vào Database không gian (PostGIS).
5. **Phát sóng (Real-time):** Hệ thống bắn Socket event tới tất cả các client đang mở bản đồ. Marker ngập lụt xuất hiện/đổi màu ngay lập tức trên màn hình người dùng.

<p align="right">(<a href="#readme-top">quay lại đầu trang</a>)</p>

---

## 🎯 Tính năng chi tiết (Features)

Hệ thống được chia thành 3 cấu phần chính, bám sát các yêu cầu từ tài liệu Business Analysis (BA).

### 1. Data Ingestion (Hệ thống thu thập)
* **Zalo OA Integration:** Nhận diện và trích xuất dữ liệu từ tin nhắn người dùng gửi qua Official Account. Xử lý webhook bất đồng bộ để không chặn trải nghiệm người dùng.
* **IoT Endpoint:** Cung cấp API key cho các đối tác (chủ quán cafe, nhà dân mặt tiền) để cấu hình camera tự động gửi ảnh mỗi 5 phút/lần.
* **Data Validation:** Tự động loại bỏ các ảnh không chứa thông tin GPS hoặc ảnh quá mờ, không đúng ngữ cảnh.

### 2. AI Processing (Xử lý bằng Trí tuệ nhân tạo)
Sử dụng mô hình Computer Vision (dự kiến YOLOv8) đã được fine-tune với tập dữ liệu ngập lụt đô thị Việt Nam.
Hệ thống phân loại thành 3 cấp độ chuẩn hóa:
* 🟢 **Level 0 (Khô ráo / Ngập nhẹ < 5cm):** Mặt đường ẩm ướt nhưng không ảnh hưởng giao thông.
* 🟡 **Level 1 (Ngập trung bình 5cm - 15cm):** Mức độ cảnh báo. Xe máy vẫn có thể di chuyển cẩn thận, nguy cơ tắc đường cao.
* 🔴 **Level 2 (Ngập sâu > 15cm):** Nguy hiểm. Nước ngập qua ống xả xe máy. Rủi ro thủy kích cực cao. Khuyến cáo tránh đường.

### 3. Real-time Dashboard (Bản đồ Giao diện)
* **Interactive Map:** Bản đồ số dựa trên Leaflet/Mapbox, hiển thị hệ thống đường phố chi tiết.
* **Dynamic Markers:** Các điểm ngập được đánh dấu bằng icon trực quan, đổi màu theo cấp độ (Level 0, 1, 2).
* **Live Updates:** Cơ chế WebSocket giúp bản đồ "sống" - bất kỳ điểm ngập nào mới xuất hiện hoặc rút nước đều được cập nhật lên màn hình người dùng mà không cần F5.

<p align="right">(<a href="#readme-top">quay lại đầu trang</a>)</p>

---

## 🚀 Hướng dẫn cài đặt (Getting Started)

Dưới đây là hướng dẫn để thiết lập môi trường phát triển (Development) tại local machine.

### Yêu cầu hệ thống (Prerequisites)
* Node.js (v18+)
* Python (3.9+)
* Docker & Docker Compose (Để chạy Database & Redis/RabbitMQ)
* Tài khoản AWS (S3) và Zalo Developer Account (cho Webhook).

### Cài đặt Backend & AI
1. Clone repository
   ```sh
   git clone https://github.com/your_username/FloodNet.git
   ```
2. Chuyển vào thư mục Backend
   ```sh
   cd FloodNet/backend
   ```
3. Tạo môi trường ảo (Virtual Environment)
   ```sh
   python -m venv venv
   source venv/bin/activate  # Trên Windows: venv\Scripts\activate
   ```
4. Cài đặt thư viện
   ```sh
   pip install -r requirements.txt
   ```
5. Khởi tạo các dịch vụ phụ trợ (PostgreSQL, Redis) bằng Docker
   ```sh
   docker-compose up -d
   ```
6. Copy file biến môi trường và cấu hình
   ```sh
   cp .env.example .env
   # Điền thông tin AWS_ACCESS_KEY, DB_URL, ZALO_TOKEN vào file .env
   ```
7. Chạy server FastAPI
   ```sh
   uvicorn app.main:app --reload
   ```

### Cài đặt Frontend
1. Mở một terminal mới, chuyển vào thư mục Frontend
   ```sh
   cd FloodNet/frontend
   ```
2. Cài đặt các gói NPM
   ```sh
   npm install
   ```
3. Cấu hình biến môi trường
   ```sh
   cp .env.example .env.local
   # Set REACT_APP_API_URL=http://localhost:8000
   ```
4. Khởi chạy ứng dụng React
   ```sh
   npm start
   ```

<p align="right">(<a href="#readme-top">quay lại đầu trang</a>)</p>

---

## 📖 Hướng dẫn sử dụng (Usage)

*(Trong giai đoạn thực tế, mục này sẽ bao gồm ảnh chụp màn hình (Screenshots) minh họa)*

**Đối với Người dùng cuối (Xem bản đồ):**
1. Truy cập vào `https://floodnet.vn` (Domain dự kiến).
2. Cho phép trình duyệt truy cập Vị trí (Location) để bản đồ tự động đưa bạn về khu vực đang đứng.
3. Quan sát các cảnh báo màu Đỏ/Vàng trên tuyến đường dự kiến đi qua để điều chỉnh lộ trình.

**Đối với Contributor (Gửi báo cáo qua Zalo):**
1. Mở ứng dụng Zalo, tìm kiếm "FloodNet - Cảnh báo ngập lụt".
2. Bấm "Quan tâm".
3. Khi gặp đường ngập, mở khung chat, chọn biểu tượng Gửi Ảnh. (Lưu ý: Bật định vị vị trí trên điện thoại khi chụp ảnh).
4. Hệ thống Zalo Bot sẽ phản hồi xác nhận: *"Cảm ơn bạn đã báo cáo. Điểm ngập tại [Tên đường] đã được ghi nhận ở Mức 2"*.

<p align="right">(<a href="#readme-top">quay lại đầu trang</a>)</p>

---

## 🛣️ Lộ trình phát triển (Roadmap)

Dự án tuân thủ nghiêm ngặt phương pháp phát triển Agile/Scrum. Phạm vi (Scope) được chia rõ ràng để bảo vệ MVP.

### Bắt buộc làm (In-Scope cho MVP - Giai đoạn 1)
- [x] Phân tích tài liệu BA và thiết kế Kiến trúc.
- [ ] Luồng gửi ảnh tự động qua Zalo OA (Môi trường Developer).
- [ ] Viết Script tự động chụp ảnh trên máy tính (Mô phỏng IoT Node).
- [ ] Xây dựng Backend API Gateway (FastAPI) & Lưu trữ AWS S3.
- [ ] Huấn luyện & Tích hợp mô hình AI YOLO cho bài toán Object Detection.
- [ ] Xây dựng Web Map (React + Leaflet) hiển thị Real-time.

### Ngoài phạm vi MVP (Out of Scope - Giai đoạn 2 & 3)
- [ ] **Auth System:** Hệ thống Đăng nhập/Đăng ký người dùng cuối.
- [ ] **RTSP Stream:** Trích xuất tự động luồng video trực tiếp từ IP Camera an ninh.
- [ ] **Gamification:** Tính điểm, cấp rank, đổi thưởng (Voucher) cho người dùng đóng góp nhiều dữ liệu.
- [ ] **Mobile App:** Ứng dụng Native cho iOS và Android (Hiện tại ưu tiên PWA).
- [ ] **B2B API:** Xây dựng cổng API thương mại cấp dữ liệu cho các đối tác giao hàng (ShopeeFood, Ahamove...).

Xem [open issues](https://github.com/your_username/FloodNet/issues) để biết danh sách chi tiết các tính năng đang được đề xuất.

<p align="right">(<a href="#readme-top">quay lại đầu trang</a>)</p>

---

## 🧑‍🤝‍🧑 Đối tượng người dùng (Stakeholders)

1. **End-Users (Người hưởng lợi):** 
   - Hàng triệu người tham gia giao thông bằng xe máy tại các đô thị.
   - Tài xế công nghệ (Grab, Be, Gojek) cần lộ trình an toàn, tránh hỏng xe.
2. **Data Contributors (Người đóng góp):** 
   - Cư dân sinh sống tại các "rốn ngập".
   - Chủ hộ kinh doanh mặt tiền (Đóng góp camera để được đổi lấy quyền lợi hiển thị/marketing trên bản đồ).
3. **B2B Clients (Tầm nhìn tương lai):**
   - Công ty bản đồ số (Cần mua dữ liệu real-time).
   - Công ty bảo hiểm (Giảm thiểu rủi ro phải đền bù bảo hiểm thủy kích cho ô tô).

---

## 🤝 Đóng góp (Contributing)

Sự đóng góp của cộng đồng nguồn mở là điều làm nên sức mạnh của dự án này. Bất kỳ đóng góp nào của bạn cũng được **đánh giá cao và trân trọng**.

Nếu bạn có gợi ý cải thiện hệ thống, vui lòng fork repo và tạo pull request. Bạn cũng có thể đơn giản là mở một issue với tag "enhancement".
Đừng quên cho dự án một ⭐️ nhé!

1. Fork Dự án (Project)
2. Tạo Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit các thay đổi (`git commit -m 'Add some AmazingFeature'`)
4. Push lên Branch (`git push origin feature/AmazingFeature`)
5. Mở Pull Request

Vui lòng đọc file [CONTRIBUTING.md](CONTRIBUTING.md) để biết thêm chi tiết về quy tắc code (Coding Standards) của chúng tôi.

<p align="right">(<a href="#readme-top">quay lại đầu trang</a>)</p>

---

## 📜 Giấy phép (License)

Được phân phối theo Giấy phép MIT. Xem file `LICENSE.txt` để biết thêm thông tin.

<p align="right">(<a href="#readme-top">quay lại đầu trang</a>)</p>

---

## 📫 Liên hệ (Contact)

Your Name - [@your_twitter](https://twitter.com/your_username) - email@example.com

Project Link: [https://github.com/your_username/FloodNet](https://github.com/your_username/FloodNet)

<p align="right">(<a href="#readme-top">quay lại đầu trang</a>)</p>

---

## 🙏 Lời cảm ơn (Acknowledgments)

Những thư viện, công cụ và nguồn cảm hứng đã giúp chúng tôi hoàn thành dự án này:

* [Choose an Open Source License](https://choosealicense.com)
* [GitHub Emoji Cheat Sheet](https://www.webpagefx.com/tools/emoji-cheat-sheet)
* [Malven's Flexbox Cheatsheet](https://flexbox.malven.co/)
* [Malven's Grid Cheatsheet](https://grid.malven.co/)
* [Img Shields](https://shields.io)

<p align="right">(<a href="#readme-top">quay lại đầu trang</a>)</p>

<!-- MARKDOWN LINKS & IMAGES -->
<!-- https://www.markdownguide.org/basic-syntax/#reference-style-links -->
[contributors-shield]: https://img.shields.io/github/contributors/your_username/FloodNet.svg?style=for-the-badge
[contributors-url]: https://github.com/your_username/FloodNet/graphs/contributors
[forks-shield]: https://img.shields.io/github/forks/your_username/FloodNet.svg?style=for-the-badge
[forks-url]: https://github.com/your_username/FloodNet/network/members
[stars-shield]: https://img.shields.io/github/stars/your_username/FloodNet.svg?style=for-the-badge
[stars-url]: https://github.com/your_username/FloodNet/stargazers
[issues-shield]: https://img.shields.io/github/issues/your_username/FloodNet.svg?style=for-the-badge
[issues-url]: https://github.com/your_username/FloodNet/issues
[license-shield]: https://img.shields.io/github/license/your_username/FloodNet.svg?style=for-the-badge
[license-url]: https://github.com/your_username/FloodNet/blob/master/LICENSE.txt
[linkedin-shield]: https://img.shields.io/badge/-LinkedIn-black.svg?style=for-the-badge&logo=linkedin&colorB=555
[linkedin-url]: https://linkedin.com/in/your_username

[Python.org]: https://img.shields.io/badge/Python-3776AB?style=for-the-badge&logo=python&logoColor=white
[Python-url]: https://www.python.org/
[FastAPI.com]: https://img.shields.io/badge/FastAPI-009688?style=for-the-badge&logo=fastapi&logoColor=white
[FastAPI-url]: https://fastapi.tiangolo.com/
[React.js]: https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB
[React-url]: https://reactjs.org/
[YOLO.com]: https://img.shields.io/badge/YOLO-00FFFF?style=for-the-badge&logo=YOLO&logoColor=black
[YOLO-url]: https://ultralytics.com/
[AWS.com]: https://img.shields.io/badge/Amazon_S3-569A31?style=for-the-badge&logo=amazon-s3&logoColor=white
[AWS-url]: https://aws.amazon.com/s3/
[Docker.com]: https://img.shields.io/badge/Docker-2496ED?style=for-the-badge&logo=docker&logoColor=white
[Docker-url]: https://www.docker.com/
[PostgreSQL.org]: https://img.shields.io/badge/PostgreSQL-316192?style=for-the-badge&logo=postgresql&logoColor=white
[PostgreSQL-url]: https://www.postgresql.org/
