import styles from "./job-header.module.css"

export default function JobHeader() {
  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <button className={styles.backButton}>←</button>
        <h1 className={styles.title}>Research and Development Officer</h1>
        <div className={styles.navigation}>
          <button>←</button>
          <span>1 of 8</span>
          <button>→</button>
        </div>
        <button className={styles.moreButton}>⋯</button>
        <button className={styles.shareButton}>🔗 Share & Promote</button>
      </div>

      <div className={styles.status}>
        <span className={styles.statusBadge}>🟢 Open</span>
        <span className={styles.statusItem}>👤 Researcher</span>
        <span className={styles.statusItem}>📍 Onsite</span>
        <span className={styles.statusItem}>👤 Created by Bagus Fikri</span>
      </div>

      <nav className={styles.tabs}>
        <button className={`${styles.tab} ${styles.active}`}>👥 Candidates</button>
        <button className={styles.tab}>ℹ️ Job Info</button>
        <button className={styles.tab}>📅 Calendar</button>
        <button className={styles.tab}>📊 Score Card</button>
        <button className={styles.tab}>📈 Activity</button>
        <button className={styles.tab}>📝 Application Form</button>
        <button className={styles.tab}>
          🤖 Automation <span className={styles.count}>5</span>
        </button>
      </nav>
    </div>
  )
}
