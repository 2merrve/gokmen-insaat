import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';

interface Project {
  id: number;
  name: string;
  description: string;
  status: string;
  location: string;
  startDate: string;
  endDate: string;
  image?: string;
  createdAt: string;
  updatedAt?: string;
}

export default function AdminProjects() {
  const [projects, setProjects] = useState<Project[]>([]);
  const [isAdding, setIsAdding] = useState(false);
  const [editingId, setEditingId] = useState<number | null>(null);
  const [formData, setFormData] = useState<Partial<Project>>({
    name: '',
    description: '',
    status: 'planlandı',
    location: '',
    startDate: '',
    endDate: ''
  });
  const [selectedImage, setSelectedImage] = useState<File | null>(null);
  const router = useRouter();

  useEffect(() => {
    fetchProjects();
  }, []);

  const fetchProjects = async () => {
    const res = await fetch('/api/projects');
    const data = await res.json();
    setProjects(data);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const method = editingId ? 'PUT' : 'POST';
    const url = editingId ? `/api/projects?id=${editingId}` : '/api/projects';
    
    const formDataToSend = new FormData();
    Object.entries(formData).forEach(([key, value]) => {
      if (value !== undefined) {
        formDataToSend.append(key, String(value));
      }
    });

    if (selectedImage) {
      formDataToSend.append('image', selectedImage);
    }
    
    const res = await fetch(url, {
      method,
      body: formDataToSend
    });

    if (res.ok) {
      await fetchProjects();
      resetForm();
    }
  };

  const resetForm = () => {
    setFormData({
      name: '',
      description: '',
      status: 'planlandı',
      location: '',
      startDate: '',
      endDate: ''
    });
    setSelectedImage(null);
    setIsAdding(false);
    setEditingId(null);
  };

  const handleEdit = (project: Project) => {
    setFormData(project);
    setEditingId(project.id);
    setIsAdding(true);
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
    <div className="admin-dashboard">
      <header className="dashboard-header">
        <div className="header-content">
          <h1>Projeleri Yönet</h1>
          <div className="header-buttons">
            <button className="back-button" onClick={handleGoBack}>
              Geri
            </button>
            <button className="add-button" onClick={() => setIsAdding(true)}>
              Yeni Proje Ekle
            </button>
            <button className="logout-button" onClick={handleLogout}>
              Çıkış Yap
            </button>
          </div>
        </div>
      </header>

      <main className="dashboard-content">
        {isAdding && (
          <div className="form-container">
            <h2>{editingId ? 'Projeyi Düzenle' : 'Yeni Proje Ekle'}</h2>
            <form onSubmit={handleSubmit}>
              <div className="form-grid">
                <div className="form-group">
                  <label>Proje Adı:</label>
                  <input
                    type="text"
                    value={formData.name}
                    onChange={(e) => setFormData({...formData, name: e.target.value})}
                    required
                  />
                </div>
                <div className="form-group">
                  <label>Durum:</label>
                  <select
                    value={formData.status}
                    onChange={(e) => setFormData({...formData, status: e.target.value})}
                  >
                    <option value="planlandı">Planlandı</option>
                    <option value="devam_ediyor">Devam Ediyor</option>
                    <option value="tamamlandı">Tamamlandı</option>
                  </select>
                </div>
                <div className="form-group">
                  <label>Konum:</label>
                  <input
                    type="text"
                    value={formData.location}
                    onChange={(e) => setFormData({...formData, location: e.target.value})}
                    required
                  />
                </div>
                <div className="form-group">
                  <label>Başlangıç Tarihi:</label>
                  <input
                    type="date"
                    value={formData.startDate}
                    onChange={(e) => setFormData({...formData, startDate: e.target.value})}
                    required
                  />
                </div>
                <div className="form-group">
                  <label>Bitiş Tarihi:</label>
                  <input
                    type="date"
                    value={formData.endDate}
                    onChange={(e) => setFormData({...formData, endDate: e.target.value})}
                  />
                </div>
                <div className="form-group full-width">
                  <label>Açıklama:</label>
                  <textarea
                    value={formData.description}
                    onChange={(e) => setFormData({...formData, description: e.target.value})}
                    required
                  />
                </div>
                <div className="form-group full-width">
                  <label>Proje Fotoğrafı:</label>
                  <input
                    type="file"
                    accept="image/*"
                    onChange={(e) => setSelectedImage(e.target.files?.[0] || null)}
                  />
                  {formData.image && !selectedImage && (
                    <div className="current-image">
                      <p>Mevcut Fotoğraf:</p>
                      <img src={formData.image} alt="Proje fotoğrafı" />
                    </div>
                  )}
                </div>
              </div>
              <div className="form-actions">
                <button type="submit" className="submit-button">
                  {editingId ? 'Güncelle' : 'Ekle'}
                </button>
                <button type="button" className="cancel-button" onClick={resetForm}>
                  İptal
                </button>
              </div>
            </form>
          </div>
        )}

        <div className="projects-section">
          <h2>Mevcut Projeler</h2>
          <div className="projects-grid">
            {projects.map(project => (
              <div key={project.id} className="project-card">
                {project.image && (
                  <div className="project-image">
                    <img src={project.image} alt={project.name} />
                  </div>
                )}
                <div className="project-content">
                  <h3>{project.name}</h3>
                  <div className="project-details">
                    <p><strong>Durum:</strong> <span className={`status-badge ${project.status}`}>{project.status}</span></p>
                    <p><strong>Konum:</strong> {project.location}</p>
                    <p><strong>Başlangıç:</strong> {new Date(project.startDate).toLocaleDateString()}</p>
                    {project.endDate && <p><strong>Bitiş:</strong> {new Date(project.endDate).toLocaleDateString()}</p>}
                  </div>
                  <p className="project-description">{project.description}</p>
                  <button className="edit-button" onClick={() => handleEdit(project)}>
                    Düzenle
                  </button>
                </div>
              </div>
            ))}
          </div>
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

        .header-buttons {
          display: flex;
          gap: 1rem;
        }

        .back-button, .add-button, .logout-button, .submit-button, .cancel-button, .edit-button {
          padding: 0.5rem 1rem;
          border: none;
          border-radius: 4px;
          cursor: pointer;
          font-size: 0.9rem;
          transition: all 0.3s ease;
          color: white;
        }

        .back-button {
          background-color: rgba(255,255,255,0.1);
          border: 1px solid rgba(255,255,255,0.2);
        }

        .back-button:hover {
          background-color: rgba(255,255,255,0.2);
        }

        .add-button {
          background-color: #4CAF50;
        }

        .add-button:hover {
          background-color: #45a049;
        }

        .logout-button {
          background-color: rgba(255,255,255,0.1);
          border: 1px solid rgba(255,255,255,0.2);
        }

        .logout-button:hover {
          background-color: rgba(255,255,255,0.2);
        }

        .dashboard-content {
          max-width: 1200px;
          margin: 2rem auto;
          padding: 0 2rem;
        }

        .form-container {
          background: white;
          padding: 2rem;
          border-radius: 8px;
          box-shadow: 0 2px 4px rgba(0,0,0,0.05);
          margin-bottom: 2rem;
        }

        .form-container h2 {
          margin: 0 0 1.5rem 0;
          color: #1a237e;
          font-size: 1.5rem;
        }

        .form-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 1.5rem;
        }

        .form-group {
          display: flex;
          flex-direction: column;
          gap: 0.5rem;
        }

        .form-group.full-width {
          grid-column: 1 / -1;
        }

        .form-group label {
          color: #495057;
          font-weight: 500;
        }

        .form-group input[type="text"],
        .form-group input[type="date"],
        .form-group textarea,
        .form-group select {
          padding: 0.75rem;
          border: 1px solid #ced4da;
          border-radius: 4px;
          font-size: 1rem;
          transition: border-color 0.3s ease;
        }

        .form-group input[type="text"]:focus,
        .form-group input[type="date"]:focus,
        .form-group textarea:focus,
        .form-group select:focus {
          border-color: #1a237e;
          outline: none;
        }

        .form-group textarea {
          height: 120px;
          resize: vertical;
        }

        .form-actions {
          display: flex;
          gap: 1rem;
          margin-top: 2rem;
        }

        .submit-button {
          background-color: #1a237e;
        }

        .submit-button:hover {
          background-color: #0d47a1;
        }

        .cancel-button {
          background-color: #6c757d;
        }

        .cancel-button:hover {
          background-color: #5a6268;
        }

        .projects-section {
          margin-top: 2rem;
        }

        .projects-section h2 {
          color: #1a237e;
          margin-bottom: 1.5rem;
        }

        .projects-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
          gap: 1.5rem;
        }

        .project-card {
          background: white;
          border-radius: 8px;
          overflow: hidden;
          box-shadow: 0 2px 4px rgba(0,0,0,0.05);
          transition: transform 0.3s ease;
        }

        .project-card:hover {
          transform: translateY(-2px);
          box-shadow: 0 4px 8px rgba(0,0,0,0.1);
        }

        .project-image {
          height: 200px;
          overflow: hidden;
        }

        .project-image img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }

        .project-content {
          padding: 1.5rem;
        }

        .project-content h3 {
          margin: 0 0 1rem 0;
          color: #1a237e;
          font-size: 1.2rem;
        }

        .project-details {
          margin-bottom: 1rem;
        }

        .project-details p {
          margin: 0.5rem 0;
          color: #666;
        }

        .status-badge {
          padding: 0.25rem 0.5rem;
          border-radius: 12px;
          font-size: 0.8rem;
          font-weight: 500;
        }

        .status-badge.planlandı {
          background-color: #e3f2fd;
          color: #1976d2;
        }

        .status-badge.devam_ediyor {
          background-color: #fff3e0;
          color: #f57c00;
        }

        .status-badge.tamamlandı {
          background-color: #e8f5e9;
          color: #388e3c;
        }

        .project-description {
          color: #666;
          margin: 1rem 0;
          line-height: 1.5;
        }

        .edit-button {
          background-color: #ffc107;
          color: #000;
          width: 100%;
          margin-top: 1rem;
        }

        .edit-button:hover {
          background-color: #ffb300;
        }

        .current-image {
          margin-top: 1rem;
        }

        .current-image img {
          max-width: 200px;
          border-radius: 4px;
          border: 1px solid #ced4da;
        }

        @media (max-width: 768px) {
          .dashboard-content {
            padding: 0 1rem;
          }

          .form-grid {
            grid-template-columns: 1fr;
          }

          .projects-grid {
            grid-template-columns: 1fr;
          }

          .header-buttons {
            flex-direction: column;
          }
        }
      `}</style>
    </div>
  );
} 