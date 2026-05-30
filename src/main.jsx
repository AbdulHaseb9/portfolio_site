import React, { useEffect } from 'react';
import { createRoot } from 'react-dom/client';
import {
  ArrowUpRight,
  Award,
  BriefcaseBusiness,
  CheckCircle2,
  GraduationCap,
  Mail,
  MapPin,
  MessageSquareText,
  Phone,
  Sparkles,
  UsersRound,
} from 'lucide-react';
import heroImage from './assets/hr-hero.png';
import './styles.css';

const profile = {
  name: 'Abdul Haseeb Sheikh',
  role: 'HR Intern',
  location: 'Karachi, Pakistan',
  email: 'haseebsheikh2380@gmail.com',
  phone: 'Available on request',
};

const strengths = [
  'Recruitment support',
  'Employee engagement',
  'HR operations',
  'Administrative support',
];

const skills = [
  'Basic knowledge of HR operations',
  'Communication and interpersonal skills',
  'Team collaboration',
  'Active listening',
  'MS Word, Excel and PowerPoint',
  'Time management and organization',
  'Quick learning and adaptability',
  'Customer handling and problem solving',
];

const experience = [
  {
    title: 'Customer Service Representative',
    company: 'PTCL',
    period: 'Feb 2026 - May 2026',
    points: [
      'Handled customer queries professionally while maintaining high customer satisfaction.',
      'Managed communication and issue resolution through ERP and CRM platforms.',
      'Strengthened calm, clear communication in fast-moving service situations.',
    ],
  },
];

const education = [
  {
    school: 'ILMA University',
    degree: 'Bachelor of Business Administration (BBA), HR Management',
    period: 'Dec 2025 - Present',
  },
  {
    school: 'Govt Polytechnic Institute Boys',
    degree: 'DAE in Information Technology',
    period: 'Nov 2021 - Aug 2024',
  },
];

const interests = [
  'Leadership and team management',
  'Badminton and gaming',
  'Content creation and social media',
];

function App() {
  useEffect(() => {
    const animatedItems = document.querySelectorAll('[data-animate]');

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.16 },
    );

    animatedItems.forEach((item) => observer.observe(item));

    return () => observer.disconnect();
  }, []);

  return (
    <main>
      <nav className="topbar" aria-label="Main navigation">
        <a className="brand" href="#home" aria-label="Abdul Haseeb Sheikh home">
          <span className="brand-mark" aria-hidden="true">
            <span>A</span>
            <span>H</span>
          </span>
          <span className="brand-text">
            <strong>Abdul Haseeb</strong>
            <small>HR Portfolio</small>
          </span>
        </a>
        <div className="nav-links">
          <a href="#experience">Experience</a>
          <a href="#skills">Skills</a>
          <a href="#contact">Contact</a>
        </div>
      </nav>

      <section className="hero" id="home">
        <div className="hero-copy" data-animate>
          <p className="eyebrow">HR intern | Recruitment | Communication | Admin support</p>
          <h1>{profile.name}</h1>
          <p className="lead">
            Motivated BBA HR student building practical experience in recruitment,
            employee engagement, HR operations, and organized administrative support.
          </p>
          <div className="hero-actions">
            <a className="primary-action" href={`mailto:${profile.email}`}>
              <Mail size={18} aria-hidden="true" />
              Contact me
            </a>
            <a className="secondary-action" href="#experience">
              View experience
              <ArrowUpRight size={18} aria-hidden="true" />
            </a>
          </div>
        </div>
        <div className="hero-media" aria-label="Professional HR workspace" data-animate>
          <img src={heroImage} alt="Modern HR and recruitment workspace" />
          <div className="floating-note note-one">
            <span>Recruitment</span>
            <strong>Candidate care</strong>
          </div>
          <div className="floating-note note-two">
            <span>HR Support</span>
            <strong>Clear coordination</strong>
          </div>
        </div>
      </section>

      <section className="quick-strip" aria-label="Portfolio highlights">
        {strengths.map((item, index) => (
          <span key={item} data-animate style={{ '--delay': `${index * 90}ms` }}>
            <CheckCircle2 size={18} aria-hidden="true" />
            {item}
          </span>
        ))}
      </section>

      <section className="intro-grid" aria-label="Profile overview">
        <article data-animate>
          <Sparkles size={24} aria-hidden="true" />
          <h2>Profile</h2>
          <p>
            Detail-oriented and quick to learn, with hands-on experience in
            customer handling, team coordination, and training support. Strong
            communication habits, confident follow-through, and proficiency in
            Microsoft Office tools.
          </p>
        </article>
        <article data-animate>
          <UsersRound size={24} aria-hidden="true" />
          <h2>HR Focus</h2>
          <p>
            Seeking an HR internship opportunity to strengthen practical knowledge
            in recruitment workflows, employee engagement, operations, and
            organization management.
          </p>
        </article>
      </section>

      <section className="section" id="experience">
        <div className="section-heading" data-animate>
          <BriefcaseBusiness size={26} aria-hidden="true" />
          <div>
            <p className="eyebrow">Work background</p>
            <h2>Experience</h2>
          </div>
        </div>
        <div className="timeline">
          {experience.map((item) => (
            <article className="timeline-item" key={item.title} data-animate>
              <div>
                <p className="period">{item.period}</p>
                <h3>{item.title}</h3>
                <p className="company">{item.company}</p>
              </div>
              <ul>
                {item.points.map((point) => (
                  <li key={point}>{point}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </section>

      <section className="section split" id="skills">
        <div>
          <div className="section-heading" data-animate>
            <MessageSquareText size={26} aria-hidden="true" />
            <div>
              <p className="eyebrow">Core capabilities</p>
              <h2>Skills</h2>
            </div>
          </div>
          <div className="skill-grid">
            {skills.map((skill, index) => (
              <span key={skill} data-animate style={{ '--delay': `${index * 55}ms` }}>
                {skill}
              </span>
            ))}
          </div>
        </div>
        <aside className="achievement" data-animate>
          <Award size={30} aria-hidden="true" />
          <p className="eyebrow">Achievement</p>
          <h3>Led a 9-member team</h3>
          <p>
            Successfully led a team at the WFF event organized by ILMA University,
            building confidence in coordination, responsibility, and leadership.
          </p>
        </aside>
      </section>

      <section className="section education-section">
        <div className="section-heading" data-animate>
          <GraduationCap size={26} aria-hidden="true" />
          <div>
            <p className="eyebrow">Academic path</p>
            <h2>Education</h2>
          </div>
        </div>
        <div className="education-list">
          {education.map((item, index) => (
            <article key={item.school} data-animate style={{ '--delay': `${index * 110}ms` }}>
              <p className="period">{item.period}</p>
              <h3>{item.school}</h3>
              <p>{item.degree}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="contact-band" id="contact">
        <div data-animate>
          <p className="eyebrow">Open to HR internship roles</p>
          <h2>Let us connect</h2>
          <p>
            Available for HR, recruitment, admin support, and people operations
            internship opportunities.
          </p>
          <div className="interest-list">
            {interests.map((interest) => (
              <span key={interest}>{interest}</span>
            ))}
          </div>
        </div>
        <div className="contact-panel" data-animate>
          <a href={`mailto:${profile.email}`}>
            <Mail size={18} aria-hidden="true" />
            {profile.email}
          </a>
          <span>
            <Phone size={18} aria-hidden="true" />
            {profile.phone}
          </span>
          <span>
            <MapPin size={18} aria-hidden="true" />
            {profile.location}
          </span>
        </div>
      </section>
    </main>
  );
}

createRoot(document.getElementById('root')).render(<App />);
