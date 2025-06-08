import styles from "./page.module.css";
import FormListener from "./form-listener";
import { Metadata } from 'next';
export const metadata: Metadata = {
  title: 'Contact',
  description: 'Get in touch with Yacine Belahadji for freelance or full-time opportunities in full-stack web development.',
  openGraph: {
      title: 'Yacine Belahadji | Contact',
      description: 'Get in touch with Yacine Belahadji for freelance or full-time opportunities in full-stack web development.',
      url: new URL(`${process.env.WEBSITE_URL!}/contact`),
      type: "website",
      images: [
          {
              url: '/opengraph-image.jpg',
              width: 1200,
              height: 630,
              alt: 'OpenGraph Image',
          },
      ],
  },
  twitter: {
    title: 'Yacine Belahadji | Contact',
    description: 'Get in touch with Yacine Belahadji for freelance or full-time opportunities in full-stack web development.',
    site: '@3antozzinho',
    images: [
      {
        url: '/opengraph-image.jpg',
        width: 1200,
        height: 630,
        alt: 'OpenGraph Image',
      },
    ]
  },
};

export default function Contact() {
  return (
    
    <main className={styles.contact}>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            "itemListElement": [
              {
                "@type": "ListItem",
                "position": 1,
                "name": "Home",
                "item": "https://yacinedev.com"
              },
              {
                "@type": "ListItem",
                "position": 2,
                "name": "Contact",
                "item": "https://yacinedev.com/contact"
              },
            ]
          })
        }}
      />
      <FormListener />
      <section className={styles.header}>
        <h1>Contact Me</h1>
        <p>I&apos;m always looking for opportunities and I&apos;d love to hear from you! Whether you have a question, a project idea, or just want to say hi, feel free to reach out.</p>
      </section>
      <form action="https://formsubmit.co/05bc28d6910b3a4bfe39db68880a739b" method="POST">
        <div className={styles.firstRow}>
          <div>
            <label htmlFor="name">Name <span>*</span></label>
            <input name="name" id="name" required autoComplete="name" />
          </div>
          <div>
            <label htmlFor="email">Email <span>*</span></label>
            <input type="email" name="email" id="email" required autoComplete="email" />
          </div>
        </div>
        <div>
          <label htmlFor="subject">Subject <span>*</span></label>
          <input name="subject" id="subject" required autoComplete="off" />
        </div>
        <div>
          <label htmlFor="message">Message <span>*</span></label>
          <textarea name="message" id="message" required  autoComplete="off"></textarea>
        </div>
        <div className={styles.buttonDiv}>
          <button>Send Message</button>
        </div>
        <input type="hidden" name="_captcha" value="false" />
        <input type="text" name="_honey" style={{display: "none"}} />
        <input type="hidden" name="_next" value={`${process.env.WEBSITE_URL}/contact/thanks`} />
      </form>
    </main>
  );
}
