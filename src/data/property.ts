export type PropertyRecord = {
  id: string;
  propertyId: string;
  ownerName: string;
  location: string;
  surveyNumber: string;
};

export type EncumbranceRecord = {
  id: string;
  propertyId: string;
  type: string;
  description: string;
  status: string;
};

export type PropertyDetailsResponse = {
  property: PropertyRecord;
  encumbrances: EncumbranceRecord[];
};

export const propertyDetails: PropertyDetailsResponse = {
  property: {
    id: "7e7a7380-3e20-4b75-9fdb-da39309a5bcb",
    propertyId: "PROP001",
    ownerName: "Ramesh",
    location: "Bangalore",
    surveyNumber: "SN-123",
  },
  encumbrances: [
    {
      id: "57d885d2-8526-41da-aec2-cdca981652d1",
      propertyId: "PROP001",
      type: "LOAN",
      description: "Loan from SBI - Rs. 18,50,000 outstanding",
      status: "ACTIVE",
    },
  ],
};

export const landImages = {
  fieldParcel:
    "https://lh3.googleusercontent.com/aida-public/AB6AXuBb-fAjjR-dvIXLBdRXUgYr8SOXUnUCMFAgoVACKwgtpQUKLJIRUPVMMt4MnwpcL5qYGLjqKx5LMXan4Y0jqa-9IP7tPcVlv3kuPpoRXzdv8qpBCHAGHwgIG3ah9ls7PH_fqQbyLhcXsTqaXBtroJr_p5mdJX3B2JOxK9PVbGByqkZZTfTygnX2ddFdJbrfzIxtAg2kpZBwBluudVwvm25LUSG_dfjR8QAkmy0tVtCkVCuiOM8nFJQI9iFVIUvTH4zv85ARKDKQrqNL",
  estateGrid:
    "https://lh3.googleusercontent.com/aida-public/AB6AXuDDMDd_atPZIIYA0d9ukiv4QlaKHSvMM3IymCJ6MWzeaB8c6wgoSZhoD0D-paPGQ_IURUJBKxvbR5EkCDN3GixhCxE4G-V463ELlMfPGRc8CiCn_fAOBh3G4gn_ksgCwNeaGLM-ZwojE-OEquED7leY_vI3t6ayyDmhMReZ5w0rHAXMCa6nF_4HVc5L9A0iVlQGKVvMR_XxJx34UML9c5jXzP9cbARjJXbbjFfnYqOthxrtw2vl2VwzXfk5FWJxrCpu5dnUHXyY-N5J",
};
