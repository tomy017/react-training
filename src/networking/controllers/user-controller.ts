import { API_ROUTES } from 'networking/api-routes';
import { ApiService } from 'networking/api-service';
import { UserSerializer } from 'networking/serializers/user-serializer';

class UserController {
  static async getUsers(page: number) : Promise<DummyUsers> {
    const config = {
      headers: {
        'app-id': process.env.APP_ID,
      },
    };
    const response = await ApiService.get<RawUsers>(API_ROUTES.USERS, { page }, config);
    return UserSerializer.deSerialize(response.data);
  }

  static async getUser(id: string) : Promise<FullDummyUser> {
    const config = {
      headers: {
        'app-id': '635aa88d7338f9f2167b2ab4',
      },
    };
    const response = await ApiService.get<FullDummyUser>(`${API_ROUTES.PROFILE}${id}`, { }, config);
    return response.data;
  }
}

export { UserController };
