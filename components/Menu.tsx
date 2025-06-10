import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

export default function Menu() {
  return (
    <header style={{
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      padding: '12px 60px',
      background: '#ffffff',
      borderBottom: '1px solid #e0e0e0',
      position: 'relative',
      zIndex: 10,
      color: '#333'
    }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
        <div style={{ position: 'relative', width: 50, height: 50, border: '1px solid black' }}>
          <Image
            src="/gokmen-insaat-logo.jpg"
            alt="Gökmen İnşaat Logo"
            layout="fill"
            objectFit="contain"
          />
        </div>
        <span style={{ fontWeight: 'bold', fontSize: 20, color: '#333' }}>GÖKMEN İNŞAAT</span>
      </div>
      <nav style={{
        display: 'flex',
        alignItems: 'stretch',
        overflow: 'hidden',
      }}>
        <Link href="/" style={{
          color: '#333',
          textDecoration: 'none',
          fontWeight: 500,
          fontSize: 16,
          padding: '10px 20px',
          display: 'flex',
          alignItems: 'center',
        }}>Anasayfa</Link>
        <Link href="/hakkimizda" style={{
          color: '#333',
          textDecoration: 'none',
          fontWeight: 500,
          fontSize: 16,
          padding: '10px 20px',
          display: 'flex',
          alignItems: 'center',
        }}>Hakkımızda</Link>
        <Link href="/faaliyetler" style={{
          color: '#333',
          textDecoration: 'none',
          fontWeight: 500,
          fontSize: 16,
          padding: '10px 20px',
          display: 'flex',
          alignItems: 'center',
        }}>Faaliyetlerimiz</Link>
        <Link href="/projeler" style={{
          color: '#333',
          textDecoration: 'none',
          fontWeight: 500,
          fontSize: 16,
          padding: '10px 20px',
          display: 'flex',
          alignItems: 'center',
        }}>Projelerimiz</Link>
    </nav>
      <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
        <a href="#" title="Instagram"><Image src="/WhatsApp Görsel 2025-06-02 saat 19.36.53_e4b9c9a0.jpg" alt="Instagram" width={22} height={22} style={{ filter: 'grayscale(100%) brightness(50%)' }} /></a>
        <a href="#" title="WhatsApp"><Image src="/WhatsApp Görsel 2025-06-02 saat 19.36.50_3aecd1c0.jpg" alt="WhatsApp" width={22} height={22} style={{ filter: 'grayscale(100%) brightness(50%)' }} /></a>
      </div>
    </header>
  );
} 