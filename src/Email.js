import emailjs from "emailjs-com";

// Function to send email using EmailJS
export const sendBookingEmail = (formData, selectedDestination) => {
  const serviceID = "service_6qrjhpr"; // Correct Service ID
  const templateID = "template_ln4mng4"; // Correct Template ID
  const userID = "nqGc2AtDSO__4cTP_"; // Correct User ID

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
