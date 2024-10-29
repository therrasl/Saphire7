import axios from "axios";

const getUsers = async () => {
  return (await axios.get("http://localhost:4200/api/user")).data;
};

export { getUsers };
