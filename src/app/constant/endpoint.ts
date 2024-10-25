export const PREFIX_BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL;
export const NEXT_API_URL = process.env.NEXT_PUBLIC_API_ROOT_URL;

export const endpoint = {
  getAllProperties: `${PREFIX_BASE_URL}/properties`,
  registerProperties: `${PREFIX_BASE_URL}/properties/create`,
  getMenuMunicipalities: `${PREFIX_BASE_URL}/properties/menuProperties`,
  getPropertySuggested: `${PREFIX_BASE_URL}/properties/suggestions/{0}`,
  searchProperties: `${PREFIX_BASE_URL}/properties/search`,
  getProperties: `${PREFIX_BASE_URL}/properties/{0}`,
  registerUser: `${PREFIX_BASE_URL}/auth/register`,
  loginUser: `${PREFIX_BASE_URL}/auth/login`,
  authUser: `${PREFIX_BASE_URL}/auth/user`,
  createContact: `${PREFIX_BASE_URL}/contact/create`,
  departaments: "https://api-colombia.com/api/v1/Department",
  municipality: "https://api-colombia.com/api/v1/Department/{0}/cities",
};


export const endpointApiNext = {
  getCities: `${NEXT_API_URL}/municipalities`,
  getCallingCode: `${NEXT_API_URL}/calling-code`,
}
