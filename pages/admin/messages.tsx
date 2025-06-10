import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';

interface Message {
  id: number;
  name: string;
  email: string;
  message: string;
  createdAt: string;
  isRead: boolean;
  updatedAt?: string;
}

export default function AdminMessages() {
  const [messages, setMessages] = useState<Message[]>([]);
  const [selectedMessage, setSelectedMessage] = useState<Message | null>(null);
  const router = useRouter();

  useEffect(() => {
    fetchMessages();
  }, []);

  const fetchMessages = async () => {
    const res = await fetch('/api/messages');
    const data = await res.json();
    setMessages(data);
  };

  const handleMarkAsRead = async (messageId: number) => {
    const res = await fetch(`/api/messages?id=${messageId}`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ isRead: true })
    });

    if (res.ok) {
      await fetchMessages();
    }
  };

  const handleLogout = async () => {
    await fetch('/api/auth/logout', {
      method: 'POST',
    });
    router.push('/admin/login');
  };

  const handleGoBack = () => {
    router.push('/admin');
  };

  return (
    <div className="admin-container">
      <header>
        <h1>Gelen Mesajlar</h1>
        <div className="header-buttons">
          <button className="back-button" onClick={handleGoBack}>
            Geri
          </button>
          <button className="logout-button" onClick={handleLogout}>
            Çıkış Yap
          </button>
        </div>
      </header>

      <div className="messages-layout">
        <div className="message-list">
          {messages.map(message => (
            <div
              key={message.id}
              onClick={() => setSelectedMessage(message)}
              className={`message-item ${selectedMessage?.id === message.id ? 'selected' : ''} ${message.isRead ? 'read' : ''}`}
            >
              <div className="message-name">
                {message.name}
              </div>
              <div className="message-date">
                {new Date(message.createdAt).toLocaleString()}
              </div>
            </div>
          ))}
        </div>

        <div className="message-detail">
          {selectedMessage ? (
            <div>
              <div className="detail-header">
                <h2>Mesaj Detayı</h2>
                <div className="message-date">
                  {new Date(selectedMessage.createdAt).toLocaleString()}
                </div>
              </div>

              <div className="detail-field">
                <strong>Gönderen:</strong> {selectedMessage.name}
              </div>
              <div className="detail-field">
                <strong>E-posta:</strong> {selectedMessage.email}
              </div>
              <div className="message-content">
                {selectedMessage.message}
              </div>

              {!selectedMessage.isRead && (
                <button className="mark-read-button" onClick={() => handleMarkAsRead(selectedMessage.id)}>
                  Okundu Olarak İşaretle
                </button>
              )}
            </div>
          ) : (
            <div className="no-message-selected">
              Mesaj seçilmedi
            </div>
          )}
        </div>
      </div>

      <style jsx>{`
        .admin-container {
          padding: 20px;
          max-width: 1200px;
          margin: 40px auto;
          background-color: #fff;
          border-radius: 8px;
          box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
          font-family: sans-serif;
        }
        header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 30px;
          padding-bottom: 20px;
          border-bottom: 1px solid #eee;
        }
        h1 {
          margin: 0;
          color: #333;
          font-size: 28px;
        }
        .header-buttons {
          display: flex;
          align-items: center;
        }
        .header-buttons a {
          margin-right: 10px;
          text-decoration: none;
          color: #007bff;
          font-size: 16px;
        }
        .header-buttons a:hover {
          text-decoration: underline;
        }
        .back-button, .logout-button, .mark-read-button {
          padding: 8px 16px;
          color: #fff;
          border: none;
          border-radius: 4px;
          cursor: pointer;
          font-size: 16px;
          transition: background-color 0.3s ease;
          margin-left: 10px; /* Butonlar arasına boşluk */
        }
         .back-button {
          background-color: #6c757d; /* Gri tonu */
        }
        .back-button:hover {
          background-color: #5a6268;
        }
        .logout-button {
          background-color: #dc3545; /* Kırmızı tonu */
        }
        .logout-button:hover {
          background-color: #c82333;
        }
        .mark-read-button {
          background-color: #007bff; /* Mavi tonu */
        }
        .mark-read-button:hover {
          background-color: #0056b3;
        }

        .messages-layout {
          display: grid;
          grid-template-columns: 300px 1fr;
          gap: 20px;
          background: #fff;
          border-radius: 8px;
          box-shadow: 0 2px 4px rgba(0,0,0,0.1);
          overflow: hidden;
        }
        .message-list {
          border-right: 1px solid #eee;
          max-height: calc(100vh - 200px); /* Başlık ve marginler düşüldü */
          overflow-y: auto;
        }
        .message-item {
          padding: 15px;
          border-bottom: 1px solid #eee;
          cursor: pointer;
          transition: background-color 0.2s ease;
        }
        .message-item:hover {
          background-color: #f5f5f5;
        }
        .message-item.selected {
          background-color: #e9e9e9;
        }
        .message-item.read {
          opacity: 0.7;
        }
        .message-name {
          font-weight: bold;
          color: #333;
        }
        .message-item.read .message-name {
          font-weight: normal;
        }
        .message-date {
          font-size: 14px;
          color: #666;
          margin-top: 5px;
        }

        .message-detail {
          padding: 20px;
        }
        .detail-header {
          margin-bottom: 20px;
          padding-bottom: 15px;
          border-bottom: 1px solid #eee;
        }
        .detail-header h2 {
          margin: 0 0 5px 0;
          color: #555;
        }
        .detail-field {
          margin-bottom: 15px;
          font-size: 16px;
          color: #555;
        }
        .detail-field strong {
          color: #333;
        }
        .message-content {
          margin-bottom: 20px;
          padding: 15px;
          background: #f9f9f9;
          border-radius: 4px;
          white-space: pre-wrap;
          border: 1px solid #eee;
          color: #333;
        }
        .no-message-selected {
          display: flex;
          align-items: center;
          justify-content: center;
          height: 100%;
          color: #888;
          font-size: 18px;
        }
      `}</style>
    </div>
  );
} 