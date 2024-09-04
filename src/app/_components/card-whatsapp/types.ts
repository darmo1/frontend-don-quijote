export type CardContactForm = {
  countryId: string;
  cellPhone: number | null;
  email?: string | null;
};

export type CardWhatsappFormProps = {
  callingCode: { name: string; code: string; flag: string }[];
};