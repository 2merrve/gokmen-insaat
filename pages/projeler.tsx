import React from 'react';
import Menu from '../components/Menu';
import Image from 'next/image';

export default function Projeler() {
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

      <main style={{flex:1,display:'flex',flexDirection:'column',alignItems:'center',padding:'60px 16px',position:'relative',zIndex:1, width:'100%'}}>
        <section style={{
          maxWidth: 1000,
          width: '100%',
          marginBottom: 60,
          background: '#f8f8f8',
          borderRadius: 16,
          padding: 40,
          boxShadow:'0 4px 20px rgba(0,0,0,0.08)',
          textAlign: 'center',
          border: '1px solid #eee'
        }}>
          <h2 style={{fontSize: 36, fontWeight: 'bold', marginBottom: 30, color:'#222', textShadow: '1px 1px 3px rgba(0,0,0,0.1)'}}>Tamamlanan Projeler</h2>
          <div style={{display:'grid', gridTemplateColumns:'repeat(auto-fit, minmax(300px, 1fr))', gap:30, justifyContent:'center'}}>
            <div style={{background:'#fff',borderRadius:10,overflow:'hidden', boxShadow:'0 2px 8px rgba(0,0,0,0.08)', textAlign: 'left', color:'#333'}}>
              <div style={{position:'relative', height:200}}>
                <Image
                  src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=800&q=80"
                  alt="Proje 1"
                  layout="fill"
                  objectFit="cover"
                  style={{filter: 'grayscale(50%)'}}
                />
              </div>
              <div style={{padding:'20px'}}>
                <h3 style={{fontSize: 20, fontWeight: 600, marginBottom: 10, color:'#222'}}>Modern Rezidans</h3>
                <p style={{fontSize: 15, color:'#444', marginBottom: 15}}>İstanbul'da 20 katlı lüks rezidans projesi</p>
                <div style={{display:'flex', justifyContent:'space-between', alignItems:'center'}}>
                  <span style={{fontSize: 14, color:'#555', fontWeight: 500}}>Tamamlandı</span>
                  <span style={{fontSize: 14, color:'#555'}}>2023</span>
                </div>
              </div>
            </div>

            <div style={{background:'#fff',borderRadius:10,overflow:'hidden', boxShadow:'0 2px 8px rgba(0,0,0,0.08)', textAlign: 'left', color:'#333'}}>
              <div style={{position:'relative', height:200}}>
                <Image
                  src="https://images.unsplash.com/photo-1486325212027-8081e485255e?auto=format&fit=crop&w=800&q=80"
                  alt="Proje 2"
                  layout="fill"
                  objectFit="cover"
                  style={{filter: 'grayscale(50%)'}}
                />
              </div>
              <div style={{padding:'20px'}}>
                <h3 style={{fontSize: 20, fontWeight: 600, marginBottom: 10, color:'#222'}}>Ticari Plaza</h3>
                <p style={{fontSize: 15, color:'#444', marginBottom: 15}}>Ankara'da A+ ofis katları</p>
                <div style={{display:'flex', justifyContent:'space-between', alignItems:'center'}}>
                  <span style={{fontSize: 14, color:'#555', fontWeight: 500}}>Tamamlandı</span>
                  <span style={{fontSize: 14, color:'#555'}}>2022</span>
                </div>
              </div>
            </div>

            <div style={{background:'#fff',borderRadius:10,overflow:'hidden', boxShadow:'0 2px 8px rgba(0,0,0,0.08)', textAlign: 'left', color:'#333'}}>
              <div style={{position:'relative', height:200}}>
                <Image
                  src="https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=800&q=80"
                  alt="Proje 3"
                  layout="fill"
                  objectFit="cover"
                  style={{filter: 'grayscale(50%)'}}
                />
              </div>
              <div style={{padding:'20px'}}>
                <h3 style={{fontSize: 20, fontWeight: 600, marginBottom: 10, color:'#222'}}>Site Projesi</h3>
                <p style={{fontSize: 15, color:'#444', marginBottom: 15}}>İzmir'de 500 dairelik yaşam kompleksi</p>
                <div style={{display:'flex', justifyContent:'space-between', alignItems:'center'}}>
                  <span style={{fontSize: 14, color:'#555', fontWeight: 500}}>Tamamlandı</span>
                  <span style={{fontSize: 14, color:'#555'}}>2021</span>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer style={{textAlign:'center',padding:'25px 0',color:'#888',fontSize:14,background:'#f0f0f0',borderTop:'1px solid #e0e0e0',position:'relative',zIndex:1}}>
        © {new Date().getFullYear()} Gökmen İnşaat. Tüm hakları saklıdır.
      </footer>
    </div>
  );
} 