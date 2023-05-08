export const firebaseError = (error: any) => {
  switch (error.code) {
    case "auth/email-already-in-use":
      return "Email already in use";
    case "auth/invalid-email":
      return "Invalid email";
    case "auth/weak-password":
      return "Weak password";
    case "auth/user-not-found":
      return "User not found";
    case "auth/wrong-password":
      return "Wrong password";
    default:
      return "Something went wrong";
  }
};
