import React, { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';

export default function ChangePassword() {
  const [oldPassword, setOldPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [message, setMessage] = useState('');
  const [error, setError] = useState('');
  const router = useRouter();

  const handleGoBack = () => {
    router.push('/admin');
  };

  const handleLogout = async () => {
    await fetch('/api/auth/logout', {
      method: 'POST',
    });
    router.push('/admin/login');
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setMessage('');
    setError('');

    if (newPassword !== confirmPassword) {
      setError('Yeni şifreler uyuşmuyor.');
      return;
    }

    try {
      const res = await fetch('/api/auth/change-password', {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ oldPassword, newPassword })
      });

      const data = await res.json();

      if (res.ok) {
        setMessage(data.message);
        setOldPassword('');
        setNewPassword('');
        setConfirmPassword('');
      } else {
        setError(data.error);
      }
    } catch (err) {
      setError('Bir hata oluştu. Lütfen tekrar deneyin.');
    }
  };

  return (
    <div className="admin-dashboard">
      <header className="dashboard-header">
        <div className="header-content">
          <h1>Şifre Değiştir</h1>
          <div className="header-buttons">
            <button className="back-button" onClick={handleGoBack}>
              Geri
            </button>
            <button className="logout-button" onClick={handleLogout}>
              Çıkış Yap
            </button>
          </div>
        </div>
      </header>

      <main className="dashboard-content">
        <div className="password-form-container">
          <h2>Şifrenizi Değiştirin</h2>
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label>Mevcut Şifre:</label>
              <input
                type="password"
                value={oldPassword}
                onChange={(e) => setOldPassword(e.target.value)}
                required
              />
            </div>
            <div className="form-group">
              <label>Yeni Şifre:</label>
              <input
                type="password"
                value={newPassword}
                onChange={(e) => setNewPassword(e.target.value)}
                required
              />
            </div>
            <div className="form-group">
              <label>Yeni Şifre (Tekrar):</label>
              <input
                type="password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                required
              />
            </div>
            <div className="form-actions">
              <button type="submit" className="submit-button">
                Şifreyi Değiştir
              </button>
            </div>
          </form>
        </div>
      </main>

      <style jsx>{`
        .admin-dashboard {
          min-height: 100vh;
          background-color: #fafafa;
          font-family: 'Segoe UI', system-ui, -apple-system, sans-serif;
        }

        .dashboard-header {
          background: linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%);
          color: #495057;
          padding: 1.5rem 2rem;
          box-shadow: 0 2px 12px rgba(0,0,0,0.04);
          border-bottom: 1px solid #e9ecef;
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
          font-weight: 500;
          color: #495057;
        }

        .header-buttons {
          display: flex;
          gap: 1rem;
        }

        .back-button, .logout-button {
          padding: 0.6rem 1.2rem;
          border: 1px solid #dee2e6;
          border-radius: 6px;
          cursor: pointer;
          font-size: 0.9rem;
          transition: all 0.3s ease;
          color: #495057;
          background: white;
        }

        .back-button:hover, .logout-button:hover {
          background-color: #f8f9fa;
          transform: translateY(-1px);
          box-shadow: 0 2px 8px rgba(0,0,0,0.05);
        }

        .dashboard-content {
          max-width: 600px;
          margin: 2rem auto;
          padding: 0 2rem;
        }

        .password-form-container {
          background: white;
          padding: 2.5rem;
          border-radius: 12px;
          box-shadow: 0 4px 16px rgba(0,0,0,0.04);
          border: 1px solid #e9ecef;
        }

        .password-form-container h2 {
          color: #495057;
          margin: 0 0 2rem 0;
          font-size: 1.5rem;
          font-weight: 500;
        }

        .form-group {
          margin-bottom: 1.5rem;
        }

        .form-group label {
          display: block;
          margin-bottom: 0.5rem;
          color: #495057;
          font-weight: 500;
          font-size: 0.95rem;
        }

        .form-group input {
          width: 100%;
          padding: 0.8rem;
          border: 1px solid #dee2e6;
          border-radius: 8px;
          font-size: 1rem;
          transition: all 0.3s ease;
          background-color: white;
        }

        .form-group input:focus {
          border-color: #adb5bd;
          box-shadow: 0 0 0 3px rgba(173, 181, 189, 0.1);
          outline: none;
        }

        .form-actions {
          margin-top: 2rem;
        }

        .submit-button {
          background-color: #495057;
          color: white;
          padding: 0.8rem 1.5rem;
          border: none;
          border-radius: 8px;
          cursor: pointer;
          font-size: 1rem;
          width: 100%;
          transition: all 0.3s ease;
          font-weight: 500;
        }

        .submit-button:hover {
          background-color: #6c757d;
          transform: translateY(-1px);
          box-shadow: 0 2px 8px rgba(0,0,0,0.1);
        }

        @media (max-width: 768px) {
          .dashboard-content {
            padding: 0 1rem;
          }

          .header-buttons {
            flex-direction: column;
            gap: 0.5rem;
          }

          .password-form-container {
            padding: 1.5rem;
          }
        }
      `}</style>
    </div>
  );
} 