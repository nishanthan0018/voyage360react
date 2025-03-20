import emailjs from "emailjs-com";

// Function to send email using EmailJS
export const sendBookingEmail = (formData, selectedDestination) => {
  const serviceID = "service_czu19sj"; // Correct Service ID
  const templateID = "template_nbbb2f8"; // Correct Template ID
  const userID = "6VIJrUO-8yiXz_jLR"; // Correct User ID

  const templateParams = {
    name: formData.name,
    email: formData.email,
    date: formData.date,
    travelers: formData.travelers,
    destination: selectedDestination.name, // Pass the selected destination
  };

  return emailjs
    .send(serviceID, templateID, templateParams, userID)
    .then((response) => {
      console.log("✅ Email sent successfully:", response);
      return "success";
    })
    .catch((error) => {
      console.error("❌ Email sending failed:", error);
      return "error";
    });
};
