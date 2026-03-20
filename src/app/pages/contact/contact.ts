import { Component, HostListener } from '@angular/core';
import { CommonModule } from '@angular/common';
import emailjs from '@emailjs/browser';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './contact.html',
  styleUrls: ['./contact.css'],
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

  // 🔥 MODAL
  showModal = false;
  modalMessage = '';
  modalType: 'success' | 'error' = 'success';
  isClosing = false;

  serviceID = 'service_lssacwj';
  templateID = 'template_t7xpk7j';
  publicKey = '_UNwHRPCIJCUosfMI';

  handleSubmit(form: any) {

    // ✅ VALIDACIÓN
    if (!this.formData.name || !this.formData.email || !this.formData.message) {
      this.modalMessage = 'Por favor completa los campos obligatorios';
      this.modalType = 'error';
      this.showModal = true;
      this.autoCloseModal();
      return;
    }

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

    emailjs.send(
      this.serviceID,
      this.templateID,
      templateParams,
      {
        publicKey: this.publicKey
      }
    )
    .then((response) => {

      console.log('SUCCESS!', response.status, response.text);

      // ✅ MODAL ÉXITO
      this.modalMessage = 'Mensaje enviado correctamente. Te contactaremos pronto.';
      this.modalType = 'success';
      this.showModal = true;

      form.resetForm(); // 🔥 CLAVE

      // ✅ LIMPIAR FORMULARIO
      // this.formData = {
      //   name: '',
      //   email: '',
      //   phone: '',
      //   company: '',
      //   subject: '',
      //   message: '',
      // };

      this.autoCloseModal();
      this.sending = false;
    })
    .catch((err) => {

      console.error('Error al enviar el correo:', err);

      // ❌ MODAL ERROR
      this.modalMessage = 'Hubo un error al enviar el mensaje. Intenta nuevamente.';
      this.modalType = 'error';
      this.showModal = true;

      this.autoCloseModal();
      this.sending = false;
    });
  }

  // 🔥 AUTO-CIERRE + LIMPIEZA DEL MODAL
  autoCloseModal() {
    const duration = this.modalType === 'success' ? 2500 : 4000;

    setTimeout(() => {
      this.resetModal();
    }, duration);
  }

  // 🔥 RESET COMPLETO DEL MODAL (con animación)
  resetModal() {
    this.isClosing = true;

    setTimeout(() => {
      this.showModal = false;
      this.isClosing = false;
      this.modalMessage = '';
      this.modalType = 'success';
    }, 300);
  }

  // 🔒 Cierre manual
  closeModal() {
    this.resetModal();
  }

  // ⌨️ Cerrar con ESC
  @HostListener('document:keydown.escape')
  handleEsc() {
    if (this.showModal) {
      this.closeModal();
    }
  }
}