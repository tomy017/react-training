import { API_ROUTES } from 'networking/api-routes';
import { ApiService } from 'networking/api-service';
import { UserSerializer } from 'networking/serializers/user-serializer';
import { constants } from '../../config/constants';

class UserController {
  static async getUsers(page: number) : Promise<DummyUsers> {
    const config = {
      headers: {
        'app-id': constants.appID,
      },
    };
    const response = await ApiService.get<RawUsers>(API_ROUTES.USERS, { page }, config);
    return UserSerializer.deSerialize(response.data);
  }

  static async getUser(id: string) : Promise<FullDummyUser> {
    const config = {
      headers: {
        'app-id': constants.appID,
      },
    };
    const response = await ApiService.get<FullDummyUser>(`${API_ROUTES.USERS}/${id}`, { }, config);
    return response.data;
  }
}

export { UserController };
