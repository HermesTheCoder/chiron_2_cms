"use client";

import { useState, useEffect } from 'react';
import SectionTitle from '../ui/SectionTitle';
import Button from '../ui/Button';

interface FormField {
  id: string;
  label: string;
  type: string;
  placeholder: string;
  required: boolean;
  value: string;
  errorMessage?: string;
}

export default function ContactSection() {
  const [isVisible, setIsVisible] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [submitError, setSubmitError] = useState(false);
  
  const [formFields, setFormFields] = useState<FormField[]>([
    {
      id: 'name',
      label: 'Full Name',
      type: 'text',
      placeholder: 'Your full name',
      required: true,
      value: '',
      errorMessage: ''
    },
    {
      id: 'email',
      label: 'Email Address',
      type: 'email',
      placeholder: 'your.email@example.com',
      required: true,
      value: '',
      errorMessage: ''
    },
    {
      id: 'subject',
      label: 'Subject',
      type: 'text',
      placeholder: 'What is this regarding?',
      required: true,
      value: '',
      errorMessage: ''
    },
    {
      id: 'message',
      label: 'Message',
      type: 'textarea',
      placeholder: 'Your message here...',
      required: true,
      value: '',
      errorMessage: ''
    }
  ]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    const section = document.getElementById('contact-section');
    if (section) observer.observe(section);

    return () => {
      if (section) observer.disconnect();
    };
  }, []);

  const handleInputChange = (id: string, value: string) => {
    setFormFields(formFields.map(field => 
      field.id === id ? { ...field, value, errorMessage: '' } : field
    ));
  };

  const validateForm = (): boolean => {
    let isValid = true;
    const newFields = [...formFields];
    
    newFields.forEach((field, index) => {
      if (field.required && !field.value.trim()) {
        newFields[index] = {
          ...field,
          errorMessage: `${field.label} is required`
        };
        isValid = false;
      } else if (field.id === 'email' && field.value && !/^\S+@\S+\.\S+$/.test(field.value)) {
        newFields[index] = {
          ...field,
          errorMessage: 'Please enter a valid email address'
        };
        isValid = false;
      }
    });
    
    setFormFields(newFields);
    return isValid;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) return;
    
    setIsSubmitting(true);
    setSubmitError(false);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitSuccess(true);
      // Reset form after successful submission
      setFormFields(formFields.map(field => ({ ...field, value: '' })));
    }, 1500);
  };
  
  return (
    <section id="contact-section" className="py-20 md:py-28 bg-white relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 left-0 w-full h-full">
        <div className="absolute -top-64 -right-64 w-[40rem] h-[40rem] bg-primary/5 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-32 -left-32 w-80 h-80 bg-primary/5 rounded-full blur-2xl"></div>
      </div>
      
      <div className="container relative z-10">
        <div className={`transform transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          <SectionTitle 
            subtitle="GET IN TOUCH" 
            title="We'd Love To Hear From You" 
            accent={true}
          />
          
          <div className="max-w-3xl mx-auto text-center mb-12 md:mb-16">
            <p className="text-lg text-text-light leading-relaxed">
              Have questions about our stem cell therapies or interested in potential collaborations? 
              We&apos;re here to help and eager to explore possibilities together.
            </p>
          </div>
          
          <div className="grid gap-10 items-start">
            {/* Contact Form */}
            <div className="lg:col-span-3 bg-white rounded-2xl shadow-xl p-8 md:p-10">
              {submitSuccess ? (
                <div className="text-center py-10">
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-green-100 text-green-600 mb-6">
                    <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <h3 className="text-2xl font-bold mb-4">Thank You!</h3>
                  <p className="text-text-light mb-8">Your message has been sent successfully. We&apos;ll get back to you as soon as possible.</p>
                  <Button 
                    onClick={() => setSubmitSuccess(false)} 
                    variant="outline"
                  >
                    Send Another Message
                  </Button>
                </div>
              ) : (
                <>
                  <h3 className="text-2xl font-bold mb-8">Send Us A Message</h3>
                  
                  {submitError && (
                    <div className="mb-6 p-4 bg-red-100 text-red-700 rounded-lg">
                      Something went wrong. Please try again later.
                    </div>
                  )}
                  
                  <form onSubmit={handleSubmit}>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                      {formFields.slice(0, 2).map((field) => (
                        <div key={field.id} className="flex flex-col">
                          <label 
                            htmlFor={field.id}
                            className="text-sm font-medium mb-2"
                          >
                            {field.label} {field.required && <span className="text-primary">*</span>}
                          </label>
                          <input
                            type={field.type}
                            id={field.id}
                            placeholder={field.placeholder}
                            className={`
                              px-4 py-3 rounded-lg border ${field.errorMessage ? 'border-red-500' : 'border-border-light'} 
                              bg-gray-50
                              focus:outline-none focus:ring-2 focus:ring-primary/50
                              transition-all duration-200
                            `}
                            value={field.value}
                            onChange={(e) => handleInputChange(field.id, e.target.value)}
                            required={field.required}
                          />
                          {field.errorMessage && (
                            <p className="mt-1 text-sm text-red-600">{field.errorMessage}</p>
                          )}
                        </div>
                      ))}
                    </div>
                    
                    <div className="mb-8">
                      <label 
                        htmlFor={formFields[2].id}
                        className="text-sm font-medium mb-2 block"
                      >
                        {formFields[2].label} {formFields[2].required && <span className="text-primary">*</span>}
                      </label>
                      <input
                        type={formFields[2].type}
                        id={formFields[2].id}
                        placeholder={formFields[2].placeholder}
                        className={`
                          w-full px-4 py-3 rounded-lg border ${formFields[2].errorMessage ? 'border-red-500' : 'border-border-light'} 
                          bg-gray-50
                          focus:outline-none focus:ring-2 focus:ring-primary/50
                          transition-all duration-200
                        `}
                        value={formFields[2].value}
                        onChange={(e) => handleInputChange(formFields[2].id, e.target.value)}
                        required={formFields[2].required}
                      />
                      {formFields[2].errorMessage && (
                        <p className="mt-1 text-sm text-red-600">{formFields[2].errorMessage}</p>
                      )}
                    </div>
                    
                    <div className="mb-8">
                      <label 
                        htmlFor={formFields[3].id}
                        className="text-sm font-medium mb-2 block"
                      >
                        {formFields[3].label} {formFields[3].required && <span className="text-primary">*</span>}
                      </label>
                      <textarea
                        id={formFields[3].id}
                        placeholder={formFields[3].placeholder}
                        rows={6}
                        className={`
                          w-full px-4 py-3 rounded-lg border ${formFields[3].errorMessage ? 'border-red-500' : 'border-border-light'} 
                          bg-gray-50
                          focus:outline-none focus:ring-2 focus:ring-primary/50
                          transition-all duration-200
                          resize-none
                        `}
                        value={formFields[3].value}
                        onChange={(e) => handleInputChange(formFields[3].id, e.target.value)}
                        required={formFields[3].required}
                      ></textarea>
                      {formFields[3].errorMessage && (
                        <p className="mt-1 text-sm text-red-600">{formFields[3].errorMessage}</p>
                      )}
                    </div>
                    
                    <div>
                      <Button 
                        type="submit" 
                        className="w-full sm:w-auto"
                        disabled={isSubmitting}
                      >
                        {isSubmitting ? (
                          <span className="flex items-center">
                            <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                            </svg>
                            Sending...
                          </span>
                        ) : 'Send Message'}
                      </Button>
                    </div>
                  </form>
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
} 