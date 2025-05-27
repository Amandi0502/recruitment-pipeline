import styles from "./filter-bar.module.css"

export default function FilterBar() {
  return (
    <div className={styles.container}>
      <div className={styles.left}>
        <div className={styles.searchBox}>
          <span className={styles.searchIcon}>🔍</span>
          <input type="text" placeholder="Search" className={styles.searchInput} />
        </div>

        <div className={styles.filter}>
          <span className={styles.filterIcon}>📅</span>
          <span>Date Range</span>
          <span className={styles.arrow}>▼</span>
        </div>

        <div className={styles.filter}>
          <span className={styles.filterIcon}>⭐</span>
          <span>Score Range</span>
          <span className={styles.arrow}>▼</span>
        </div>

        <div className={styles.filter}>
          <span className={styles.filterIcon}>🔽</span>
          <span>Advance Filter</span>
          <span className={styles.arrow}>▼</span>
        </div>
      </div>

      <div className={styles.right}>
        <button className={styles.referButton}>👤 Refer People</button>
        <button className={styles.settingsButton}>⚙️</button>
        <div className={styles.viewToggle}>
          <span className={styles.viewIcon}>📋</span>
          <span>Kanban</span>
          <span className={styles.arrow}>▼</span>
        </div>
      </div>
    </div>
  )
}
