import React from 'react';
import Menu from '../components/Menu';
import Image from 'next/image';

export default function Hizmetlerimiz() {
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
          height: '80vh',
          overflow: 'hidden',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          textAlign: 'center',
          borderRadius: 16,
          boxShadow: '0 8px 20px rgba(0,0,0,0.1)',
          color: '#fff',
        }}>
          <Image
            src="https://images.unsplash.com/photo-1464983953574-0892a716854b?auto=format&fit=crop&w=1600&q=80"
            alt="Faaliyetlerimiz Arka Planı"
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
            }}>Faaliyetlerimiz</h1>
          </div>
        </section>

        {/* Hizmetler Bölümü */}
        <section style={{
          width: '100%',
          maxWidth: 1200,
          marginTop: 80,
          marginBottom: 60,
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))',
          gap: 30,
        }}>
          
          {/* Proje Yönetimi */}
          <div style={{
            background: '#fff',
            borderRadius: 16,
            overflow: 'hidden',
            boxShadow: '0 4px 20px rgba(0,0,0,0.1)',
            transition: 'transform 0.3s ease',
            ':hover': {
              transform: 'translateY(-5px)'
            }
          }}>
            <div style={{ position: 'relative', height: 250, width: '100%' }}>
              <Image
                src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=800&q=80"
                alt="Proje Yönetimi"
                layout="fill"
                objectFit="cover"
                style={{ filter: 'grayscale(30%)' }}
              />
              <div style={{
                position: 'absolute',
                bottom: 0,
                left: 0,
                right: 0,
                background: 'linear-gradient(to top, rgba(0,0,0,0.8), transparent)',
                padding: '20px',
                color: '#fff'
              }}>
                <h3 style={{ fontSize: 24, fontWeight: 700, margin: 0 }}>Proje Yönetimi</h3>
              </div>
            </div>
            <div style={{ padding: 25 }}>
              <p style={{ fontSize: 16, color: '#555', lineHeight: 1.6 }}>Her projenin bir hikâyesi vardır. Biz, bu hikâyeyi en doğru şekilde planlar, süreci profesyonelce yönetir, zamanında ve eksiksiz tamamlarız.</p>
              <div style={{ marginTop: 20, display: 'flex', gap: 10 }}>
                <span style={{ background: '#f0f0f0', padding: '5px 10px', borderRadius: 5, fontSize: 14, color: '#666' }}>Planlama</span>
                <span style={{ background: '#f0f0f0', padding: '5px 10px', borderRadius: 5, fontSize: 14, color: '#666' }}>Yönetim</span>
                <span style={{ background: '#f0f0f0', padding: '5px 10px', borderRadius: 5, fontSize: 14, color: '#666' }}>Takip</span>
              </div>
            </div>
          </div>

          {/* İnşaat Mühendisliği */}
          <div style={{
            background: '#fff',
            borderRadius: 16,
            overflow: 'hidden',
            boxShadow: '0 4px 20px rgba(0,0,0,0.1)',
            transition: 'transform 0.3s ease',
            ':hover': {
              transform: 'translateY(-5px)'
            }
          }}>
            <div style={{ position: 'relative', height: 250, width: '100%' }}>
              <Image
                src="https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=800&q=80"
                alt="İnşaat Mühendisliği"
                layout="fill"
                objectFit="cover"
                style={{ filter: 'grayscale(30%)' }}
              />
              <div style={{
                position: 'absolute',
                bottom: 0,
                left: 0,
                right: 0,
                background: 'linear-gradient(to top, rgba(0,0,0,0.8), transparent)',
                padding: '20px',
                color: '#fff'
              }}>
                <h3 style={{ fontSize: 24, fontWeight: 700, margin: 0 }}>İnşaat Mühendisliği</h3>
              </div>
            </div>
            <div style={{ padding: 25 }}>
              <p style={{ fontSize: 16, color: '#555', lineHeight: 1.6 }}>Güvenli, dayanıklı ve modern yapılar için mühendislik çözümleri sunuyoruz. Tasarım, analiz ve uygulama konularında uzman ekibimizle yanınızdayız.</p>
              <div style={{ marginTop: 20, display: 'flex', gap: 10 }}>
                <span style={{ background: '#f0f0f0', padding: '5px 10px', borderRadius: 5, fontSize: 14, color: '#666' }}>Tasarım</span>
                <span style={{ background: '#f0f0f0', padding: '5px 10px', borderRadius: 5, fontSize: 14, color: '#666' }}>Analiz</span>
                <span style={{ background: '#f0f0f0', padding: '5px 10px', borderRadius: 5, fontSize: 14, color: '#666' }}>Uygulama</span>
              </div>
            </div>
          </div>

          {/* Danışmanlık */}
          <div style={{
            background: '#fff',
            borderRadius: 16,
            overflow: 'hidden',
            boxShadow: '0 4px 20px rgba(0,0,0,0.1)',
            transition: 'transform 0.3s ease',
            ':hover': {
              transform: 'translateY(-5px)'
            }
          }}>
            <div style={{ position: 'relative', height: 250, width: '100%' }}>
              <Image
                src="https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=800&q=80"
                alt="Danışmanlık"
                layout="fill"
                objectFit="cover"
                style={{ filter: 'grayscale(30%)' }}
              />
              <div style={{
                position: 'absolute',
                bottom: 0,
                left: 0,
                right: 0,
                background: 'linear-gradient(to top, rgba(0,0,0,0.8), transparent)',
                padding: '20px',
                color: '#fff'
              }}>
                <h3 style={{ fontSize: 24, fontWeight: 700, margin: 0 }}>Danışmanlık</h3>
              </div>
            </div>
            <div style={{ padding: 25 }}>
              <p style={{ fontSize: 16, color: '#555', lineHeight: 1.6 }}>Sektördeki bilgi ve deneyimimizi sizinle paylaşarak projelerinizde doğru kararları almanıza yardımcı oluyoruz. Fizibilite çalışmalarından risk yönetimine kadar geniş bir alanda danışmanlık hizmeti sunuyoruz.</p>
              <div style={{ marginTop: 20, display: 'flex', gap: 10 }}>
                <span style={{ background: '#f0f0f0', padding: '5px 10px', borderRadius: 5, fontSize: 14, color: '#666' }}>Fizibilite</span>
                <span style={{ background: '#f0f0f0', padding: '5px 10px', borderRadius: 5, fontSize: 14, color: '#666' }}>Risk Yönetimi</span>
                <span style={{ background: '#f0f0f0', padding: '5px 10px', borderRadius: 5, fontSize: 14, color: '#666' }}>Strateji</span>
              </div>
            </div>
          </div>
        </section>

        {/* Teklif Süreçleri Bölümü */}
        <section style={{
          width: '100%',
          maxWidth: 1000,
          marginBottom: 60,
          background: '#f8f8f8',
          borderRadius: 16,
          padding: 40,
          boxShadow: '0 4px 20px rgba(0,0,0,0.08)',
          borderLeft: 'none',
        }}>
          <h2 style={{ fontSize: 30, fontWeight: 'bold', marginBottom: 25, color: '#333', textAlign: 'center' }}>Teklif Süreçlerimiz</h2>
          <div style={{ fontSize: 17, color: '#555', lineHeight: 1.7, maxWidth: 800, margin: '0 auto' }}>
            <p style={{ marginBottom: 25, textAlign: 'center' }}>
              Firmamızda teklif süreci, müşteri ihtiyaçlarının detaylı analizi ile başlar. Proje kapsamı ve teknik gereksinimler belirlenerek, maliyet ve zaman çizelgesi titizlikle hazırlanır. Uzman ekibimiz tarafından oluşturulan teklif, şeffaf ve detaylı olarak müşteriye sunulur. Onay sonrası, proje planlaması ve sözleşme aşamasına geçilir. Süreç boyunca iletişim ve revizyonlar etkin şekilde yönetilir, kaliteli ve zamanında hizmet garantisi sağlanır.
            </p>
            
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: 20, marginTop: 30 }}>
              <div style={{ background: '#fff', padding: 25, borderRadius: 12, boxShadow: '0 2px 8px rgba(0,0,0,0.06)', textAlign: 'center' }}>
                <div style={{ fontSize: 24, marginBottom: 15 }}>📊</div>
                <h3 style={{ fontSize: 18, fontWeight: 600, marginBottom: 10, color: '#333' }}>Analiz</h3>
                <p style={{ fontSize: 15, color: '#666' }}>Müşteri ihtiyaçları ve proje gereksinimlerinin detaylı analizi</p>
              </div>
              
              <div style={{ background: '#fff', padding: 25, borderRadius: 12, boxShadow: '0 2px 8px rgba(0,0,0,0.06)', textAlign: 'center' }}>
                <div style={{ fontSize: 24, marginBottom: 15 }}>📝</div>
                <h3 style={{ fontSize: 18, fontWeight: 600, marginBottom: 10, color: '#333' }}>Planlama</h3>
                <p style={{ fontSize: 15, color: '#666' }}>Maliyet ve zaman çizelgesi hazırlığı</p>
              </div>
              
              <div style={{ background: '#fff', padding: 25, borderRadius: 12, boxShadow: '0 2px 8px rgba(0,0,0,0.06)', textAlign: 'center' }}>
                <div style={{ fontSize: 24, marginBottom: 15 }}>🤝</div>
                <h3 style={{ fontSize: 18, fontWeight: 600, marginBottom: 10, color: '#333' }}>Onay</h3>
                <p style={{ fontSize: 15, color: '#666' }}>Teklif sunumu ve sözleşme süreci</p>
              </div>
              
              <div style={{ background: '#fff', padding: 25, borderRadius: 12, boxShadow: '0 2px 8px rgba(0,0,0,0.06)', textAlign: 'center' }}>
                <div style={{ fontSize: 24, marginBottom: 15 }}>📈</div>
                <h3 style={{ fontSize: 18, fontWeight: 600, marginBottom: 10, color: '#333' }}>Takip</h3>
                <p style={{ fontSize: 15, color: '#666' }}>Süreç yönetimi ve kalite kontrolü</p>
              </div>
            </div>
            
            <div style={{ textAlign: 'center', marginTop: 30 }}>
              <a href="/iletisim" style={{
                display: 'inline-block',
                padding: '12px 30px',
                background: '#333',
                color: '#fff',
                textDecoration: 'none',
                borderRadius: 8,
                fontWeight: 600,
                transition: 'all 0.3s ease',
                boxShadow: '0 4px 10px rgba(0,0,0,0.1)'
              }}>Teklif Alın</a>
            </div>
          </div>
        </section>

        {/* Proje Tarihleri Bölümü */}
        <section style={{
          width: '100%',
          maxWidth: 1000,
          marginBottom: 40,
          background: '#f8f8f8',
          borderRadius: 16,
          padding: 40,
          boxShadow: '0 4px 20px rgba(0,0,0,0.08)',
          borderLeft: 'none',
        }}>
          <h2 style={{ fontSize: 30, fontWeight: 'bold', marginBottom: 25, color: '#333' }}>Proje Takvimi</h2>
          <div style={{ fontSize: 17, color: '#555', lineHeight: 1.7 }}>
            <p style={{ marginBottom: 20 }}>Gökmen İnşaat olarak, projelerimizin başlangıç ve bitiş tarihlerini şeffaf bir şekilde paylaşıyoruz. Aşağıda güncel proje takvimimizi bulabilirsiniz.</p>
            
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: 20, marginTop: 30 }}>
              {/* Devam Eden Projeler */}
              <div style={{ background: '#fff', padding: 20, borderRadius: 8, boxShadow: '0 2px 8px rgba(0,0,0,0.06)', border: '1px solid #eee' }}>
                <h3 style={{ fontSize: 20, fontWeight: 'bold', marginBottom: 15, color: '#333' }}>Devam Eden Projeler</h3>
                <ul style={{ listStyle: 'none', padding: 0 }}>
                  <li style={{ marginBottom: 12, paddingLeft: 20, position: 'relative' }}>
                    <span style={{ position: 'absolute', left: 0, color: '#555' }}>•</span>
                    <strong>Gökmen Villa</strong><br />
                    <span style={{ fontSize: 15, color: '#666' }}>Başlangıç: 01.01.2024</span><br />
                    <span style={{ fontSize: 15, color: '#666' }}>Tahmini Bitiş: 30.06.2024</span>
                  </li>
                  <li style={{ marginBottom: 12, paddingLeft: 20, position: 'relative' }}>
                    <span style={{ position: 'absolute', left: 0, color: '#555' }}>•</span>
                    <strong>Gökmen Apartmanı</strong><br />
                    <span style={{ fontSize: 15, color: '#666' }}>Başlangıç: 15.03.2024</span><br />
                    <span style={{ fontSize: 15, color: '#666' }}>Tahmini Bitiş: 15.09.2024</span>
                  </li>
                </ul>
              </div>

              {/* Tamamlanan Projeler */}
              <div style={{ background: '#fff', padding: 20, borderRadius: 8, boxShadow: '0 2px 8px rgba(0,0,0,0.06)', border: '1px solid #eee' }}>
                <h3 style={{ fontSize: 20, fontWeight: 'bold', marginBottom: 15, color: '#333' }}>Tamamlanan Projeler</h3>
                <ul style={{ listStyle: 'none', padding: 0 }}>
                  <li style={{ marginBottom: 12, paddingLeft: 20, position: 'relative' }}>
                    <span style={{ position: 'absolute', left: 0, color: '#555' }}>•</span>
                    <strong>Gökmen Sitesi</strong><br />
                    <span style={{ fontSize: 15, color: '#666' }}>Başlangıç: 01.01.2023</span><br />
                    <span style={{ fontSize: 15, color: '#666' }}>Bitiş: 30.06.2023</span>
                  </li>
                  <li style={{ marginBottom: 12, paddingLeft: 20, position: 'relative' }}>
                    <span style={{ position: 'absolute', left: 0, color: '#555' }}>•</span>
                    <strong>Gökmen İş Merkezi</strong><br />
                    <span style={{ fontSize: 15, color: '#666' }}>Başlangıç: 15.03.2023</span><br />
                    <span style={{ fontSize: 15, color: '#666' }}>Bitiş: 15.09.2023</span>
                  </li>
                </ul>
              </div>

              {/* Planlanan Projeler */}
              <div style={{ background: '#fff', padding: 20, borderRadius: 8, boxShadow: '0 2px 8px rgba(0,0,0,0.06)', border: '1px solid #eee' }}>
                <h3 style={{ fontSize: 20, fontWeight: 'bold', marginBottom: 15, color: '#333' }}>Planlanan Projeler</h3>
                <ul style={{ listStyle: 'none', padding: 0 }}>
                  <li style={{ marginBottom: 12, paddingLeft: 20, position: 'relative' }}>
                    <span style={{ position: 'absolute', left: 0, color: '#555' }}>•</span>
                    <strong>Gökmen Rezidans</strong><br />
                    <span style={{ fontSize: 15, color: '#666' }}>Planlanan Başlangıç: 01.07.2024</span><br />
                    <span style={{ fontSize: 15, color: '#666' }}>Tahmini Bitiş: 31.12.2024</span>
                  </li>
                  <li style={{ marginBottom: 12, paddingLeft: 20, position: 'relative' }}>
                    <span style={{ position: 'absolute', left: 0, color: '#555' }}>•</span>
                    <strong>Gökmen Ofis</strong><br />
                    <span style={{ fontSize: 15, color: '#666' }}>Planlanan Başlangıç: 01.10.2024</span><br />
                    <span style={{ fontSize: 15, color: '#666' }}>Tahmini Bitiş: 30.06.2025</span>
                  </li>
                </ul>
              </div>
            </div>
            
            <p style={{ marginTop: 30, textAlign: 'center' }}>Tüm projelerimizi detaylı incelemek için <a href="/projeler" style={{ color: '#333', fontWeight: 'bold' }}>Projelerimiz</a> sayfamızı ziyaret edin.</p>
          </div>
        </section>

      </main>
    </div>
  );
} 