import client from "../../HHTP/clients";

export default class CommonProviders {
  static async getAds() {
    return await client.get(`/ads/`);
  }
  static async getBrokers() {
    return await client.get(`/brokers/`);
  }
  
}