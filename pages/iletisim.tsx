import React, { useState } from 'react';
import Menu from '../components/Menu';
import Image from 'next/image';
import type { FormEvent } from 'react';

export default function Iletisim() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [status, setStatus] = useState('');

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    setStatus('Gönderiliyor...');

    const res = await fetch('/api/messages', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ name, email, message }),
    });

    const data = await res.json();

    if (res.status === 201) {
      setStatus('Mesajınız başarıyla gönderildi!');
      setName('');
      setEmail('');
      setMessage('');
    } else {
      setStatus(`Mesaj gönderilirken bir hata oluştu: ${data.error}`);
    }
  };

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
        height: '50vh',
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
            textShadow:'2px 2px 8px rgba(0,0,0,0.5)',
            background: 'linear-gradient(45deg, #fff, #e0e0e0)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            padding: '10px 20px',
            border: '2px solid rgba(255,255,255,0.2)',
            borderRadius: '10px',
            backdropFilter: 'blur(5px)',
            display: 'inline-block'
          }}>İletişim</h1>
        </div>
      </section>

      <main style={{flex:1,display:'flex',flexDirection:'column',alignItems:'center',padding:'60px 16px',position:'relative',zIndex:1, width:'100%'}}>
        <section style={{
          maxWidth: 1000,
          width: '100%',
          marginBottom: 60,
          background: '#f9f9f9',
          borderRadius: 16,
          padding: 40,
          boxShadow:'0 4px 20px rgba(0,0,0,0.1)',
          textAlign: 'center',
        }}>
          <h2 style={{fontSize: 36, fontWeight: 'bold', marginBottom: 30, color:'#333'}}>İletişim Bilgileri</h2>
          <div style={{display:'grid', gridTemplateColumns:'repeat(auto-fit, minmax(250px, 1fr))', gap:25, justifyContent:'center'}}>
            <div style={{background:'#fff',borderRadius:10,padding:'20px 30px', boxShadow:'0 2px 8px rgba(0,0,0,0.08)', textAlign: 'center', color:'#333', borderTop:'3px solid #556270'}}>
              <h3 style={{fontSize: 20, fontWeight: 600, marginBottom: 10, color:'#333'}}>Adres</h3>
              <p style={{fontSize: 15, color:'#555'}}>Konya, Türkiye</p>
            </div>
            <div style={{background:'#fff',borderRadius:10,padding:'20px 30px', boxShadow:'0 2px 8px rgba(0,0,0,0.08)', textAlign: 'center', color:'#333', borderTop:'3px solid #556270'}}>
              <h3 style={{fontSize: 20, fontWeight: 600, marginBottom: 10, color:'#333'}}>Telefon</h3>
              <p style={{fontSize: 15, color:'#555'}}>+90 505 098 60 93</p>
            </div>
            <div style={{background:'#fff',borderRadius:10,padding:'20px 30px', boxShadow:'0 2px 8px rgba(0,0,0,0.08)', textAlign: 'center', color:'#333', borderTop:'3px solid #556270'}}>
              <h3 style={{fontSize: 20, fontWeight: 600, marginBottom: 10, color:'#333'}}>E-posta</h3>
              <p style={{fontSize: 15, color:'#555'}}>inşaat@gokmeninsaat.com</p>
            </div>
          </div>
        </section>

        <section style={{
          maxWidth: 1000,
          width: '100%',
          marginBottom: 60,
          background: '#f9f9f9',
          borderRadius: 16,
          padding: 40,
          boxShadow:'0 4px 20px rgba(0,0,0,0.1)',
          textAlign: 'center',
        }}>
          <h2 style={{fontSize: 36, fontWeight: 'bold', marginBottom: 30, color:'#333'}}>İletişim Formu</h2>
          <form style={{maxWidth: 600, margin: '0 auto'}} onSubmit={handleSubmit}>
            <div style={{marginBottom: 20}}>
              <input
                type="text"
                placeholder="Adınız"
                value={name}
                onChange={(e) => setName(e.target.value)}
                style={{
                  width: '100%',
                  padding: '12px 15px',
                  borderRadius: 5,
                  border: '1px solid #ddd',
                  fontSize: 16,
                  outline: 'none'
                }} />
            </div>
            <div style={{marginBottom: 20}}>
              <input
                type="email"
                placeholder="E-posta Adresiniz"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                style={{
                  width: '100%',
                  padding: '12px 15px',
                  borderRadius: 5,
                  border: '1px solid #ddd',
                  fontSize: 16,
                  outline: 'none'
                }} />
            </div>
            <div style={{marginBottom: 20}}>
              <textarea
                placeholder="Mesajınız"
                rows={5}
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                style={{
                  width: '100%',
                  padding: '12px 15px',
                  borderRadius: 5,
                  border: '1px solid #ddd',
                  fontSize: 16,
                  outline: 'none',
                  resize: 'vertical'
                }}></textarea>
            </div>
            <button type="submit" style={{
              padding: '12px 30px',
              backgroundColor: '#333',
              color: '#fff',
              border: 'none',
              borderRadius: 8,
              fontSize: 16,
              fontWeight: 600,
              cursor: 'pointer',
              transition: 'all 0.3s ease',
              boxShadow: '0 4px 10px rgba(0,0,0,0.2)'
            }} className="contact-submit-button">Gönder</button>
            {status && <p style={{ marginTop: 20, fontSize: 16, color: status.includes('hata') ? 'red' : 'green' }}>{status}</p>}
            </form>
        </section>

        {/* Sosyal Medya Bölümü */}
        <section style={{
          maxWidth: 1000,
          width: '100%',
          marginBottom: 60,
          background: '#e8e8e8',
          borderRadius: 16,
          padding: 40,
          boxShadow:'0 8px 25px rgba(0,0,0,0.15)',
          textAlign: 'center',
          border: '1px solid #d0d0d0'
        }}>
          <h2 style={{fontSize: 36, fontWeight: 'bold', marginBottom: 25, color:'#222', textShadow: '1px 1px 3px rgba(0,0,0,0.1)'}}>Bizi Takip Edin</h2>
          <p style={{fontSize: 18, color: '#444', lineHeight: 1.6, maxWidth: 800, margin:'0 auto 40px auto'}}>Sosyal medya hesaplarımızdan bizi takip ederek güncel projelerimizden ve haberlerden haberdar olabilirsiniz.</p>
          <div style={{display:'flex', gap:30, justifyContent:'center'}}>
            {/* Sosyal Medya İkonları - Placeholder */}
            <a href="#" style={{
              display: 'inline-flex',
              alignItems: 'center',
              justifyContent: 'center',
              width: 60,
              height: 60,
              borderRadius: '50%',
              backgroundColor: '#333',
              color: '#fff',
              fontSize: 28,
              textDecoration: 'none',
              transition: 'all 0.3s ease',
              boxShadow: '0 2px 8px rgba(0,0,0,0.1)'
            }} className="social-icon">FB</a> {/* Facebook */}
            <a href="#" style={{
              display: 'inline-flex',
              alignItems: 'center',
              justifyContent: 'center',
              width: 60,
              height: 60,
              borderRadius: '50%',
              backgroundColor: '#333',
              color: '#fff',
              fontSize: 28,
              textDecoration: 'none',
              transition: 'all 0.3s ease',
              boxShadow: '0 2px 8px rgba(0,0,0,0.1)'
            }} className="social-icon">TW</a> {/* Twitter */}
            <a href="#" style={{
              display: 'inline-flex',
              alignItems: 'center',
              justifyContent: 'center',
              width: 60,
              height: 60,
              borderRadius: '50%',
              backgroundColor: '#333',
              color: '#fff',
              fontSize: 28,
              textDecoration: 'none',
              transition: 'all 0.3s ease',
              boxShadow: '0 2px 8px rgba(0,0,0,0.1)'
            }} className="social-icon">IG</a> {/* Instagram */}
            <a href="#" style={{
              display: 'inline-flex',
              alignItems: 'center',
              justifyContent: 'center',
              width: 60,
              height: 60,
              borderRadius: '50%',
              backgroundColor: '#333',
              color: '#fff',
              fontSize: 28,
              textDecoration: 'none',
              transition: 'all 0.3s ease',
              boxShadow: '0 2px 8px rgba(0,0,0,0.1)'
            }} className="social-icon">IN</a> {/* LinkedIn */}
          </div>

          {/* Arama Çubuğu */}
          <div style={{marginTop: 40, width: '100%', maxWidth: 500, margin: '40px auto 0 auto', padding: '10px', background: '#fff', borderRadius: 10, boxShadow: '0 4px 15px rgba(0,0,0,0.1)'}}>
            <input
              type="text"
              placeholder="Sitede Arayın..."
              style={{
                width: '100%',
                padding: '12px 15px',
                borderRadius: 8,
                border: '1px solid #ccc',
                fontSize: 16,
                outline: 'none',
                boxShadow: '0 2px 8px rgba(0,0,0,0.05)'
              }}
            />
          </div>
           <style jsx>{`
            .social-icon:hover {
              background-color: #555;
              box-shadow: 0 4px 12px rgba(0,0,0,0.2);
              transform: translateY(-3px);
            }
            .contact-submit-button:hover {
              background-color: #555;
              box-shadow: 0 6px 15px rgba(0,0,0,0.3);
              transform: translateY(-2px);
            }
          `}</style>
        </section>
      </main>

      <footer style={{textAlign:'center',padding:'25px 0',color:'#888',fontSize:14,background:'#f0f0f0',borderTop:'1px solid #e0e0e0',position:'relative',zIndex:1}}>
        © {new Date().getFullYear()} Gökmen İnşaat. Tüm hakları saklıdır.
      </footer>
    </div>
  );
} 