import React from 'react';
import Menu from '../components/Menu';
import Image from 'next/image';

export default function Projelerimiz() {
  return (
    <div style={{
      minHeight: '100vh',
      color: '#333',
      display: 'flex',
      flexDirection: 'column',
      position: 'relative',
      zIndex: 1,
      background: '#ffffff',
    }}>
      <Menu />
      <main style={{ flex: 1, display: 'flex', flexDirection: 'column', alignItems: 'center', padding: '60px 16px 80px 16px', position: 'relative', zIndex: 1, width: '100%' }}>
        
        {/* Hero Section */}
        <section style={{
          position: 'relative',
          width: '100%',
          maxWidth: 1200,
          height: '60vh',
          overflow: 'hidden',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          textAlign: 'center',
          borderRadius: 16,
          boxShadow: '0 8px 20px rgba(0,0,0,0.1)',
          color: '#fff',
          marginBottom: 60,
        }}>
          <Image
            src="https://images.unsplash.com/photo-1464983953574-0892a716854b?auto=format&fit=crop&w=1600&q=80"
            alt="Projelerimiz Arka Planı"
            layout="fill"
            objectFit="cover"
            quality={100}
            priority
          />
          <div style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            background: 'rgba(0, 0, 0, 0.7)',
            zIndex: 1,
          }}></div>
          <div style={{ position: 'relative', zIndex: 2, maxWidth: 1000, padding: '0 20px' }}>
            <h1 style={{
              fontSize: 48,
              fontWeight: 'bold',
              marginBottom: 20,
              letterSpacing: 2,
              textShadow:'2px 2px 8px rgba(0,0,0,0.5)',
              background: 'linear-gradient(45deg, #fff, #e0e0e0)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              padding: '10px 20px',
              border: '2px solid rgba(255,255,255,0.2)',
              borderRadius: '10px',
              backdropFilter: 'blur(5px)',
              display: 'inline-block'
            }}>Projelerimiz</h1>
          </div>
        </section>

        {/* Devam Eden Projeler */}
        <section style={{
          width: '100%',
          maxWidth: 1200,
          marginBottom: 60,
          background: '#f8f8f8',
          borderRadius: 16,
          padding: 40,
          boxShadow: '0 4px 20px rgba(0,0,0,0.08)',
        }}>
          <h2 style={{ fontSize: 32, fontWeight: 'bold', marginBottom: 30, color: '#333', textAlign: 'center' }}>Devam Eden Projeler</h2>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
            <div style={{
              background: '#fff',
              borderRadius: 12,
              padding: 20,
              boxShadow: '0 2px 10px rgba(0,0,0,0.05)',
            }}>
              <h3 style={{ fontSize: 20, fontWeight: 600, marginBottom: 10 }}>Gökmen Villa</h3>
              <div style={{ display: 'flex', justifyContent: 'space-between', color: '#666', fontSize: 14 }}>
                <span>Başlangıç: 01.01.2024</span>
                <span>Tahmini Bitiş: 30.06.2024</span>
              </div>
            </div>
            <div style={{
              background: '#fff',
              borderRadius: 12,
              padding: 20,
              boxShadow: '0 2px 10px rgba(0,0,0,0.05)',
            }}>
              <h3 style={{ fontSize: 20, fontWeight: 600, marginBottom: 10 }}>Gökmen Apartmanı</h3>
              <div style={{ display: 'flex', justifyContent: 'space-between', color: '#666', fontSize: 14 }}>
                <span>Başlangıç: 15.03.2024</span>
                <span>Tahmini Bitiş: 15.09.2024</span>
              </div>
            </div>
          </div>
        </section>

        {/* Tamamlanan Projeler */}
        <section style={{
          width: '100%',
          maxWidth: 1200,
          marginBottom: 60,
          background: '#f8f8f8',
          borderRadius: 16,
          padding: 40,
          boxShadow: '0 4px 20px rgba(0,0,0,0.08)',
        }}>
          <h2 style={{ fontSize: 32, fontWeight: 'bold', marginBottom: 30, color: '#333', textAlign: 'center' }}>Tamamlanan Projeler</h2>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
            <div style={{
              background: '#fff',
              borderRadius: 12,
              padding: 20,
              boxShadow: '0 2px 10px rgba(0,0,0,0.05)',
            }}>
              <h3 style={{ fontSize: 20, fontWeight: 600, marginBottom: 10 }}>Gökmen Sitesi</h3>
              <div style={{ display: 'flex', justifyContent: 'space-between', color: '#666', fontSize: 14 }}>
                <span>Başlangıç: 01.01.2023</span>
                <span>Bitiş: 30.06.2023</span>
              </div>
            </div>
            <div style={{
              background: '#fff',
              borderRadius: 12,
              padding: 20,
              boxShadow: '0 2px 10px rgba(0,0,0,0.05)',
            }}>
              <h3 style={{ fontSize: 20, fontWeight: 600, marginBottom: 10 }}>Gökmen İş Merkezi</h3>
              <div style={{ display: 'flex', justifyContent: 'space-between', color: '#666', fontSize: 14 }}>
                <span>Başlangıç: 15.03.2023</span>
                <span>Bitiş: 15.09.2023</span>
              </div>
            </div>
          </div>
        </section>

        {/* Planlanan Projeler */}
        <section style={{
          width: '100%',
          maxWidth: 1200,
          marginBottom: 60,
          background: '#f8f8f8',
          borderRadius: 16,
          padding: 40,
          boxShadow: '0 4px 20px rgba(0,0,0,0.08)',
        }}>
          <h2 style={{ fontSize: 32, fontWeight: 'bold', marginBottom: 30, color: '#333', textAlign: 'center' }}>Planlanan Projeler</h2>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
            <div style={{
              background: '#fff',
              borderRadius: 12,
              padding: 20,
              boxShadow: '0 2px 10px rgba(0,0,0,0.05)',
            }}>
              <h3 style={{ fontSize: 20, fontWeight: 600, marginBottom: 10 }}>Gökmen Rezidans</h3>
              <div style={{ display: 'flex', justifyContent: 'space-between', color: '#666', fontSize: 14 }}>
                <span>Planlanan Başlangıç: 01.07.2024</span>
                <span>Tahmini Bitiş: 31.12.2024</span>
              </div>
            </div>
            <div style={{
              background: '#fff',
              borderRadius: 12,
              padding: 20,
              boxShadow: '0 2px 10px rgba(0,0,0,0.05)',
            }}>
              <h3 style={{ fontSize: 20, fontWeight: 600, marginBottom: 10 }}>Gökmen Ofis</h3>
              <div style={{ display: 'flex', justifyContent: 'space-between', color: '#666', fontSize: 14 }}>
                <span>Planlanan Başlangıç: 01.10.2024</span>
                <span>Tahmini Bitiş: 30.06.2025</span>
              </div>
            </div>
          </div>
        </section>

      </main>
    </div>
  );
} 