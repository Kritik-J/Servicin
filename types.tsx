export interface IUser {
  uid: string;
  displayName: string;
  email: string;
  photoURL: string;
  role: "user" | "seller" | "admin";
}

export interface IGig {
  id: string;
  name: string;
  description: string;
  address: string;
  thumbnail: string;
  startingPrice: number;
  rating: number;
  reviews: { id: string }[];
  distance: number;
  categories: { id: string; name: string };
}

export interface IChat {
  id: string;
  user: {
    id: string;
    name: string;
    avatar: string;
  };
  lastMessage: {
    id: string;
    text: string;
    createdAt: string;
  };
}
