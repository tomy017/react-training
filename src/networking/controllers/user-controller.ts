import { API_ROUTES } from 'networking/api-routes';
import { ApiService } from 'networking/api-service';
import { UserSerializer } from 'networking/serializers/user-serializer';

class UserController {
  static async getUsers() : Promise<DummyUser[]> {
    const config = {
      headers: {
        'app-id': '635aa88d7338f9f2167b2ab4',
      },
    };
    const response = await ApiService.get<RawUsers>(API_ROUTES.USERS, {}, config);
    return UserSerializer.deSerialize(response.data);
  }
}

export { UserController };
