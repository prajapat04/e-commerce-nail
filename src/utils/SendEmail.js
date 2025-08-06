import emailjs from '@emailjs/browser';

export const sendOrderEmail = async ({ name, email, phone, address, cartItems, total }) => {
  const serviceId = 'service_n2okdlc';
  const templateId = 'template_qrj4o8p';
  const publicKey = 'D3tMj0zsbrUyysdw1';

  // ✅ Use cartItems (which you passed) as items
  const formattedItems = cartItems.map(item => 
    `• ${item.name} x${item.quantity} = ₹${item.price * item.quantity}`
  ).join("\n");

  const templateParams = {
    name,
    email,
    phone,
    address,
    items: formattedItems,
    total
  };

  try {
    const result = await emailjs.send(serviceId, templateId, templateParams, publicKey);
    console.log("✅ Email sent:", result.text);
    return true;
  } catch (error) {
    console.error("❌ Email send error:", error);
    return false;
  }
};
