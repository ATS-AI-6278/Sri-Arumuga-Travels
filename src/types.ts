export interface SceneState {
  id: string;
  title: string;
  subtitle: string;
  tagline?: string;
  cameraPosition: [number, number, number];
  cameraTarget: [number, number, number];
  vehiclePosition: [number, number, number];
  vehicleRotation: [number, number, number];
  timeOfDay: 'dawn' | 'day' | 'sunset' | 'night';
  sunIntensity: number;
  headlightsOn: boolean;
}

export interface ContactInfo {
  phone1: string;
  phone2: string;
  formattedPhone1: string;
  formattedPhone2: string;
  whatsappMessage: string;
}

export const CONTACT_DATA: ContactInfo = {
  phone1: '9894220028',
  phone2: '8667669560',
  formattedPhone1: '+91 98942 20028',
  formattedPhone2: '+91 86676 69560',
  whatsappMessage: 'Hello Sri Arumuga Travels, I would like to inquire about booking a journey with your premium travel service.',
};
