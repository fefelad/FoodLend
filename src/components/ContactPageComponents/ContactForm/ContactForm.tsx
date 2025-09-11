import styles from "./ContactForm.module.css";
import Btn from "../../../shared/ui/Btn/Btn";
import peopleform from "../../../assets/form_people.png";
import { useForm, type SubmitHandler } from "react-hook-form";
import type { Iform } from "../../../shared/types/FormInterface";
import { useEffect, useRef, useState } from "react";
import MessageSubmit from "../../../shared/ui/MessageSubmit/MessageSubmit";

function ContactForm() {
  const [showSuccessMessage, setShowSuccessMessage] = useState(false);
  const SubmitRef = useRef(false);
  const { register, handleSubmit, formState, reset, watch } = useForm<Iform>({
    mode: "onChange",
  });
  const formValues = watch();
  const erorStatus = formState.errors["email"]?.message;

  const onSubmit: SubmitHandler<Iform> = (data) => {
    console.log(data);

    SubmitRef.current = true;
    reset();
  };

  useEffect(() => {
    const isEmpty = Object.values(formValues).every(
      (value) => !value || value === ""
    );

    if (isEmpty && SubmitRef.current) {
      setShowSuccessMessage(true);

      const timer = setTimeout(() => {
        setShowSuccessMessage(false);
        SubmitRef.current = false;
      }, 3000);

      return () => clearTimeout(timer);
    }
  }, [formValues]);

  return (
    <div className={styles.wrapper_contact_form}>
      <div className={styles.title_page}>
        <h1 className={styles.title_contact}>Contact us</h1>
      </div>
      <div className={styles.wrapper_form}>
        <div>
          <img src={peopleform} alt="people_form" />
        </div>
        <form onSubmit={handleSubmit(onSubmit)} action="submit">
          <div className={styles.grid_templayet}>
            <div className={styles.wrapper_input}>
              <label className={styles.label}>Name</label>
              <input
                className={styles.input}
                type="text"
                placeholder="Enter your name..."
                {...register("name", { required: "This field is required" })}
              />
            </div>
            <div className={styles.wrapper_input}>
              <div className={styles.label_wrapper}>
                <label className={styles.label}>Emal_Addres</label>
                {erorStatus && <p className={styles.error}>{erorStatus}</p>}
              </div>
              <input
                className={styles.input}
                type="email"
                placeholder="Your email address..."
                {...register("email", {
                  required: "This field is required",
                  pattern: {
                    value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                    message: "invalid email address",
                  },
                })}
              />
            </div>
            <div className={styles.wrapper_input}>
              <label className={styles.label}>Subject</label>
              <input
                className={styles.input}
                type="text"
                placeholder="Enter subject...."
              />
            </div>
            <div className={styles.wrapper_input}>
              <label className={styles.label} htmlFor="Subject">
                Subject
              </label>
              <select
                className={styles.input}
                id="enquiry-type"
                {...register("type", { required: "This field is required" })}
              >
                <option value="">Select an option</option>
                <option value="general">General Inquiry</option>
                <option value="support">Technical Support</option>
                <option value="billing">Billing Question</option>
              </select>
            </div>
            <div className={styles.form_texarea}>
              <label className={styles.label} htmlFor="message">
                Message
              </label>
              <textarea
                className={styles.area}
                id="area"
                placeholder="Enter your messages..."
                {...register("message", { required: "This field is required" })}
              ></textarea>
            </div>
          </div>
          <div className={styles.form_submit}>
            <Btn textBtn="Submit" />
          </div>
        </form>

        {showSuccessMessage && (
          <div className={styles.message_pos}>
            <MessageSubmit />
          </div>
        )}
      </div>
    </div>
  );
}

export default ContactForm;


