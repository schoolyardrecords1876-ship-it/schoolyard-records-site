import Image from 'next/image';
import { artists, events, releases } from '@/data/content';

function Arrow() { return <span aria-hidden="true" className="arrow">↗</span>; }

export default function Home() {
  return (
    <main>
      <div className="announcement"><span>INDEPENDENT BY NATURE.</span><span>COLLEGIATE BY ORIGIN.</span><span>CULTURE BY DESIGN.</span></div>
      <header className="site-header">
        <a className="wordmark" href="#home" aria-label="Schoolyard Records home">
          <span className="wordmark-main">SCHOOLYARD<span className="registered">®</span></span>
          <span className="wordmark-sub">RECORDS · PRAIRIE VIEW, TX</span>
        </a>
        <nav className="desktop-nav" aria-label="Main navigation">
          <a href="#artists">Artists</a><a href="#music">Music</a><a href="#culture">Culture</a><a href="#live">Live</a><a href="#about">About</a>
        </nav>
        <a className="header-cta" href="#contact">Work with us <Arrow /></a>
        <details className="mobile-menu"><summary aria-label="Open navigation">Menu <span>＋</span></summary><div className="mobile-menu-links"><a href="#artists">Artists</a><a href="#music">Music</a><a href="#culture">Culture</a><a href="#live">Live</a><a href="#about">About</a><a href="#contact">Contact</a></div></details>
      </header>

      <section className="hero" id="home">
        <div className="hero-copy">
          <p className="eyebrow"><span className="eyebrow-dot" /> AN INDEPENDENT ENTERTAINMENT HOUSE</p>
          <h1>THE NEXT<br />CLASS IS<br /><em>IN SESSION.</em></h1>
          <div className="hero-bottom">
            <p>A home for the artists, creators, and culture shaping what’s next. Built on campus. Made to move culture.</p>
            <div className="hero-actions"><a className="button button-light" href="#artists">Explore the roster <Arrow /></a><a className="text-link" href="#music">Listen to Schoolyard <Arrow /></a></div>
          </div>
          <span className="hero-index">PVAMU · EST. BY STUDENTS</span>
        </div>
        <div className="hero-art" role="img" aria-label="Abstract black and ivory editorial artwork placeholder for Schoolyard artist photography">
          <div className="hero-art-top"><span>THE SCHOOLYARD UNIVERSE</span><span>VOL. 001</span></div>
          <div className="hero-art-shape shape-one" /><div className="hero-art-shape shape-two" />
          <div className="hero-art-stamp">SY<br /><small>RECORDS</small></div>
          <div className="hero-art-bottom"><span>ARTISTS / CULTURE / SOUND</span><span>30° 02′ N · 95° 59′ W</span></div>
          <p className="asset-note">Replace this artwork with an approved Schoolyard campaign photo.</p>
        </div>
        <div className="hero-vertical">PRAIRIE VIEW, TEXAS — INDEPENDENT SINCE DAY ONE</div>
      </section>

      <section className="ticker" aria-label="Schoolyard disciplines"><div>ARTISTS <b>✳</b> MUSIC <b>✳</b> CULTURE <b>✳</b> LIVE EXPERIENCES <b>✳</b> CREATIVE <b>✳</b> ARTISTS <b>✳</b> MUSIC <b>✳</b> CULTURE <b>✳</b></div></section>

      <section className="section releases-section" id="music">
        <div className="section-heading"><div><p className="eyebrow">01 / THE SOUND</p><h2>FRESH FROM<br /><em>THE YARD.</em></h2></div><a className="text-link dark-link" href="#contact">Explore all releases <Arrow /></a></div>
        <div className="release-feature">
          <div className="release-art"><Image src={releases[0].art} alt="Temporary release artwork placeholder" fill sizes="(max-width: 700px) 90vw, 46vw" /></div>
          <div className="release-info"><p className="eyebrow">{releases[0].type}</p><h3>{releases[0].title}</h3><p className="release-artist">{releases[0].artist}</p><p className="body-copy">The next sound out of Schoolyard belongs here. Replace this starter card with a confirmed release, approved cover art, credits, and official listening links.</p><a className="button button-dark" href={releases[0].streamingUrl}>Listen to the release <Arrow /></a><span className="content-warning">STARTER CONTENT — NOT A REAL RELEASE</span></div>
        </div>
      </section>

      <section className="artists-section" id="artists">
        <div className="section artists-inner"><div className="section-heading light-heading"><div><p className="eyebrow">02 / THE ROSTER</p><h2>MEET THE<br /><em>NEW CLASS.</em></h2></div><p className="section-intro">Different voices. Different worlds. One place to build. Meet the talent making Schoolyard what it is.</p></div>
          <div className="artist-grid">{artists.map((artist, index) => <a className="artist-card" href={artist.href} key={`${artist.name}-${index}`}><div className="artist-image"><Image src={artist.image} alt="Temporary artist portrait placeholder" fill sizes="(max-width: 700px) 88vw, 30vw" /><span className="artist-number">0{index + 1}</span><span className="artist-plus">↗</span></div><div className="artist-meta"><div><h3>{artist.name}</h3><p>{artist.role}</p></div><span className="placeholder-label">ADD ARTIST</span></div></a>)}</div>
          <div className="roster-foot"><span>THE ROSTER IS ALWAYS GROWING.</span><a href="#contact">Artist submissions <Arrow /></a></div>
        </div>
      </section>

      <section className="culture-section section" id="culture"><div className="culture-copy"><p className="eyebrow">03 / MORE THAN MUSIC</p><h2>THIS IS A<br />CULTURE.<br /><em>NOT A PHASE.</em></h2><p className="body-copy">From the studio to the courtyard, Schoolyard makes room for the people moving culture forward. The stories, visuals, and moments behind the music live here.</p><a className="button button-dark" href="#contact">Explore the culture <Arrow /></a></div><div className="culture-panel"><div className="culture-panel-grid"><span>CREATIVE<br />ENERGY</span><span>HBCU<br />ROOTS</span><span>INDEPENDENT<br />SPIRIT</span><span>WHAT&apos;S<br />NEXT</span></div><div className="culture-big-type">MAKE<br />SOMETHING<br /><em>MATTER.</em></div><span className="culture-caption">A CREATIVE COMMUNITY, BUILT TOGETHER.</span></div></section>

      <section className="live-section" id="live"><div className="section live-inner"><div className="section-heading"><div><p className="eyebrow">04 / OUT IN THE WORLD</p><h2>SCHOOLYARD<br /><em>LIVE.</em></h2></div><p className="section-intro">The cyphers. The showcases. The moments you had to be there for — and the ones coming next.</p></div><div className="event-card"><div className="event-date"><span>SY</span><strong>LIVE</strong></div><div className="event-info"><p className="eyebrow">UPCOMING / DATE TO BE ANNOUNCED</p><h3>{events[0].title}</h3><p>{events[0].detail}</p><span className="content-warning">ADD CONFIRMED DATE, VENUE, AND TICKET LINK BEFORE PUBLISHING.</span></div><a className="event-arrow" href={events[0].href} aria-label="Ask about Schoolyard Live">↗</a></div></div></section>

      <section className="about-section section" id="about"><p className="eyebrow">05 / WHO WE ARE</p><h2>BUILT ON CAMPUS.<br /><em>MADE FOR WHAT’S NEXT.</em></h2><div className="about-bottom"><p>Schoolyard Records is a student-driven music and creative platform rooted in Prairie View, Texas. We bring artists, storytellers, and makers together to create opportunities and build something that lasts beyond the campus.</p><div className="about-aside"><span>INDEPENDENT BY NATURE.</span><span>COLLEGIATE BY ORIGIN.</span><span>CULTURE BY DESIGN.</span></div></div></section>

      <section className="contact-section" id="contact"><div className="contact-copy"><p className="eyebrow">06 / LET’S BUILD</p><h2>YOUR NEXT<br />MOVE STARTS<br /><em>HERE.</em></h2><p>Artists, creative talent, collaborators, and industry partners — tell us what you have in mind.</p></div><div className="contact-links"><a href="mailto:schoolyardrecords1876@gmail.com?subject=Schoolyard%20Records%20Inquiry"><span>GENERAL INQUIRIES</span><strong>Get in touch <Arrow /></strong></a><a href="mailto:schoolyardrecords1876@gmail.com?subject=Artist%20Submission"><span>ARTISTS & MUSIC</span><strong>Submit your work <Arrow /></strong></a><a href="mailto:schoolyardrecords1876@gmail.com?subject=Partnership%20Inquiry"><span>PARTNERSHIPS & BOOKINGS</span><strong>Work with Schoolyard <Arrow /></strong></a></div></section>

      <footer className="site-footer"><a className="footer-wordmark" href="#home">SCHOOLYARD<span>®</span></a><div className="footer-middle"><span>INDEPENDENT BY NATURE.</span><span>PRAIRIE VIEW, TEXAS</span></div><div className="footer-links"><a href="#artists">Artists</a><a href="#music">Music</a><a href="#contact">Contact</a></div><p className="copyright">© {new Date().getFullYear()} SCHOOLYARD RECORDS. ALL RIGHTS RESERVED.</p></footer>
    </main>
  );
}
