import sqlite3 from 'sqlite3';
import { open } from 'sqlite';

let dbPromise;

export async function getDB() {
  if (!dbPromise) {
    dbPromise = open({
      filename: './dev.db',
      driver: sqlite3.Database,
    });
  }
  return dbPromise;
}

export async function getHizmetler() {
  const db = await getDB();
  return db.all('SELECT * FROM hizmetler');
}

export async function addHizmet(baslik, aciklama, gorselUrl) {
  const db = await getDB();
  return db.run('INSERT INTO hizmetler (baslik, aciklama, gorselUrl) VALUES (?, ?, ?)', [baslik, aciklama, gorselUrl]);
}

export async function deleteHizmet(id) {
  const db = await getDB();
  return db.run('DELETE FROM hizmetler WHERE id = ?', [id]);
}

export async function updateHizmet(id, baslik, aciklama, gorselUrl) {
  const db = await getDB();
  return db.run('UPDATE hizmetler SET baslik = ?, aciklama = ?, gorselUrl = ? WHERE id = ?', [baslik, aciklama, gorselUrl, id]);
}

export async function getProjeler() {
  const db = await getDB();
  return db.all('SELECT * FROM projeler');
}

export async function addProje(baslik, aciklama, durum, gorselUrl) {
  const db = await getDB();
  return db.run('INSERT INTO projeler (baslik, aciklama, durum, gorselUrl) VALUES (?, ?, ?, ?)', [baslik, aciklama, durum, gorselUrl]);
}

export async function deleteProje(id) {
  const db = await getDB();
  return db.run('DELETE FROM projeler WHERE id = ?', [id]);
}

export async function updateProje(id, baslik, aciklama, durum, gorselUrl) {
  const db = await getDB();
  return db.run('UPDATE projeler SET baslik = ?, aciklama = ?, durum = ?, gorselUrl = ? WHERE id = ?', [baslik, aciklama, durum, gorselUrl, id]);
}

export async function getBlog() {
  const db = await getDB();
  return db.all('SELECT * FROM blog');
}

export async function addBlog(baslik, icerik, tarih) {
  const db = await getDB();
  return db.run('INSERT INTO blog (baslik, icerik, tarih) VALUES (?, ?, ?)', [baslik, icerik, tarih]);
}

export async function deleteBlog(id) {
  const db = await getDB();
  return db.run('DELETE FROM blog WHERE id = ?', [id]);
}

export async function updateBlog(id, baslik, icerik, tarih) {
  const db = await getDB();
  return db.run('UPDATE blog SET baslik = ?, icerik = ?, tarih = ? WHERE id = ?', [baslik, icerik, tarih, id]);
}

export async function getGaleri() {
  const db = await getDB();
  return db.all('SELECT * FROM galeri');
}

export async function addGaleri(baslik, medyaUrl, tip) {
  const db = await getDB();
  return db.run('INSERT INTO galeri (baslik, medyaUrl, tip) VALUES (?, ?, ?)', [baslik, medyaUrl, tip]);
}

export async function deleteGaleri(id) {
  const db = await getDB();
  return db.run('DELETE FROM galeri WHERE id = ?', [id]);
}

export async function updateGaleri(id, baslik, medyaUrl, tip) {
  const db = await getDB();
  return db.run('UPDATE galeri SET baslik = ?, medyaUrl = ?, tip = ? WHERE id = ?', [baslik, medyaUrl, tip, id]);
}

export async function getIletisim() {
  const db = await getDB();
  return db.all('SELECT * FROM iletisim');
}

export async function addIletisim(adSoyad, email, mesaj, tarih) {
  const db = await getDB();
  return db.run('INSERT INTO iletisim (adSoyad, email, mesaj, tarih) VALUES (?, ?, ?, ?)', [adSoyad, email, mesaj, tarih]);
}

export async function deleteIletisim(id) {
  const db = await getDB();
  return db.run('DELETE FROM iletisim WHERE id = ?', [id]);
}

export async function updateIletisim(id, adSoyad, email, mesaj, tarih) {
  const db = await getDB();
  return db.run('UPDATE iletisim SET adSoyad = ?, email = ?, mesaj = ?, tarih = ? WHERE id = ?', [adSoyad, email, mesaj, tarih, id]);
} 