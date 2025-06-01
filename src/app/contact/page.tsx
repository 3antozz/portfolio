import styles from "./page.module.css";
// import Scroller from "./scrollToCenter";
import FormListener from "./form-listener";

export default function Contact() {
  return (
    <main className={styles.contact}>
      <FormListener />
      {/* <Scroller /> */}
      <section className={styles.header}>
        <h2>Contact Me</h2>
        <p>I&apos;m always looking for opportunities and I&apos;d love to hear from you! Whether you have a question, a project idea, or just want to say hi, feel free to reach out.</p>
      </section>
      <form action="https://formsubmit.co/05bc28d6910b3a4bfe39db68880a739b" method="POST">
        <div className={styles.firstRow}>
          <div>
            <label htmlFor="name">Name <span>*</span></label>
            <input name="name" id="name" required />
          </div>
          <div>
            <label htmlFor="email">Email <span>*</span></label>
            <input type="email" name="email" required  />
          </div>
        </div>
        <div>
          <label htmlFor="subject">Subject <span>*</span></label>
          <input name="subject" required  />
        </div>
        <div>
          <label htmlFor="message">Message <span>*</span></label>
          <textarea name="message" id="Message" required ></textarea>
        </div>
        <div className={styles.buttonDiv}>
          <button>Send Message</button>
        </div>
        <input type="hidden" name="_captcha" value="false" />
        <input type="text" name="_honey" style={{display: "none"}} />
        <input type="hidden" name="_next" value={`${process.env.WEBSITE_URL}/thanks`} />
      </form>
    </main>
  );
}
