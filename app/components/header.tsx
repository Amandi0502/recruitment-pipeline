/* header.module.css */
.header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 12px 24px;
  background-color: white;
  border-bottom: 1px solid #e5e7eb;
  height: 64px;
}

.left {
  display: flex;
  align-items: center;
  gap: 24px;
}

.logo {
  display: flex;
  align-items: center;
  gap: 8px;
}

.logoIcon {
  color: #f59e0b;
  font-size: 20px;
  font-weight: bold;
}

.logoText {
  font-size: 20px;
  font-weight: 600;
  color: #111827;
}

.nav {
  display: flex;
  align-items: center;
}

.navItem {
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 8px 12px;
  color: #6b7280;
  cursor: pointer;
  border-radius: 6px;
  transition: color 0.2s ease;
  position: relative;
}

.navItem:hover {
  color: #111827;
}

.center {
  display: flex;
  align-items: center;
  gap: 32px;
}

.badge {
  background-color: #dbeafe;
  color: #1e40af;
  font-size: 12px;
  padding: 2px 8px;
  border-radius: 9999px;
  font-weight: 500;
}

.badgeOrange {
  background-color: #fed7aa;
  color: #c2410c;
  font-size: 12px;
  padding: 2px 8px;
  border-radius: 9999px;
  font-weight: 500;
}

.right {
  display: flex;
  align-items: center;
  gap: 12px;
}

.addButton {
  width: 32px;
  height: 32px;
  background-color: #2563eb;
  color: white;
  border: none;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  font-weight: 600;
  font-size: 16px;
  transition: background-color 0.2s ease;
}

.addButton:hover {
  background-color: #1d4ed8;
}

.iconButton {
  width: 32px;
  height: 32px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #6b7280;
  background: none;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  transition: all 0.2s ease;
}

.iconButton:hover {
  color: #111827;
  background-color: #f3f4f6;
}

.profile {
  width: 32px;
  height: 32px;
  border-radius: 50%;
  overflow: hidden;
}

.profileAvatar {
  width: 32px;
  height: 32px;
  background-color: #d1d5db;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #6b7280;
  font-size: 14px;
  font-weight: 500;
}