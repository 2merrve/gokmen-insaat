import React from 'react';
import Menu from '../components/Menu';
import Image from 'next/image';

export default function Hakkimizda() {
  return (
    <div style={{
      minHeight: '100vh',
      color: '#333',
      display: 'flex',
      flexDirection: 'column',
      position: 'relative',
      zIndex: 1,
      background: '#ffffff'
    }}>
      <Menu />

      {/* Hero Section */}
      <section style={{
        position: 'relative',
        width: '100%',
        height: '80vh',
        overflow: 'hidden',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        textAlign: 'center',
        color: '#fff',
      }}>
        <Image
          src="https://images.unsplash.com/photo-1464983953574-0892a716854b?auto=format&fit=crop&w=1600&q=80"
          alt="Şehir İnşaatı"
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
            textShadow: '2px 2px 8px rgba(0,0,0,0.5)',
            background: 'linear-gradient(45deg, #fff, #e0e0e0)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            padding: '10px 20px',
            border: '2px solid rgba(255,255,255,0.2)',
            borderRadius: '10px',
            backdropFilter: 'blur(5px)',
            display: 'inline-block'
          }}>Hakkımızda</h1>
        </div>
      </section>

      <main style={{ flex: 1, display: 'flex', flexDirection: 'column', alignItems: 'center', padding: '60px 16px', position: 'relative', zIndex: 1, width: '100%' }}>
        {/* Biz Kimiz? Bölümü - Basit Metin Odaklı */}
        <section style={{
          maxWidth: 800,
          width: '100%',
          marginBottom: 60,
          background: '#f8f8f8',
          borderRadius: 16,
          padding: 40,
          boxShadow: '0 4px 20px rgba(0,0,0,0.08)',
          textAlign: 'center',
          border: '1px solid #eee'
        }}>
          <h2 style={{ fontSize: 36, fontWeight: 'bold', marginBottom: 25, color: '#222', textShadow: '1px 1px 3px rgba(0,0,0,0.1)' }}>Biz Kimiz?</h2>
          <p style={{ fontSize: 18, color: '#444', lineHeight: 1.7, margin: '0 auto' }}>
            Gökmen İnşaat olarak; sağlam temeller üzerine sadece binalar değil, güven, kalite ve gelecek inşa ediyoruz. Sektörde genç bir firma olabiliriz; fakat cesaretimiz, işimize duyduğumuz saygı ve detaylara verdiğimiz önemle fark yaratmaya kararlıyız.

            Kurulduğumuz günden bu yana hedefimiz; modern, estetik ve işlevsel yapılarla yaşam alanlarını daha yaşanabilir kılmak. Proje yönetiminden malzeme seçimine, iş gücünden zaman planlamasına kadar her adımda şeffaf, disiplinli ve çözüm odaklı bir anlayışla ilerliyoruz.

            Gökmen İnşaat, sadece betonarme yapılardan ibaret değil; aynı zamanda verdiği sözleri tutan, her işte kaliteyi ve insanı önceleyen bir duruşun temsilcisidir.

            Biz; bugünün emeğini, yarının değerine dönüştüren genç ama kararlı bir inşaat firmasıyız.</p>
        </section>

        {/* Hizmetlerimiz Bölümü - Anasayfadaki gibi kartlara dönüştürüldü */}
        <section style={{
          maxWidth: 1000,
          width: '100%',
          marginBottom: 60,
          background: '#f8f8f8',
          borderRadius: 16,
          padding: 40,
          boxShadow: '0 4px 20px rgba(0,0,0,0.08)',
          textAlign: 'center',
          border: '1px solid #eee'
        }}>
          <h2 style={{ fontSize: 36, fontWeight: 'bold', marginBottom: 30, color: '#222', textShadow: '1px 1px 3px rgba(0,0,0,0.1)' }}>Hizmetlerimiz</h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: 25, justifyContent: 'center' }}>
            <div style={{ background: '#fff', borderRadius: 10, padding: '20px 30px', boxShadow: '0 2px 8px rgba(0,0,0,0.06)', textAlign: 'center', color: '#444', borderTop: '3px solid #555' }}>
              <h3 style={{ fontSize: 20, fontWeight: 600, marginBottom: 10, color: '#333' }}>Proje Yönetimi</h3>
              <p style={{ fontSize: 15, color: '#666' }}>Projelerinizin A&apos;dan Z&apos;ye tüm süreçlerini profesyonelce yönetiyoruz.</p>
            </div>
            <div style={{ background: '#fff', borderRadius: 10, padding: '20px 30px', boxShadow: '0 2px 8px rgba(0,0,0,0.06)', textAlign: 'center', color: '#444', borderTop: '3px solid #555' }}>
              <h3 style={{ fontSize: 20, fontWeight: 600, marginBottom: 10, color: '#333' }}>İnşaat</h3>
              <p style={{ fontSize: 15, color: '#666' }}>Yüksek standartlarda, güvenli ve modern yapılar inşa ediyoruz.</p>
            </div>
            <div style={{ background: '#fff', borderRadius: 10, padding: '20px 30px', boxShadow: '0 2px 8px rgba(0,0,0,0.06)', textAlign: 'center', color: '#444', borderTop: '3px solid #555' }}>
              <h3 style={{ fontSize: 20, fontWeight: 600, marginBottom: 10, color: '#333' }}>Danışmanlık</h3>
              <p style={{ fontSize: 15, color: '#666' }}>Sektördeki deneyimimizle projelerinize değer katan danışmanlık hizmetleri sunuyoruz.</p>
            </div>
          </div>
        </section>

        {/* Değerlerimiz Bölümü */}
        <section style={{
          maxWidth: 1000,
          width: '100%',
          marginBottom: 60,
          background: '#e8e8e8',
          borderRadius: 16,
          padding: 40,
          boxShadow: '0 8px 25px rgba(0,0,0,0.15)',
          textAlign: 'center',
          border: '1px solid #d0d0d0'
        }}>
          <h2 style={{ fontSize: 36, fontWeight: 'bold', marginBottom: 30, color: '#222', textShadow: '1px 1px 3px rgba(0,0,0,0.1)' }}>Değerlerimiz</h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: 30, justifyContent: 'center' }}>
            <div style={{ background: '#fff', borderRadius: 10, padding: '20px 30px', boxShadow: '0 2px 8px rgba(0,0,0,0.06)', textAlign: 'center', color: '#444', borderTop: '3px solid #555' }}>
              <h3 style={{ fontSize: 20, fontWeight: 600, marginBottom: 10, color: '#333' }}>Güvenilirlik</h3>
              <p style={{ fontSize: 15, color: '#666' }}>İşimizi dürüstlük ve şeffaflık ilkeleriyle yürütürüz.</p>
            </div>
            <div style={{ background: '#fff', borderRadius: 10, padding: '20px 30px', boxShadow: '0 2px 8px rgba(0,0,0,0.06)', textAlign: 'center', color: '#444', borderTop: '3px solid #555' }}>
              <h3 style={{ fontSize: 20, fontWeight: 600, marginBottom: 10, color: '#333' }}>Kalite</h3>
              <p style={{ fontSize: 15, color: '#666' }}>Her projede en yüksek kalite standartlarını hedefleriz.</p>
            </div>
            <div style={{ background: '#fff', borderRadius: 10, padding: '20px 30px', boxShadow: '0 2px 8px rgba(0,0,0,0.06)', textAlign: 'center', color: '#444', borderTop: '3px solid #555' }}>
              <h3 style={{ fontSize: 20, fontWeight: 600, marginBottom: 10, color: '#333' }}>İnovasyon</h3>
              <p style={{ fontSize: 15, color: '#666' }}>Yenilikçi çözümlerle sektörde fark yaratırız.</p>
            </div>
            <div style={{ background: '#fff', borderRadius: 10, padding: '20px 30px', boxShadow: '0 2px 8px rgba(0,0,0,0.06)', textAlign: 'center', color: '#444', borderTop: '3px solid #555' }}>
              <h3 style={{ fontSize: 20, fontWeight: 600, marginBottom: 10, color: '#333' }}>Müşteri Memnuniyeti</h3>
              <p style={{ fontSize: 15, color: '#666' }}>Müşterilerimizin beklentilerini aşmayı önceliklendiririz.</p>
            </div>
          </div>
        </section>

        {/* İş Yapış Şeklimiz Bölümü */}
        <section style={{
          maxWidth: 1000,
          width: '100%',
          marginBottom: 60,
          background: '#f8f8f8',
          borderRadius: 16,
          padding: 40,
          boxShadow: '0 4px 20px rgba(0,0,0,0.08)',
          textAlign: 'center',
          border: '1px solid #eee'
        }}>
          <h2 style={{ fontSize: 36, fontWeight: 'bold', marginBottom: 30, color: '#222', textShadow: '1px 1px 3px rgba(0,0,0,0.1)' }}>İş Yapış Şeklimiz</h2>
          <div style={{ fontSize: 18, color: '#444', lineHeight: 1.6, maxWidth: 800, margin: '0 auto', textAlign: 'left' }}>
            <ul style={{ listStyle: 'none', padding: 0 }}>
              <li style={{ marginBottom: 15, paddingLeft: 20, position: 'relative' }}>🏗️ Projelerimizde detaylı planlama ve titiz çalışma süreçleri uygularız.</li>
              <li style={{ marginBottom: 15, paddingLeft: 20, position: 'relative' }}>Transparency ve açık iletişim ile tüm paydaşlarımızı bilgilendiririz.</li>
              <li style={{ marginBottom: 15, paddingLeft: 20, position: 'relative' }}>Modern mühendislik teknikleri ve en son teknolojiyi projelerimize entegre ederiz.</li>
              <li style={{ marginBottom: 15, paddingLeft: 20, position: 'relative' }}>Sürdürülebilirlik ve çevreye duyarlılık ilkelerine bağlı kalırız.</li>
              <li style={{ marginBottom: 0, paddingLeft: 20, position: 'relative' }}>Her aşamada uyguladığımız sıkı kalite kontrol süreçleri ile hatasız teslimat garantisi veririz.</li>
            </ul>
          </div>
        </section>

        {/* Ekibimiz Bölümü */}
        <section style={{
          maxWidth: 1000,
          width: '100%',
          marginBottom: 60,
          background: '#f8f8f8',
          borderRadius: 16,
          padding: 40,
          boxShadow: '0 4px 20px rgba(0,0,0,0.08)',
          textAlign: 'center',
          border: '1px solid #eee'
        }}>
          <h2 style={{ fontSize: 36, fontWeight: 'bold', marginBottom: 30, color: '#222', textShadow: '1px 1px 3px rgba(0,0,0,0.1)' }}>Ekibimiz</h2>
          <p style={{ fontSize: 18, color: '#444', lineHeight: 1.6, maxWidth: 800, margin: '0 auto 40px auto' }}>Başarımızın ardındaki güçlü ve deneyimli ekibimizle tanışın.</p>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: 30, justifyContent: 'center' }}>
            {/* Yönetici */}
            <div style={{ background: '#fff', borderRadius: 10, overflow: 'hidden', boxShadow: '0 2px 8px rgba(0,0,0,0.06)', textAlign: 'center', paddingBottom: 20 }}>
              <div style={{ position: 'relative', width: '100%', height: 200, marginBottom: 15 }}>
                <Image
                  src="/images/yonetim.jpg"
                  alt="Yönetim Ekibi"
                  layout="fill"
                  objectFit="cover"
                  style={{ filter: 'grayscale(30%)' }}
                />
              </div>
              <h3 style={{ fontSize: 20, fontWeight: 600, marginBottom: 5, color: '#333' }}>Yönetim Ekibi</h3>
              <p style={{ fontSize: 15, color: '#555' }}>Profesyonel Yönetim Kadrosu</p>
            </div>
          </div>
        </section>

      </main>

      <footer style={{ textAlign: 'center', padding: '25px 0', color: '#888', fontSize: 14, background: '#f0f0f0', borderTop: '1px solid #e0e0e0', position: 'relative', zIndex: 1 }}>
        © {new Date().getFullYear()} Gökmen İnşaat. Tüm hakları saklıdır.
      </footer>
    </div>
  );
} 