/**
 * Factory pattern centralizes object creation behind a stable interface.
 */
class EmailNotification {
  send(message) { return `Email sent: ${message}`; }
}
class SmsNotification {
  send(message) { return `SMS sent: ${message}`; }
}

export function createNotification(channel) {
  switch (channel) {
    case "email": return new EmailNotification();
    case "sms": return new SmsNotification();
    default: throw new Error(`Unsupported notification channel: ${channel}`);
  }
}

console.log(createNotification("email").send("Your order shipped"));
