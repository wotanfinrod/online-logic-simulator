import { ENDPOINTS } from "../constants";
import HTTPClient from "../HTTPClient";

export const services = {
  getAllProjects: async () => {
    const response = await HTTPClient.get(`${ENDPOINTS.logicProjects}`);
    return response;
  },
};
