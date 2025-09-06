import ContactForm from "../../components/ContactPageComponents/ContactForm/ContactForm";
import Subscribe from "../../components/HomePageComponents/Subscribe/Subscribe";
import styles from "./Contact.module.css";

function Contact() {
  return (
    <div className={styles.contact_wrapper}>
      <ContactForm />
      <Subscribe />
    </div>
  );
}

export default Contact;
