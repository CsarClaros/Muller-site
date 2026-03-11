import { Component } from '@angular/core';
import emailjs, { EmailJSResponseStatus } from 'emailjs-com';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-contact',
  imports: [FormsModule],
  templateUrl: './contact.html',
  styleUrl: './contact.css',
})
export class ContactComponent {
  formData = {
    name: '',
    email: '',
    phone: '',
    company: '',
    subject: '',
    message: '',
  };

  sending = false;

  // Reemplaza estos valores con tus datos de EmailJS
  serviceID = 'your_service_id';
  templateID = 'your_template_id';
  publicKey = 'your_public_key'; // antes se llamaba user_id

  handleSubmit(e: Event) {
    e.preventDefault();
    this.sending = true;

    const templateParams = {
      from_name: this.formData.name,
      from_email: this.formData.email,
      phone: this.formData.phone,
      company: this.formData.company,
      subject: this.formData.subject,
      message: this.formData.message,
      to_email: 'clip.fre@gmail.com',
    };

    emailjs
      .send(this.serviceID, this.templateID, templateParams, this.publicKey)
      .then((response: EmailJSResponseStatus) => {
        alert('Mensaje enviado correctamente. Te contactaremos pronto.');
        this.formData = { name: '', email: '', phone: '', company: '', subject: '', message: '' };
        this.sending = false;
      })
      .catch((err) => {
        console.error('Error al enviar el correo:', err);
        alert('Hubo un error al enviar el mensaje. Intenta nuevamente.');
        this.sending = false;
      });
  }

  handleChange(event: any) {
    const target = event.target as HTMLInputElement | HTMLTextAreaElement;
    const key = target.name as keyof typeof this.formData;
    this.formData[key] = target.value;
  }
}


// Crear cuenta en EmailJS para obtener serviceID, templateID y publicKey (user_id) y reemplazar los valores en el código.
