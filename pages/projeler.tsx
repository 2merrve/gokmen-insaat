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
            textShadow: '2px 2px 8px rgba(0,0,0,0.5)',
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

      <main style={{ flex: 1, display: 'flex', flexDirection: 'column', alignItems: 'center', padding: '60px 16px', position: 'relative', zIndex: 1, width: '100%' }}>
        {/* Proje Resimleri Bölümü */}
        <section style={{
          width: '100%',
          maxWidth: 1200,
          marginBottom: 60,
        }}>
          <h2 style={{ fontSize: 32, fontWeight: 'bold', marginBottom: 40, color: '#333', textAlign: 'center' }}>Gökmen Apartmanı</h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))', gap: 40 }}>
            {[...Array(7)].map((_, i) => (
              <div key={i} style={{ background: '#fff', borderRadius: 12, overflow: 'hidden', boxShadow: '0 4px 20px rgba(0,0,0,0.08)' }}>
                <div style={{ position: 'relative', width: '100%', height: 300 }}>
                  <Image
                    src={`/proje-resim-${i + 1}.jpg`}
                    alt={`Gökmen Apartmanı Resmi ${i + 1}`}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    style={{ objectFit: 'cover' }}
                  />
                </div>
              </div>
            ))}
          </div>
        </section>

        <section style={{
          width: '100%',
          maxWidth: 1200,
          marginBottom: 60,
        }}>
          <h2 style={{ fontSize: 32, fontWeight: 'bold', marginBottom: 40, color: '#333', textAlign: 'center' }}>Gökmen Villaları</h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))', gap: 40 }}>
            {[...Array(7)].map((_, i) => (
              <div key={i} style={{ background: '#fff', borderRadius: 12, overflow: 'hidden', boxShadow: '0 4px 20px rgba(0,0,0,0.08)' }}>
                <div style={{ position: 'relative', width: '100%', height: 300 }}>
                  <Image
                    src={`/proje-resim-${i + 8}.jpg`}
                    alt={`Gökmen Villaları Resmi ${i + 8}`}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    style={{ objectFit: 'cover' }}
                  />
                </div>
              </div>
            ))}
          </div>
        </section>

        <section style={{
          width: '100%',
          maxWidth: 1200,
          marginBottom: 60,
        }}>
          <h2 style={{ fontSize: 32, fontWeight: 'bold', marginBottom: 40, color: '#333', textAlign: 'center' }}>Gökmen Sitesi</h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))', gap: 40 }}>
            {[...Array(6)].map((_, i) => {
              const imageNumber = i + 15;
              if (imageNumber === 16) {
                return null;
              }
              return (
                <div key={imageNumber} style={{ background: '#fff', borderRadius: 12, overflow: 'hidden', boxShadow: '0 4px 20px rgba(0,0,0,0.08)' }}>
                  <div style={{ position: 'relative', width: '100%', height: 300 }}>
                    <Image
                      src={`/proje-resim-${imageNumber}.jpg`}
                      alt={`Gökmen Sitesi Resmi ${imageNumber}`}
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      style={{ objectFit: 'cover' }}
                    />
                  </div>
                </div>
              );
            })}
          </div>
        </section>

        <section style={{
          width: '100%',
          maxWidth: 1200,
          marginBottom: 60,
        }}>
          <h2 style={{ fontSize: 32, fontWeight: 'bold', marginBottom: 40, color: '#333', textAlign: 'center' }}>Diğer Projeler</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <img src="/images/projeler/1.jpg" alt="Proje 1" className="w-full h-64 object-cover" />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">Proje 1</h3>
                <p className="text-gray-600">Proje açıklaması burada yer alacak.</p>
              </div>
            </div>
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <img src="/images/projeler/2.jpg" alt="Proje 2" className="w-full h-64 object-cover" />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">Proje 2</h3>
                <p className="text-gray-600">Proje açıklaması burada yer alacak.</p>
              </div>
            </div>
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <img src="/images/projeler/3.jpg" alt="Proje 3" className="w-full h-64 object-cover" />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">Proje 3</h3>
                <p className="text-gray-600">Proje açıklaması burada yer alacak.</p>
              </div>
            </div>
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <img src="/images/projeler/4.jpg" alt="Proje 4" className="w-full h-64 object-cover" />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">Proje 4</h3>
                <p className="text-gray-600">Proje açıklaması burada yer alacak.</p>
              </div>
            </div>
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <img src="/images/projeler/5.jpg" alt="Proje 5" className="w-full h-64 object-cover" />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">Proje 5</h3>
                <p className="text-gray-600">Proje açıklaması burada yer alacak.</p>
              </div>
            </div>
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <img src="/images/projeler/6.jpg" alt="Proje 6" className="w-full h-64 object-cover" />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">Proje 6</h3>
                <p className="text-gray-600">Proje açıklaması burada yer alacak.</p>
              </div>
            </div>
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <img src="/images/projeler/7.jpg" alt="Proje 7" className="w-full h-64 object-cover" />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">Proje 7</h3>
                <p className="text-gray-600">Proje açıklaması burada yer alacak.</p>
              </div>
            </div>
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <img src="/images/projeler/8.jpg" alt="Proje 8" className="w-full h-64 object-cover" />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">Proje 8</h3>
                <p className="text-gray-600">Proje açıklaması burada yer alacak.</p>
              </div>
            </div>
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <img src="/images/projeler/9.jpg" alt="Proje 9" className="w-full h-64 object-cover" />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">Proje 9</h3>
                <p className="text-gray-600">Proje açıklaması burada yer alacak.</p>
              </div>
            </div>
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <img src="/images/projeler/10.jpg" alt="Proje 10" className="w-full h-64 object-cover" />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">Proje 10</h3>
                <p className="text-gray-600">Proje açıklaması burada yer alacak.</p>
              </div>
            </div>
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <img src="/images/projeler/11.jpg" alt="Proje 11" className="w-full h-64 object-cover" />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">Proje 11</h3>
                <p className="text-gray-600">Proje açıklaması burada yer alacak.</p>
              </div>
            </div>
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <img src="/images/projeler/12.jpg" alt="Proje 12" className="w-full h-64 object-cover" />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">Proje 12</h3>
                <p className="text-gray-600">Proje açıklaması burada yer alacak.</p>
              </div>
            </div>
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <img src="/images/projeler/13.jpg" alt="Proje 13" className="w-full h-64 object-cover" />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">Proje 13</h3>
                <p className="text-gray-600">Proje açıklaması burada yer alacak.</p>
              </div>
            </div>
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <img src="/images/projeler/14.jpg" alt="Proje 14" className="w-full h-64 object-cover" />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">Proje 14</h3>
                <p className="text-gray-600">Proje açıklaması burada yer alacak.</p>
              </div>
            </div>
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <img src="/images/projeler/15.jpg" alt="Proje 15" className="w-full h-64 object-cover" />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">Proje 15</h3>
                <p className="text-gray-600">Proje açıklaması burada yer alacak.</p>
              </div>
            </div>
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <img src="/images/projeler/16.jpg" alt="Proje 16" className="w-full h-64 object-cover" />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">Proje 16</h3>
                <p className="text-gray-600">Proje açıklaması burada yer alacak.</p>
              </div>
            </div>
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <img src="/images/projeler/17.jpg" alt="Proje 17" className="w-full h-64 object-cover" />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">Proje 17</h3>
                <p className="text-gray-600">Proje açıklaması burada yer alacak.</p>
              </div>
            </div>
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <img src="/images/projeler/18.jpg" alt="Proje 18" className="w-full h-64 object-cover" />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">Proje 18</h3>
                <p className="text-gray-600">Proje açıklaması burada yer alacak.</p>
              </div>
            </div>
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <img src="/images/projeler/19.jpg" alt="Proje 19" className="w-full h-64 object-cover" />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">Proje 19</h3>
                <p className="text-gray-600">Proje açıklaması burada yer alacak.</p>
              </div>
            </div>
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <img src="/images/projeler/20.jpg" alt="Proje 20" className="w-full h-64 object-cover" />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">Proje 20</h3>
                <p className="text-gray-600">Proje açıklaması burada yer alacak.</p>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
} 