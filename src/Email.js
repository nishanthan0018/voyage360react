import emailjs from "emailjs-com";

// Function to send email using EmailJS
export const sendBookingEmail = (formData, selectedDestination) => {
  const serviceID = "service_ew9lv7k"; // Correct Service ID
  const templateID = "template_b9qc675"; // Correct Template ID
  const userID = "FYcOEYKB2P4_q5CHm"; // Correct User ID

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
