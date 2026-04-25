export default function SupportPage() {
  return (
    <main style={styles.container}>
      <div style={styles.card}>
        <h1 style={styles.title}>FlickClean Support</h1>

        <p style={styles.description}>
          FlickClean helps you clean and organize your photos quickly and efficiently.
        </p>

        <section style={styles.section}>
          <h2 style={styles.heading}>Need Help?</h2>
          <p style={styles.text}>
            If you have any questions, issues, or feedback, feel free to reach out.
            We’re here to help and will get back to you as soon as possible.
          </p>
        </section>

        <section style={styles.section}>
          <h2 style={styles.heading}>Contact</h2>
          <p style={styles.text}>
            Email:{" "}
            <a
              href="mailto:business.promptin@gmail.com"
              style={styles.link}
              data-track-id="support_email"
              data-track-type="contact"
              data-track-click="click_contact"
              data-track-hover="true"
            >
              business.promptin@gmail.com
            </a>
          </p>
        </section>

        <section style={styles.section}>
          <h2 style={styles.heading}>About FlickClean</h2>
          <p style={styles.text}>
            FlickClean is designed to make photo management simple. Quickly remove
            unwanted images, organize your gallery, and free up storage space —
            all with an intuitive and smooth experience.
          </p>
        </section>

        <footer style={styles.footer}>
          <p>© {new Date().getFullYear()} FlickClean</p>
        </footer>
      </div>
    </main>
  );
}

const styles: { [key: string]: React.CSSProperties } = {
  container: {
    minHeight: "100vh",
    backgroundColor: "#0f172a",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    padding: "24px",
    fontFamily: "system-ui, -apple-system, sans-serif",
    color: "#e5e7eb",
  },
  card: {
    maxWidth: "700px",
    width: "100%",
    backgroundColor: "#111827",
    borderRadius: "16px",
    padding: "32px",
    boxShadow: "0 10px 30px rgba(0,0,0,0.4)",
  },
  title: {
    fontSize: "32px",
    fontWeight: 700,
    marginBottom: "16px",
  },
  description: {
    fontSize: "16px",
    color: "#9ca3af",
    marginBottom: "24px",
  },
  section: {
    marginBottom: "24px",
  },
  heading: {
    fontSize: "20px",
    fontWeight: 600,
    marginBottom: "8px",
  },
  text: {
    fontSize: "15px",
    lineHeight: 1.6,
    color: "#d1d5db",
  },
  link: {
    color: "#60a5fa",
    textDecoration: "none",
  },
  footer: {
    marginTop: "32px",
    borderTop: "1px solid #1f2937",
    paddingTop: "16px",
    fontSize: "13px",
    color: "#6b7280",
    textAlign: "center",
  },
};