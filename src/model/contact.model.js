import axiosInstance from "../lib/axiosInstance";
const Contact = class {
  constructor() {
    this.baseUrl = "/contact.php";
  }

  async submitContact(data = []) {
    return (await axiosInstance.post(`${this.baseUrl}`, data));
  }
}
export default new Contact();