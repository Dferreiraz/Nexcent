import './style.css';
import logo from '../../assets/images/Logo.png';

export const Footer = () => {
  const companyLinks = [
    { label: 'About us', href: '#about' },
    { label: 'Blog', href: '#blog' },
    { label: 'Contact us', href: '#contact' },
    { label: 'Pricing', href: '#pricing' },
    { label: 'Testimonials', href: '#testimonials' }
  ];

  const supportLinks = [
    { label: 'Help center', href: '#help' },
    { label: 'Terms of service', href: '#terms' },
    { label: 'Legal', href: '#legal' },
    { label: 'Privacy policy', href: '#privacy' },
    { label: 'Status', href: '#status' }
  ];

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-top">
          <div className="footer-brand">
            <div className="footer-logo">
              <img src={logo} alt="Nexcent Logo" />
            </div>
            <p className="copyright">
              Copyright © 2026 Nexcent Ltd.<br />
              All rights reserved
            </p>
            <div className="social-icons">
              <a href="#instagram" aria-label="Instagram">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
              </a>
              <a href="#dribbble" aria-label="Dribbble">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm7.938 5.563c1.464 1.783 2.352 4.062 2.352 6.537 0 .588-.054 1.164-.15 1.728-1.042-.222-3.342-.618-5.742-.288-.174-.402-.354-.804-.546-1.206 2.142-.876 3.726-2.13 4.086-2.418v-.018c.006-.006.006-.012.012-.018-.006.006-.006.012-.012.018zM12 1.71c2.658 0 5.082.99 6.918 2.616-.312.276-1.77 1.452-3.822 2.262C13.902 4.452 12.618 2.73 12.366 2.37c-.12-.018-.24-.03-.366-.03-.27 0-.534.018-.798.048.27.378 1.542 2.118 2.718 4.29-3.426.912-6.444.888-6.78.882.006-.018.012-.036.018-.054C8.652 4.482 10.116 2.52 12 1.71zM3.714 12.012c0-.042.006-.084.006-.126.342.006 3.942.048 7.602-1.062.216.42.42.846.612 1.272-.084.024-.174.048-.258.072-3.882 1.254-5.946 4.674-6.126 4.986-1.146-1.578-1.836-3.504-1.836-5.142zm8.286 10.278c-2.292 0-4.404-.768-6.096-2.058.138-.282 1.734-3.372 6.048-4.734.012-.006.024-.006.036-.012 1.08 2.802 1.524 5.154 1.632 5.808-1.002.642-2.178 1-3.42 1zm5.148-2.226c-.072-.432-.474-2.646-1.446-5.382 2.274-.36 4.278.228 4.518.306-.318 1.992-1.362 3.744-2.874 5.016-.066-.018-.132-.036-.198-.06z"/>
                </svg>
              </a>
              <a href="#twitter" aria-label="Twitter">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/>
                </svg>
              </a>
              <a href="#youtube" aria-label="YouTube">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"/>
                </svg>
              </a>
            </div>
          </div>

          <div className="footer-links-grid">
            <div className="footer-column">
              <h4>Company</h4>
              <ul>
                {companyLinks.map((link, index) => (
                  <li key={index}><a href={link.href}>{link.label}</a></li>
                ))}
              </ul>
            </div>

            <div className="footer-column">
              <h4>Support</h4>
              <ul>
                {supportLinks.map((link, index) => (
                  <li key={index}><a href={link.href}>{link.label}</a></li>
                ))}
              </ul>
            </div>

            <div className="footer-column">
              <h4>Stay up to date</h4>
              <form className="newsletter-form" onSubmit={(e) => e.preventDefault()}>
                <input 
                  type="email" 
                  placeholder="Your email address" 
                  className="newsletter-input"
                />
                <button type="submit" className="newsletter-btn" aria-label="Subscribe">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <line x1="22" y1="2" x2="11" y2="13"></line>
                    <polygon points="22 2 15 22 11 13 2 9 22 2"></polygon>
                  </svg>
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};