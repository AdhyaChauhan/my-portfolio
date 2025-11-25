import React , {useState} from 'react';
import styles from './ContactForm.module.css';

function ContactForm() {
  const[name, setName] = useState('');
  const[email, setEmail] = useState('');
  const[message, setMessage] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Submitted! Here is the data:");
    console.log({ name, email, message });
    setIsSubmitted(true);
  }

  if (isSubmitted) {
    return (
      // The Thank You message gets the white background
      <section className="section-bg-white">
        {/* It also needs a container to be centered */}
        <div className="container">
          <h2>Thank You!</h2>
          <p>Your message has been sent. I'll get back to you soon.</p>
        </div>
      </section>
    );
  }

  return (
    // This section has the default gray background
    // All old, confusing styles are removed.
    <section>
      
      {/* THIS IS THE FIX. This container centers your form. */}
      <div className="container">
        <h2>Contact Me</h2>
        
        <form className={styles.form} onSubmit={handleSubmit}>
          <div className={styles.formGroup}>
            <label htmlFor="name">Name</label>
            <input type="text" id="name" name="name" value={name} onChange={(e) => setName(e.target.value)} />
          </div>

          <div className={styles.formGroup}>
            <label htmlFor="email">Email</label>
            <input type="email" id="email" name="email" value={email} onChange={(e) => setEmail(e.target.value)} />
          </div>

          <div className={styles.formGroup}>
            <label htmlFor="message">Message</label>
            <textarea id="message" name="message" value={message} onChange={(e) => setMessage(e.target.value)} />
          </div>

          <button type="submit" className={styles.submitButton}>
            Send Message
          </button>
        </form>
      </div> {/* <-- End of container div */}
    </section>
  );
}

export default ContactForm;