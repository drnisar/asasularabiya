import Link from "next/link";

const articulationPoints = [
  ["01", "Al-Jawf", "The empty space", "The open cavity of the mouth and throat. It carries the long vowel sounds."],
  ["02", "Al-Halq", "The throat", "Six letters emerge from three measured points along the throat."],
  ["03", "Al-Lisan", "The tongue", "The most detailed area of articulation, forming eighteen letters."],
  ["04", "Ash-Shafatayn", "The lips", "The meeting and movement of the lips gives shape to four letters."],
  ["05", "Al-Khayshum", "The nasal passage", "The subtle resonance known as ghunnah has its home here."],
];

export default function MakharijPage() {
  return (
    <main className="makharij-page">
      <nav className="makharij-nav shell" aria-label="Lesson navigation">
        <Link className="brand" href="/"><span className="brand-mark" lang="ar">ا</span><span>ASAS<br />AL ARABIYA</span></Link>
        <Link className="back-link" href="/">&#8592; All courses</Link>
        <span className="lesson-count">TAJWEED / 01</span>
      </nav>

      <header className="makharij-hero shell">
        <p className="section-kicker">THE FOUNDATIONS OF RECITATION</p>
        <p className="lesson-arabic" lang="ar">مخارج الحروف</p>
        <h1>Where each letter<br /><em>begins.</em></h1>
        <p>Makharij al-huruf is the map of Arabic sound: the precise place each letter leaves the body and becomes heard.</p>
      </header>

      <section className="lesson-intro">
        <div className="shell lesson-intro-grid">
          <p className="lesson-index">01</p>
          <div><p className="section-kicker">BEGIN WITH ATTENTION</p><h2>Sound has a home.</h2></div>
          <p>Beautiful recitation starts before the voice. It starts with knowing where a sound is born, then allowing it to leave with clarity and ease.</p>
        </div>
      </section>

      <section className="points shell">
        <div className="points-head"><p className="section-kicker">FIVE PRIMARY PLACES</p><p>Move through the body,<br />one sound at a time.</p></div>
        <div className="point-list">
          {articulationPoints.map(([number, arabic, name, description]) => (
            <article className="point" key={number}>
              <span>{number}</span><p className="point-arabic" lang="ar">{arabic}</p><div><h2>{name}</h2><p>{description}</p></div><span className="point-arrow">&#8599;</span>
            </article>
          ))}
        </div>
      </section>

      <section className="practice">
        <div className="shell practice-grid">
          <div><p className="section-kicker">A SMALL PRACTICE</p><h2>Listen. Notice.<br />Repeat.</h2></div>
          <p>Place a hand gently at your throat. Say <span lang="ar">أ</span>, then <span lang="ar">ه</span>. Feel how the air changes its path. This awareness is the beginning of tajweed.</p>
        </div>
      </section>

      <footer className="lesson-footer"><div className="shell"><p className="section-kicker">NEXT LESSON</p><h2>Sifaat al-huruf<br /><em>The qualities of letters.</em></h2><a href="mailto:hello@asasal-arabiya.com">Continue learning &#8594;</a></div></footer>
    </main>
  );
}
