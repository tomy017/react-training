import { withLayout, LayoutType } from 'hocs/with-layout';
import { UserProfile } from './user-profile';

const WrappedUserProfile = withLayout(LayoutType.Home, UserProfile);

export { WrappedUserProfile as UserProfile };
