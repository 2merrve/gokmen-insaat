import React from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';

export default function AdminPanel() {
  const router = useRouter();

  const handleLogout = async () => {
    await fetch('/api/auth/logout', {
      method: 'POST',
    });
    router.push('/admin/login');
  };

  const menuItems = [
    {
      title: 'Projeleri Yönet',
      description: 'Projeleri ekle, düzenle ve yönet',
      icon: '📊',
      path: '/admin/projects',
      color: '#4CAF50'
    },
    {
      title: 'Gelen Mesajlar',
      description: 'Müşteri mesajlarını görüntüle ve yanıtla',
      icon: '✉️',
      path: '/admin/messages',
      color: '#2196F3'
    },
    {
      title: 'Şifre Değiştir',
      description: 'Admin paneli şifrenizi güncelleyin',
      icon: '🔒',
      path: '/admin/change-password',
      color: '#FF9800'
    }
  ];

  return (
    <div className="admin-dashboard">
      <header className="dashboard-header">
        <div className="header-content">
          <h1>Admin Paneli</h1>
          <button className="logout-button" onClick={handleLogout}>
            Çıkış Yap
          </button>
        </div>
      </header>

      <main className="dashboard-content">
        <div className="welcome-section">
          <h2>Hoş Geldiniz!</h2>
          <p>Admin panelinden tüm içerikleri yönetebilirsiniz.</p>
        </div>

        <div className="menu-grid">
          {menuItems.map((item, index) => (
            <Link href={item.path} key={index} className="menu-item">
              <div className="menu-item-content" style={{ borderColor: item.color }}>
                <div className="menu-icon" style={{ backgroundColor: item.color }}>
                  {item.icon}
                </div>
                <div className="menu-text">
                  <h3>{item.title}</h3>
                  <p>{item.description}</p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </main>

      <style jsx>{`
        .admin-dashboard {
          min-height: 100vh;
          background-color: #f8f9fa;
          font-family: 'Segoe UI', system-ui, -apple-system, sans-serif;
        }

        .dashboard-header {
          background: linear-gradient(135deg, #1a237e 0%, #0d47a1 100%);
          color: white;
          padding: 1.5rem 2rem;
          box-shadow: 0 2px 4px rgba(0,0,0,0.1);
        }

        .header-content {
          max-width: 1200px;
          margin: 0 auto;
          display: flex;
          justify-content: space-between;
          align-items: center;
        }

        h1 {
          margin: 0;
          font-size: 1.8rem;
          font-weight: 600;
        }

        .logout-button {
          background-color: rgba(255,255,255,0.1);
          color: white;
          border: 1px solid rgba(255,255,255,0.2);
          padding: 0.5rem 1rem;
          border-radius: 4px;
          cursor: pointer;
          font-size: 0.9rem;
          transition: all 0.3s ease;
        }

        .logout-button:hover {
          background-color: rgba(255,255,255,0.2);
        }

        .dashboard-content {
          max-width: 1200px;
          margin: 2rem auto;
          padding: 0 2rem;
        }

        .welcome-section {
          background: white;
          padding: 2rem;
          border-radius: 8px;
          box-shadow: 0 2px 4px rgba(0,0,0,0.05);
          margin-bottom: 2rem;
        }

        .welcome-section h2 {
          margin: 0 0 0.5rem 0;
          color: #1a237e;
          font-size: 1.5rem;
        }

        .welcome-section p {
          margin: 0;
          color: #666;
          font-size: 1rem;
        }

        .menu-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
          gap: 1.5rem;
        }

        .menu-item {
          text-decoration: none;
          color: inherit;
        }

        .menu-item-content {
          background: white;
          border-radius: 8px;
          padding: 1.5rem;
          display: flex;
          align-items: center;
          gap: 1.5rem;
          transition: all 0.3s ease;
          border: 2px solid transparent;
          box-shadow: 0 2px 4px rgba(0,0,0,0.05);
        }

        .menu-item-content:hover {
          transform: translateY(-2px);
          box-shadow: 0 4px 8px rgba(0,0,0,0.1);
        }

        .menu-icon {
          width: 48px;
          height: 48px;
          border-radius: 12px;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 1.5rem;
          color: white;
        }

        .menu-text h3 {
          margin: 0 0 0.5rem 0;
          color: #333;
          font-size: 1.2rem;
        }

        .menu-text p {
          margin: 0;
          color: #666;
          font-size: 0.9rem;
        }

        @media (max-width: 768px) {
          .dashboard-content {
            padding: 0 1rem;
          }

          .menu-grid {
            grid-template-columns: 1fr;
          }

          .menu-item-content {
            padding: 1rem;
          }
        }
      `}</style>
    </div>
  );
} 