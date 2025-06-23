import "./style.css";
import ozatpic from "../../assets/ozat-form-pic.jpg";
import { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import IMask from "imask";

interface FormDataProps {
  name: string;
  phone: string;
  child_age: number;
  id_doctor: number;
}

const FormSign = () => {
  const [formData, setFormData] = useState<FormDataProps>({
    name: "",
    phone: "",
    child_age: 0,
    id_doctor: 0,
  });

  const navigate = useNavigate();

  const inputRef = useRef(null);

  useEffect(() => {
    if (inputRef.current) {
      IMask(inputRef.current, {
        mask: "+7 (000) 000-00-00",
      });
    }
  }, []);

  // const sendLead = async () => {
  //   const webhookUrl =
  //     "https://ozatoptics.bitrix24.kz/rest/8128/mdebsthzi8nahcma/crm.lead.add.json";

  //   const leadData = {
  //     fields: {
  //       TITLE: "Новая заявка с сайта",
  //       NAME: formData.name,
  //       PHONE: formData.phone,
  //       CHILD_AGE: formData.child_age,
  //     },
  //     params: { REGISTER_SONET_EVENT: "Y" },
  //   };

  //   try {
  //     const response = await fetch(webhookUrl, {
  //       method: "POST",
  //       headers: { "Content-Type": "application/json" },
  //       body: JSON.stringify(leadData),
  //     });

  //     const result = await response.json();
  //     console.log("Ответ AMO:", result);
  //   } catch (error) {
  //     console.error("Ошибка отправки лида:", error);
  //   }
  // };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.name || !formData.phone) {
      alert("Введите имя и номер телефона!");
      return;
    }

    const CHAT_ID = "-4645948949"; // ID группы или личный chat_id
    const TELEGRAM_API = `https://api.telegram.org/bot8011776128:AAE_COrQGTB75u8ec20iV_33ezl4NtnkW8c/sendMessage`;

    const message = `👤 Имя: ${formData.name}\n🎂 Возраст: ${formData.child_age}\n📞 Телефон: ${formData.phone}\n 🪪ID ВРАЧА: ${formData.id_doctor}`;

    try {
      const response = await fetch(TELEGRAM_API, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ chat_id: CHAT_ID, text: message }),
      });

      const result = await response.json();
      console.log("Ответ Telegram API:", result);

      if (result.ok) {
        await navigate("/thankyou");
        setFormData({ name: "", child_age: 0, phone: "", id_doctor: 0 });
      } else {
        alert("Ошибка при отправке!");
      }
    } catch (error) {
      console.error("Ошибка отправки:", error);
      alert("Ошибка при отправке формы!");
    }
  };

  const handleChange = async (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  return (
    <div className="form-container">
      <form className="form-style" onSubmit={handleSubmit}>
        <h2>Заполните форму</h2>
        <div className="form-inputs">
          <h3 className="header-form">Ваше Имя</h3>
          <input
            name="name"
            onChange={handleChange}
            type="text"
            placeholder="Ваше Имя"
            required
            value={formData.name}
          />
        </div>
        <div className="form-inputs">
          <h3 className="header-form">Возраст Ребенка</h3>
          <input
            name="child_age"
            value={formData.child_age}
            onChange={handleChange}
            type="number"
            min="0"
            max="18"
            placeholder="Возраст Ребенка"
            required
          />
        </div>
        <div className="form-inputs">
          <h3 className="header-form">Введите Номер Телефона</h3>
          <input
            ref={inputRef}
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            type="text"
            placeholder="+7(777)777-77-77"
            required
          />
        </div>
        <div className="form-inputs">
          <h3 className="header-form">ID ВРАЧА</h3>
          <input
            name="id_doctor"
            value={formData.id_doctor}
            onChange={handleChange}
            type="number"
            placeholder="Введите ID врача"
            required
          />
        </div>
        <button className="button-main" id="send-button">
          Отправить
        </button>
      </form>
      <img
        src={ozatpic}
        alt="Ozat Logo"
        id="ozatblack"
        style={{ width: "300px", height: "400px", borderRadius: "10px" }}
      />
    </div>
  );
};

export default FormSign;
