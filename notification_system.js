// Fast Flash API - Advanced Notification System
// This file provides a comprehensive notification system with bell icon, panel, and management features

class NotificationSystem {
  constructor() {
    this.notifications = [];
    this.maxNotifications = 50;
    this.unreadCount = 0;
    this.isInitialized = false;
    this.autoMarkReadDelay = 5000; // 5 seconds
    this.notificationTypes = {
      info: { icon: 'fas fa-info-circle', color: '#3b82f6' },
      success: { icon: 'fas fa-check-circle', color: '#10b981' },
      warning: { icon: 'fas fa-exclamation-triangle', color: '#f59e0b' },
      error: { icon: 'fas fa-exclamation-circle', color: '#ef4444' },
      api: { icon: 'fas fa-code', color: '#6366f1' },
      system: { icon: 'fas fa-cog', color: '#8b5cf6' }
    };
    
    this.init();
  }

  init() {
    if (this.isInitialized) return;
    
    // Load saved notifications from localStorage
    this.loadNotifications();
    
    // Initialize event listeners
    this.initEventListeners();
    
    // Add some default notifications
    this.addDefaultNotifications();
    
    this.isInitialized = true;
    console.log('Notification System initialized');
  }

  initEventListeners() {
    const notificationBell = document.getElementById('notificationBell');
    const notificationPanel = document.getElementById('notificationPanel');
    const notificationClose = document.getElementById('notificationClose');

    if (notificationBell) {
      notificationBell.addEventListener('click', (e) => {
        e.stopPropagation();
        this.togglePanel();
      });
    }

    if (notificationClose) {
      notificationClose.addEventListener('click', () => {
        this.closePanel();
      });
    }

    // Close panel when clicking outside
    document.addEventListener('click', (e) => {
      if (notificationPanel && !notificationBell?.contains(e.target) && !notificationPanel.contains(e.target)) {
        this.closePanel();
      }
    });

    // Keyboard shortcuts
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape') {
        this.closePanel();
      }
      if (e.ctrlKey && e.key === 'n') {
        e.preventDefault();
        this.togglePanel();
      }
    });
  }

  addDefaultNotifications() {
    // Add welcome notification
    this.addNotification({
      type: 'success',
      title: 'Selamat Datang!',
      message: 'Selamat datang di Fast Flash API Dashboard. Sistem notifikasi telah aktif.',
      timestamp: new Date(),
      autoRead: false
    });

    // Add system info
    this.addNotification({
      type: 'info',
      title: 'Sistem Update',
      message: 'Dashboard telah diperbarui dengan fitur notifikasi yang lebih baik.',
      timestamp: new Date(Date.now() - 3600000), // 1 hour ago
      read: false
    });

    // Add API info
    this.addNotification({
      type: 'api',
      title: 'API Status',
      message: 'Semua endpoint API berfungsi normal. Rate limit: 1000 requests/hour.',
      timestamp: new Date(Date.now() - 7200000), // 2 hours ago
      read: false
    });
  }

  addNotification(notification) {
    const id = this.generateId();
    const newNotification = {
      id,
      type: notification.type || 'info',
      title: notification.title || 'Notification',
      message: notification.message || '',
      timestamp: notification.timestamp || new Date(),
      read: notification.read || false,
      autoRead: notification.autoRead !== false, // default true
      persistent: notification.persistent || false,
      action: notification.action || null,
      data: notification.data || null
    };

    // Add to beginning of array
    this.notifications.unshift(newNotification);

    // Limit notifications
    if (this.notifications.length > this.maxNotifications) {
      this.notifications = this.notifications.slice(0, this.maxNotifications);
    }

    // Update unread count
    if (!newNotification.read) {
      this.unreadCount++;
    }

    // Update UI
    this.updateBadge();
    this.renderNotifications();
    
    // Save to localStorage
    this.saveNotifications();

    // Auto-mark as read after delay (if autoRead is true)
    if (newNotification.autoRead && !newNotification.read) {
      setTimeout(() => {
        this.markAsRead(id);
      }, this.autoMarkReadDelay);
    }

    // Show toast notification for new notifications
    if (!notification.silent) {
      this.showToast(newNotification);
    }

    return id;
  }

  markAsRead(notificationId) {
    const notification = this.notifications.find(n => n.id === notificationId);
    if (notification && !notification.read) {
      notification.read = true;
      this.unreadCount = Math.max(0, this.unreadCount - 1);
      this.updateBadge();
      this.renderNotifications();
      this.saveNotifications();
    }
  }

  markAllAsRead() {
    this.notifications.forEach(notification => {
      notification.read = true;
    });
    this.unreadCount = 0;
    this.updateBadge();
    this.renderNotifications();
    this.saveNotifications();
  }

  removeNotification(notificationId) {
    const index = this.notifications.findIndex(n => n.id === notificationId);
    if (index !== -1) {
      const notification = this.notifications[index];
      if (!notification.read) {
        this.unreadCount = Math.max(0, this.unreadCount - 1);
      }
      this.notifications.splice(index, 1);
      this.updateBadge();
      this.renderNotifications();
      this.saveNotifications();
    }
  }

  clearAll() {
    // Only remove non-persistent notifications
    this.notifications = this.notifications.filter(n => n.persistent);
    this.unreadCount = this.notifications.filter(n => !n.read).length;
    this.updateBadge();
    this.renderNotifications();
    this.saveNotifications();
  }

  togglePanel() {
    const panel = document.getElementById('notificationPanel');
    if (panel) {
      const isActive = panel.classList.contains('active');
      if (isActive) {
        this.closePanel();
      } else {
        this.openPanel();
      }
    }
  }

  openPanel() {
    const panel = document.getElementById('notificationPanel');
    if (panel) {
      panel.classList.add('active');
      this.renderNotifications();
      
      // Mark visible notifications as read after a short delay
      setTimeout(() => {
        this.markVisibleAsRead();
      }, 1000);
    }
  }

  closePanel() {
    const panel = document.getElementById('notificationPanel');
    if (panel) {
      panel.classList.remove('active');
    }
  }

  markVisibleAsRead() {
    // Mark first 5 unread notifications as read when panel is opened
    const unreadNotifications = this.notifications.filter(n => !n.read).slice(0, 5);
    unreadNotifications.forEach(notification => {
      this.markAsRead(notification.id);
    });
  }

  updateBadge() {
    const badge = document.getElementById('notificationBadge');
    if (badge) {
      if (this.unreadCount > 0) {
        badge.textContent = this.unreadCount > 99 ? '99+' : this.unreadCount;
        badge.style.display = 'flex';
      } else {
        badge.style.display = 'none';
      }
    }
  }

  renderNotifications() {
    const container = document.getElementById('notificationList');
    if (!container) return;

    if (this.notifications.length === 0) {
      container.innerHTML = `
        <div class="notification-empty">
          <i class="fas fa-bell-slash"></i>
          <p>Tidak ada notifikasi</p>
        </div>
      `;
      return;
    }

    container.innerHTML = this.notifications.map(notification => {
      const typeInfo = this.notificationTypes[notification.type] || this.notificationTypes.info;
      const timeAgo = this.getTimeAgo(notification.timestamp);
      
      return `
        <div class="notification-item ${notification.read ? 'read' : ''}" data-id="${notification.id}">
          <div class="notification-icon" style="color: ${typeInfo.color}">
            <i class="${typeInfo.icon}"></i>
          </div>
          <div class="notification-content">
            <div class="notification-header">
              <span class="notification-title">${notification.title}</span>
              <span class="notification-time">${timeAgo}</span>
            </div>
            <div class="notification-message">${notification.message}</div>
            ${notification.action ? `
              <div class="notification-actions">
                <button class="notification-action-btn" onclick="notificationSystem.handleAction('${notification.id}')">
                  ${notification.action.label}
                </button>
              </div>
            ` : ''}
          </div>
          <div class="notification-controls">
            ${!notification.read ? `<span class="notification-dot"></span>` : ''}
            <button class="notification-remove" onclick="notificationSystem.removeNotification('${notification.id}')" title="Hapus">
              <i class="fas fa-times"></i>
            </button>
          </div>
        </div>
      `;
    }).join('');

    // Add control buttons
    if (this.notifications.length > 0) {
      container.innerHTML += `
        <div class="notification-controls-panel">
          <button class="notification-control-btn" onclick="notificationSystem.markAllAsRead()">
            <i class="fas fa-check-double"></i> Tandai Semua Dibaca
          </button>
          <button class="notification-control-btn" onclick="notificationSystem.clearAll()">
            <i class="fas fa-trash"></i> Hapus Semua
          </button>
        </div>
      `;
    }
  }

  handleAction(notificationId) {
    const notification = this.notifications.find(n => n.id === notificationId);
    if (notification && notification.action) {
      if (typeof notification.action.callback === 'function') {
        notification.action.callback(notification.data);
      } else if (notification.action.url) {
        window.open(notification.action.url, '_blank');
      }
      
      // Mark as read after action
      this.markAsRead(notificationId);
    }
  }

  showToast(notification) {
    const toast = document.createElement('div');
    toast.className = `notification-toast notification-toast-${notification.type}`;
    
    const typeInfo = this.notificationTypes[notification.type] || this.notificationTypes.info;
    
    toast.innerHTML = `
      <div class="toast-icon">
        <i class="${typeInfo.icon}"></i>
      </div>
      <div class="toast-content">
        <div class="toast-title">${notification.title}</div>
        <div class="toast-message">${notification.message}</div>
      </div>
      <button class="toast-close" onclick="this.parentElement.remove()">
        <i class="fas fa-times"></i>
      </button>
    `;

    document.body.appendChild(toast);

    // Animate in
    setTimeout(() => toast.classList.add('show'), 100);

    // Auto remove after 5 seconds
    setTimeout(() => {
      toast.classList.remove('show');
      setTimeout(() => {
        if (document.body.contains(toast)) {
          document.body.removeChild(toast);
        }
      }, 300);
    }, 5000);
  }

  getTimeAgo(timestamp) {
    const now = new Date();
    const diff = now - new Date(timestamp);
    const seconds = Math.floor(diff / 1000);
    const minutes = Math.floor(seconds / 60);
    const hours = Math.floor(minutes / 60);
    const days = Math.floor(hours / 24);

    if (days > 0) return `${days} hari yang lalu`;
    if (hours > 0) return `${hours} jam yang lalu`;
    if (minutes > 0) return `${minutes} menit yang lalu`;
    return 'Baru saja';
  }

  generateId() {
    return 'notif_' + Date.now() + '_' + Math.random().toString(36).substr(2, 9);
  }

  saveNotifications() {
    try {
      localStorage.setItem('fastflash_notifications', JSON.stringify({
        notifications: this.notifications,
        unreadCount: this.unreadCount
      }));
    } catch (e) {
      console.warn('Failed to save notifications to localStorage:', e);
    }
  }

  loadNotifications() {
    try {
      const saved = localStorage.getItem('fastflash_notifications');
      if (saved) {
        const data = JSON.parse(saved);
        this.notifications = data.notifications || [];
        this.unreadCount = data.unreadCount || 0;
        
        // Convert timestamp strings back to Date objects
        this.notifications.forEach(notification => {
          notification.timestamp = new Date(notification.timestamp);
        });
      }
    } catch (e) {
      console.warn('Failed to load notifications from localStorage:', e);
      this.notifications = [];
      this.unreadCount = 0;
    }
  }

  // API Integration methods
  onApiCall(endpoint, success = true) {
    const message = success 
      ? `API ${endpoint} berhasil diakses`
      : `API ${endpoint} gagal diakses`;
    
    this.addNotification({
      type: success ? 'api' : 'error',
      title: 'API Activity',
      message: message,
      autoRead: true,
      silent: true // Don't show toast for API calls
    });
  }

  onSystemEvent(event, message) {
    this.addNotification({
      type: 'system',
      title: 'System Event',
      message: `${event}: ${message}`,
      autoRead: true
    });
  }

  // Public methods for external use
  info(title, message, options = {}) {
    return this.addNotification({
      type: 'info',
      title,
      message,
      ...options
    });
  }

  success(title, message, options = {}) {
    return this.addNotification({
      type: 'success',
      title,
      message,
      ...options
    });
  }

  warning(title, message, options = {}) {
    return this.addNotification({
      type: 'warning',
      title,
      message,
      ...options
    });
  }

  error(title, message, options = {}) {
    return this.addNotification({
      type: 'error',
      title,
      message,
      ...options
    });
  }
}

// CSS Styles for notification system (to be added to main CSS)
const notificationStyles = `
/* Notification Toast Styles */
.notification-toast {
  position: fixed;
  top: 20px;
  right: 20px;
  background: var(--dark-surface);
  border: 1px solid var(--border-color);
  border-radius: var(--border-radius);
  padding: 1rem;
  box-shadow: var(--shadow-lg);
  z-index: 3000;
  max-width: 400px;
  display: flex;
  align-items: flex-start;
  gap: 0.75rem;
  transform: translateX(100%);
  opacity: 0;
  transition: all 0.3s ease;
}

.notification-toast.show {
  transform: translateX(0);
  opacity: 1;
}

.notification-toast-success {
  border-left: 4px solid var(--success-color);
}

.notification-toast-error {
  border-left: 4px solid var(--danger-color);
}

.notification-toast-warning {
  border-left: 4px solid var(--warning-color);
}

.notification-toast-info {
  border-left: 4px solid var(--primary-color);
}

.notification-toast-api {
  border-left: 4px solid var(--secondary-color);
}

.notification-toast-system {
  border-left: 4px solid var(--text-muted);
}

.toast-icon {
  font-size: 1.2rem;
  color: var(--primary-color);
  flex-shrink: 0;
}

.toast-content {
  flex: 1;
}

.toast-title {
  font-weight: 600;
  color: var(--text-primary);
  margin-bottom: 0.25rem;
}

.toast-message {
  color: var(--text-secondary);
  font-size: 0.9rem;
  line-height: 1.4;
}

.toast-close {
  background: none;
  border: none;
  color: var(--text-muted);
  cursor: pointer;
  padding: 0.25rem;
  border-radius: 50%;
  transition: var(--transition);
  flex-shrink: 0;
}

.toast-close:hover {
  background: var(--danger-color);
  color: white;
}

/* Enhanced Notification Panel Styles */
.notification-item {
  display: flex;
  align-items: flex-start;
  gap: 0.75rem;
  padding: 1rem;
  border-bottom: 1px solid var(--border-color);
  transition: var(--transition);
  cursor: pointer;
}

.notification-item:hover {
  background: var(--dark-surface-2);
}

.notification-item.read {
  opacity: 0.7;
}

.notification-item:last-child {
  border-bottom: none;
}

.notification-icon {
  font-size: 1.1rem;
  flex-shrink: 0;
  margin-top: 0.1rem;
}

.notification-content {
  flex: 1;
  min-width: 0;
}

.notification-header {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  margin-bottom: 0.25rem;
}

.notification-title {
  font-weight: 600;
  color: var(--text-primary);
  font-size: 0.9rem;
}

.notification-time {
  color: var(--text-muted);
  font-size: 0.8rem;
  flex-shrink: 0;
  margin-left: 0.5rem;
}

.notification-message {
  color: var(--text-secondary);
  font-size: 0.85rem;
  line-height: 1.4;
}

.notification-actions {
  margin-top: 0.5rem;
}

.notification-action-btn {
  background: var(--primary-color);
  color: white;
  border: none;
  padding: 0.25rem 0.75rem;
  border-radius: var(--border-radius);
  font-size: 0.8rem;
  cursor: pointer;
  transition: var(--transition);
}

.notification-action-btn:hover {
  background: var(--primary-dark);
}

.notification-controls {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  flex-shrink: 0;
}

.notification-dot {
  width: 8px;
  height: 8px;
  background: var(--primary-color);
  border-radius: 50%;
  animation: pulse 2s infinite;
}

.notification-remove {
  background: none;
  border: none;
  color: var(--text-muted);
  cursor: pointer;
  padding: 0.25rem;
  border-radius: 50%;
  transition: var(--transition);
  opacity: 0;
}

.notification-item:hover .notification-remove {
  opacity: 1;
}

.notification-remove:hover {
  background: var(--danger-color);
  color: white;
}

.notification-controls-panel {
  padding: 1rem;
  border-top: 1px solid var(--border-color);
  display: flex;
  gap: 0.5rem;
  justify-content: center;
}

.notification-control-btn {
  background: var(--dark-surface-2);
  color: var(--text-secondary);
  border: 1px solid var(--border-color);
  padding: 0.5rem 1rem;
  border-radius: var(--border-radius);
  font-size: 0.8rem;
  cursor: pointer;
  transition: var(--transition);
  display: flex;
  align-items: center;
  gap: 0.5rem;
}

.notification-control-btn:hover {
  background: var(--primary-color);
  color: white;
  border-color: var(--primary-color);
}

.notification-empty {
  text-align: center;
  padding: 2rem;
  color: var(--text-muted);
}

.notification-empty i {
  font-size: 2rem;
  margin-bottom: 0.5rem;
  display: block;
}
`;

// Initialize notification system when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
  // Add styles to document
  const styleSheet = document.createElement('style');
  styleSheet.textContent = notificationStyles;
  document.head.appendChild(styleSheet);
  
  // Initialize notification system
  window.notificationSystem = new NotificationSystem();
  
  // Make it globally available
  window.addNotification = (message, time = 'Baru saja') => {
    return window.notificationSystem.addNotification({
      type: 'info',
      title: 'Notification',
      message: message,
      timestamp: new Date()
    });
  };
});

// Export for module systems
if (typeof module !== 'undefined' && module.exports) {
  module.exports = NotificationSystem;
}

