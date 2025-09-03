import ContactForm from "../../components/ContactPageComponents/ContactForm/ContactForm";
import styles from "./Contact.module.css";

function Contact() {
  return (
    <div className={styles.contact_wrapper}>
      <ContactForm />
    </div>
  );
}

export default Contact;
