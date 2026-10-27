import Image from 'next/image';
import { events } from '@/data/content';

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
          <a href="#artists">Artists</a><a href="#music">Music</a><a href="#culture">Culture</a><a href="#yard-archive">Gallery</a><a href="#live">Live</a><a href="#about">About</a>
        </nav>
        <a className="header-cta" href="#contact">Work with us <Arrow /></a>
        <details className="mobile-menu"><summary aria-label="Open navigation">Menu <span>＋</span></summary><div className="mobile-menu-links"><a href="#artists">Artists</a><a href="#music">Music</a><a href="#culture">Culture</a><a href="#live">Live</a><a href="#about">About</a><a href="#contact">Contact</a></div></details>
      </header>

      <section className="hero" id="home">
        <div className="hero-copy">
          <p className="eyebrow"><span className="eyebrow-dot" /> A STUDENT-POWERED MUSIC & CULTURE HOUSE</p>
          <h1>THE NEXT<br />CLASS IS<br /><em>IN SESSION.</em></h1>
          <div className="hero-bottom">
            <p>From the Yard to the World. A student-driven home for independent artists, campus creatives, and the culture shaping what comes next.</p>
            <div className="hero-actions"><a className="button button-light" href="#artists">Explore the roster <Arrow /></a><a className="text-link" href="#music">Listen to Schoolyard <Arrow /></a></div>
          </div>
          <span className="hero-index">PVAMU · EST. BY STUDENTS</span>
        </div>
        <div className="hero-art" role="img" aria-label="Schoolyard Records colorful graffiti wordmark">
          <Image src="/images/schoolyard-graffiti.jpg" alt="Schoolyard Records graffiti logo" fill sizes="(max-width: 700px) 92vw, 45vw" className="hero-logo-image" />
          <div className="hero-art-top"><span>THE SCHOOLYARD UNIVERSE</span><span>VOL. 001</span></div>
          <div className="hero-art-bottom"><span>ARTISTS / CULTURE / SOUND</span><span>30° 02′ N · 95° 59′ W</span></div>
        </div>
        <div className="hero-vertical">PRAIRIE VIEW, TEXAS — INDEPENDENT SINCE DAY ONE</div>
      </section>

      <section className="ticker" aria-label="Schoolyard disciplines"><div>ARTISTS <b>✳</b> MUSIC <b>✳</b> CULTURE <b>✳</b> LIVE EXPERIENCES <b>✳</b> CREATIVE <b>✳</b> ARTISTS <b>✳</b> MUSIC <b>✳</b> CULTURE <b>✳</b></div></section>

      <section className="section releases-section" id="music">
        <div className="section-heading"><div><p className="eyebrow">01 / THE SOUND</p><h2>FRESH FROM<br /><em>THE YARD.</em></h2></div><a className="text-link dark-link" href="#contact">Explore all releases <Arrow /></a></div>
        <div className="release-feature">
          <div className="release-art release-art-coming" role="img" aria-label="Schoolyard Records official releases coming soon graphic">
            <div className="release-art-orbit orbit-one" /><div className="release-art-orbit orbit-two" />
            <div className="release-cover-sigil">SY<span>RECORDS</span></div>
            <div className="release-art-topline"><span>PVAMU / INDEPENDENT</span><span>VOL. 001</span></div>
            <div className="release-art-bottomline">THE NEXT SOUND<br />STARTS HERE.</div>
          </div>
          <div className="release-info"><p className="eyebrow">01 / SCHOOLYARD AUDIO</p><h3>THE NEXT SOUND IS ON THE WAY.</h3><p className="release-artist">OFFICIAL RELEASES · ARTIST SPOTLIGHTS · NEW MUSIC</p><p className="body-copy">We’re curating the next drop from the Yard. Follow Schoolyard for announcements, artist spotlights, and official listening links as each release is confirmed.</p><a className="button button-dark" href="mailto:schoolyardrecords1876@gmail.com?subject=Schoolyard%20Release%20Updates">Get release updates <Arrow /></a><span className="content-warning">STREAMING LINKS WILL BE ADDED WITH EACH OFFICIAL RELEASE.</span></div>
        </div>
      </section>

      <section className="artists-section" id="artists">
        <div className="section artists-inner"><div className="section-heading light-heading"><div><p className="eyebrow">02 / THE ROSTER</p><h2>MEET THE<br /><em>NEW CLASS.</em></h2></div><p className="section-intro">Independent voices. Different lanes. One place to grow. The Schoolyard roster is being refreshed with the next class of artists.</p></div>
<div className="roster-open-call">
            <div className="roster-open-copy"><span className="roster-kicker">THE NEXT CLASS STARTS HERE</span><h3>YOUR NAME<br /><em>COULD BE NEXT.</em></h3><p>We’re making room for the next wave of independent artists, producers, writers, and creative minds. Official roster spotlights will go live as each artist is confirmed.</p><a className="button button-accent" href="mailto:schoolyardrecords1876@gmail.com?subject=Artist%20Submission">Send your work <Arrow /></a></div>
            <div className="roster-open-side"><span className="roster-sigil">SY<span>®</span></span><div><span>ARTISTS</span><span>PRODUCERS</span><span>SONGWRITERS</span><span>CREATIVES</span></div><small>FROM THE YARD TO THE WORLD.</small></div>
          </div>
          <div className="roster-foot"><span>NEW CLASS. NEW ENERGY. COMING INTO FOCUS.</span><a href="#contact">Artist submissions <Arrow /></a></div>
        </div>
      </section>

      <section className="culture-section section" id="culture"><div className="culture-copy"><p className="eyebrow">03 / MORE THAN MUSIC</p><h2>THIS IS A<br />CULTURE.<br /><em>NOT A PHASE.</em></h2><p className="body-copy">From the studio to the courtyard, Schoolyard makes room for the people moving culture forward. The stories, visuals, and moments behind the music live here.</p><a className="button button-dark" href="#contact">Explore the culture <Arrow /></a></div><div className="culture-panel culture-panel-vibrant"><div className="culture-panel-grid"><span>CREATIVE<br />ENERGY</span><span>HBCU<br />ROOTS</span><span>INDEPENDENT<br />SPIRIT</span><span>WHAT&apos;S<br />NEXT</span></div><div className="culture-big-type">MAKE<br />SOMETHING<br /><em>MATTER.</em></div><span className="culture-caption">FROM THE YARD TO THE WORLD.</span></div></section>


      <section className="culture-archive section" aria-labelledby="yard-archive-title" id="yard-archive">
        <div className="archive-heading">
          <div><p className="eyebrow">03A / LIFE AT THE YARD</p><h2 id="yard-archive-title">THE YARD,<br /><em>IN REAL TIME.</em></h2></div>
          <p className="archive-intro">Campus energy, the people who show up, and the memories we’re building together. Real Schoolyard moments, from the community outward.</p>
        </div>
        <div className="archive-grid">
          <figure className="archive-card archive-featured"><div className="archive-photo"><Image src="/images/culture-yard-01.jpg" alt="Schoolyard student event with students gathered around the community" fill sizes="(max-width: 700px) 92vw, 48vw" /></div><figcaption><span>01 — THE COMMUNITY</span><strong>Outside, together.</strong></figcaption></figure>
          <figure className="archive-card"><div className="archive-photo"><Image src="/images/culture-yard-02.jpg" alt="Students together at a campus gathering" fill sizes="(max-width: 700px) 92vw, 27vw" /></div><figcaption><span>02 — CAMPUS ENERGY</span><strong>Every face, part of the story.</strong></figcaption></figure>
          <figure className="archive-card"><div className="archive-photo"><Image src="/images/culture-team.jpg" alt="Schoolyard team gathered for a group photograph" fill sizes="(max-width: 700px) 92vw, 27vw" /></div><figcaption><span>03 — THE PEOPLE</span><strong>Built by the community.</strong></figcaption></figure>
        </div>
        <p className="archive-note">A living archive of Schoolyard culture. More event and behind-the-scenes moments coming soon.</p>
      </section>

      <section className="live-section" id="live"><div className="section live-inner"><div className="section-heading"><div><p className="eyebrow">04 / OUT IN THE WORLD</p><h2>SCHOOLYARD<br /><em>LIVE.</em></h2></div><p className="section-intro">The cyphers. The showcases. The moments you had to be there for — and the ones coming next.</p></div><div className="event-card"><div className="event-date"><span>SY</span><strong>LIVE</strong></div><div className="event-info"><p className="eyebrow">UPCOMING / DATE TO BE ANNOUNCED</p><h3>{events[0].title}</h3><p>{events[0].detail}</p><span className="content-warning">FOLLOW SCHOOLYARD FOR ANNOUNCEMENTS AND CONFIRMED DETAILS.</span></div><a className="event-arrow" href={events[0].href} aria-label="Ask about Schoolyard Live">↗</a></div></div></section>

      <section className="about-section section" id="about"><p className="eyebrow">05 / WHO WE ARE</p><h2>BUILT ON CAMPUS.<br /><em>MADE FOR WHAT’S NEXT.</em></h2><div className="about-bottom"><p>Schoolyard Records is a student-driven music and creative platform rooted in Prairie View, Texas. We bring artists, storytellers, and makers together to create opportunities and build something that lasts beyond the campus.</p><div className="about-aside"><span>INDEPENDENT BY NATURE.</span><span>COLLEGIATE BY ORIGIN.</span><span>CULTURE BY DESIGN.</span></div></div></section>

      <section className="contact-section" id="contact"><div className="contact-copy"><p className="eyebrow">06 / LET’S BUILD</p><h2>YOUR NEXT<br />MOVE STARTS<br /><em>HERE.</em></h2><p>Artists, creative talent, collaborators, and industry partners — tell us what you have in mind.</p></div><div className="contact-links"><a href="mailto:schoolyardrecords1876@gmail.com?subject=Schoolyard%20Records%20Inquiry"><span>GENERAL INQUIRIES</span><strong>Get in touch <Arrow /></strong></a><a href="mailto:schoolyardrecords1876@gmail.com?subject=Artist%20Submission"><span>ARTISTS & MUSIC</span><strong>Submit your work <Arrow /></strong></a><a href="mailto:schoolyardrecords1876@gmail.com?subject=Partnership%20Inquiry"><span>PARTNERSHIPS & BOOKINGS</span><strong>Work with Schoolyard <Arrow /></strong></a></div></section>

      <footer className="site-footer"><a className="footer-wordmark" href="#home">SCHOOLYARD<span>®</span></a><div className="footer-middle"><span>INDEPENDENT BY NATURE.</span><span>PRAIRIE VIEW, TEXAS</span></div><div className="footer-links"><a href="#artists">Artists</a><a href="#music">Music</a><a href="#yard-archive">Gallery</a><a href="#contact">Contact</a></div><p className="copyright">© {new Date().getFullYear()} SCHOOLYARD RECORDS. ALL RIGHTS RESERVED.</p></footer>
    </main>
  );
}
