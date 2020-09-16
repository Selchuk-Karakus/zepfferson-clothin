import React from 'react';
import Contact from '../../components/contact/contact.component';
import Footer from '../../components/footer/footer.component';
import { ContactPageContainer } from './contactPage.styles';

const ContactPage = () => (
  <ContactPageContainer>
    <Contact />
    <Footer />
  </ContactPageContainer>
);

export default ContactPage;
