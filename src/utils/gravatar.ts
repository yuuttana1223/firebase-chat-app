import md5 from "md5";

export const getGravatarUrl = (email: string) => {
  const digest = md5(email.trim().toLowerCase(), { encoding: "binary" });
  return `https://www.gravatar.com/avatar/${digest}?d=robohash`;
};
