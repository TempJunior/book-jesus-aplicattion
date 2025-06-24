import axios from 'axios'
import type { IApiResponse } from '@/sdks/bookjesus_api/interfaces/IApiResponse.ts'

export class ApiService {
  private baseUrl = "http://localhost:8080";

  public async authenticate(userEmail: string, userPassword: string): Promise<IApiResponse> {
    const response = await axios.post<IApiResponse>(
      `${this.baseUrl}/login`,
      {
        person_email: userEmail,
        person_password: userPassword,
      }
    )
    return response.data
  }
}
