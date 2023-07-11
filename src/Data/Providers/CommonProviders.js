import client from "../../HHTP/clients";

export default class CommonProviders {
  static async getAds() {
    return await client.get(`/ads`);
  }
  
}