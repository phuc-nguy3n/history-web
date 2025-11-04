import React from "react";

const Divider = ({ width = 28 }) => (
  <span
    aria-hidden
    style={{
      display: "block",
      width,
      height: 3,
      background: "#e5e7eb",
      borderRadius: 9999,
      marginTop: 6,
      marginBottom: 6,
    }}
  />
);

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer
      className="footer"
      style={{
        marginTop: 32,
        color: "#111827", // gray-900
        background: "#f3f4f6", // gray-100
        borderTop: "1px solid #e5e7eb",
      }}
    >
      <div
        className="footer__container"
        style={{
          maxWidth: 1200,
          margin: "0 auto",
          padding: "36px 16px",
          display: "flex",
          gap: 32,
          flexWrap: "wrap",
          alignItems: "flex-start",
          justifyContent: "space-between",
        }}
      >
        {/* GIỚI THIỆU */}
        <section
          style={{
            flex: "1 1 320px",
            minWidth: 300,
            maxWidth: 420,
          }}
        >
          <h4
            style={{
              margin: 0,
              fontSize: 16,
              letterSpacing: 1,
              color: "#111827",
            }}
          >
            GIỚI THIỆU
          </h4>
          <Divider />
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: 12,
              margin: "8px 0 10px",
            }}
          >
            {/* Logo placeholder (có thể thay bằng <img src="/logo.png" />) */}
            <div
              aria-hidden
              style={{
                width: 56,
                height: 56,
                borderRadius: 12,
                background: "linear-gradient(135deg,#f59e0b,#ef4444)",
              }}
            />
            <div style={{ fontWeight: 800, fontSize: 20, color: "#b91c1c" }}>
              LỊCH SỬ VIỆT NAM
            </div>
          </div>
          <p style={{ margin: 0, color: "#374151", lineHeight: 1.7 }}>
            Lịch sử Việt Nam là hành trình dài đầy biến động nhưng cũng rất tự
            hào của một dân tộc kiên cường, bất khuất trước mọi thử thách.
          </p>
        </section>

        {/* TRANG */}
        <section style={{ flex: "1 1 200px", minWidth: 200 }}>
          <h4
            style={{
              margin: 0,
              fontSize: 16,
              letterSpacing: 1,
              color: "#111827",
            }}
          >
            TRANG
          </h4>
          <Divider />
          <nav aria-label="Trang">
            <ul
              style={{
                listStyle: "none",
                padding: 0,
                margin: 0,
                display: "grid",
                gap: 10,
              }}
            >
              <li>
                <a
                  href="#terms"
                  style={{
                    color: "#b91c1c",
                    textDecoration: "none",
                    fontWeight: 600,
                  }}
                >
                  Điều khoản sử dụng
                </a>
              </li>
              <li>
                <a
                  href="#privacy"
                  style={{
                    color: "#b91c1c",
                    textDecoration: "none",
                    fontWeight: 600,
                  }}
                >
                  Chính sách bảo mật
                </a>
              </li>
              <li>
                <a
                  href="#contact"
                  style={{
                    color: "#b91c1c",
                    textDecoration: "none",
                    fontWeight: 600,
                  }}
                >
                  Liên hệ
                </a>
              </li>
              <li>
                <a
                  href="#disclaimer"
                  style={{ color: "#374151", textDecoration: "none" }}
                >
                  Miễn Trách Nhiệm
                </a>
              </li>
              <li>
                <a
                  href="#author"
                  style={{
                    color: "#b91c1c",
                    textDecoration: "none",
                    fontWeight: 700,
                  }}
                >
                  Tác Giả ABC
                </a>
              </li>
            </ul>
          </nav>
        </section>

        {/* DANH MỤC */}
        <section style={{ flex: "1 1 220px", minWidth: 200 }}>
          <h4
            style={{
              margin: 0,
              fontSize: 16,
              letterSpacing: 1,
              color: "#111827",
            }}
          >
            DANH MỤC
          </h4>
          <Divider />
          <ul
            style={{
              listStyle: "none",
              padding: 0,
              margin: 0,
              display: "grid",
              gap: 10,
            }}
          >
            <li>
              <a
                href="#vn"
                style={{ color: "#374151", textDecoration: "none" }}
              >
                Lịch sử cổ đại
              </a>
            </li>
            <li>
              <a
                href="#cn"
                style={{ color: "#374151", textDecoration: "none" }}
              >
                Lịch sử trung cổ
              </a>
            </li>
            <li>
              <a
                href="#world"
                style={{ color: "#374151", textDecoration: "none" }}
              >
                Cận - Hiện đại
              </a>
            </li>
          </ul>
        </section>

        {/* LIÊN HỆ + THEO DÕI CHÚNG TÔI */}
        <section style={{ flex: "1 1 280px", minWidth: 260 }}>
          <h4
            style={{
              margin: 0,
              fontSize: 16,
              letterSpacing: 1,
              color: "#111827",
            }}
          >
            LIÊN HỆ
          </h4>
          <Divider />
          <div style={{ display: "grid", gap: 10, color: "#374151" }}>
            <p style={{ margin: 0 }}>
              <strong style={{ color: "#111827" }}>Địa chỉ:</strong> Toà nhà
              Viettel, 205A Lê Hồng Phong, Phường 8, Vũng Tàu
            </p>
            <p style={{ margin: 0 }}>
              <strong style={{ color: "#111827" }}>Hotline:</strong> 0123456789
            </p>
            <p style={{ margin: 0 }}>
              <strong style={{ color: "#111827" }}>Email:</strong>{" "}
              history@gmail.com
            </p>
            <div>
              <p style={{ margin: 0 }}>
                <strong style={{ color: "#111827" }}>Hashtag:</strong>{" "}
                #lichsuvietnam
              </p>
              <p style={{ margin: 0 }}>#lichsuvietnamorg</p>
            </div>
          </div>

          <div style={{ marginTop: 18 }}>
            <h5
              style={{
                margin: 0,
                fontSize: 14,
                letterSpacing: 1,
                color: "#111827",
              }}
            >
              THEO DÕI CHÚNG TÔI
            </h5>
            <Divider width={20} />
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: 10,
                marginTop: 8,
              }}
            >
              {/* Placeholder social item như hình minh họa */}
              <div
                aria-hidden
                style={{
                  width: 28,
                  height: 28,
                  borderRadius: 6,
                  background: "#e5e7eb",
                }}
              />
              <a
                href="#social"
                style={{
                  color: "#b91c1c",
                  textDecoration: "none",
                  fontWeight: 700,
                }}
              >
                Lịch Sử
              </a>
            </div>
          </div>
        </section>
      </div>

      {/* Bottom bar */}
      <div
        className="footer__bottom"
        style={{
          borderTop: "1px solid #e5e7eb",
          background: "#ffffff",
          padding: "12px 16px",
          textAlign: "center",
          fontSize: 14,
          color: "#6b7280",
        }}
      >
        <div
          style={{
            maxWidth: 1200,
            margin: "0 auto",
            display: "flex",
            gap: 12,
            alignItems: "center",
            justifyContent: "center",
            flexWrap: "wrap",
          }}
        >
          <p style={{ margin: 0 }}>
            © {year} History Wiki. All rights reserved.
          </p>
          <span aria-hidden>•</span>
          <a href="#top" style={{ color: "#374151", textDecoration: "none" }}>
            Lên đầu trang
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
