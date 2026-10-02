export interface ContactInfo {
  phone1: string;
  phone2: string;
  formattedPhone1: string;
  formattedPhone2: string;
  whatsappMessage: string;
  location: string;
  region: string;
  country: string;
}

export const CONTACT_DATA: ContactInfo = {
  phone1: '9894220028',
  phone2: '8667669560',
  formattedPhone1: '+91 98942 20028',
  formattedPhone2: '+91 86676 69560',
  whatsappMessage:
    'Hello Sri Arumuga Travels — I would like to enquire about a journey from Srivilliputtur.',
  location: 'Srivilliputtur',
  region: 'Tamil Nadu',
  country: 'India',
};

export function telHref(phone: string): string {
  return `tel:+91${phone}`;
}

export function whatsappHref(message?: string): string {
  const text = message ?? CONTACT_DATA.whatsappMessage;
  return `https://wa.me/91${CONTACT_DATA.phone1}?text=${encodeURIComponent(text)}`;
}

export interface EnquiryPayload {
  name: string;
  phone: string;
  pickup: string;
  destination: string;
  travelDate: string;
  passengers: string;
  notes: string;
}

export function buildEnquiryWhatsAppMessage(data: EnquiryPayload): string {
  const lines = [
    'Hello Sri Arumuga Travels — travel enquiry',
    `Name: ${data.name.trim()}`,
    `Phone: ${data.phone.trim()}`,
    `Pickup: ${data.pickup.trim() || 'Srivilliputtur'}`,
    `Destination: ${data.destination.trim()}`,
  ];
  if (data.travelDate.trim()) lines.push(`Date: ${data.travelDate.trim()}`);
  if (data.passengers.trim()) lines.push(`Passengers: ${data.passengers.trim()}`);
  if (data.notes.trim()) lines.push(`Notes: ${data.notes.trim()}`);
  return lines.join('\n');
}
