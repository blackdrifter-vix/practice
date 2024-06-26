class Notification {
    send(message) {
        // default implementation
    }
}

class EmailNotification extends Notification {
    send(message) {
        console.log(`Sending email with message: ${message}`);
    }
}

class SMSNotification extends Notification {
    send(message) {
        console.log(`Sending SMS with message: ${message}`);
    }
}

function notify(notification, message) {
    notification.send(message);
}

const emailNotification = new EmailNotification();
const smsNotification = new SMSNotification();

notify(emailNotification, "Hello via Email!");
notify(smsNotification, "Hello via SMS!");
