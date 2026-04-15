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

export const allProperties: PropertyRecord[] = [
  {
    id: "7e7a7380-3e20-4b75-9fdb-da39309a5bcb",
    propertyId: "PROP001",
    ownerName: "Ramesh",
    location: "Bangalore",
    surveyNumber: "SN-123",
  },
  {
    id: "8f8b8491-4f31-5c86-0geca40b6cdcb",
    propertyId: "PROP002",
    ownerName: "Kavitha M.",
    location: "Bangalore",
    surveyNumber: "SN-456",
  },
  {
    id: "9g9c9502-5g42-6d97-1hfdb51c7dedc",
    propertyId: "PROP003",
    ownerName: "Prakash Gowda",
    location: "Mandya",
    surveyNumber: "SN-789",
  },
  {
    id: "0h0d0613-6h53-7e08-2igec62d8efe",
    propertyId: "PROP004",
    ownerName: "Anitha R.",
    location: "Mysore",
    surveyNumber: "SN-012",
  },
  {
    id: "1i1e1724-7i64-8f19-3jhfd73e9fgf",
    propertyId: "PROP005",
    ownerName: "Suresh K.",
    location: "Mysore",
    surveyNumber: "SN-345",
  },
];

export const propertyDetails: PropertyDetailsResponse = {
  property: allProperties[0],
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
  fieldParcel: "https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?auto=format&fit=crop&w=800&q=80",
  estateGrid: "https://images.unsplash.com/photo-1502082553048-f009c37129b9?auto=format&fit=crop&w=800&q=80",
  lushValley: "https://images.unsplash.com/photo-1470770841072-f978cf4d019e?auto=format&fit=crop&w=800&q=80",
  mountainLand: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=800&q=80",
  sunsetField: "https://images.unsplash.com/photo-1500673922987-e212871fec22?auto=format&fit=crop&w=800&q=80",
  greenMeadow: "https://images.unsplash.com/photo-1518173946687-a4c8a9ed330f?auto=format&fit=crop&w=800&q=80",
};
