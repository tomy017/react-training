import { UserController } from 'networking/controllers/user-controller';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import styles from './profile.module.scss';

// import globalStyles from 'assets/stylesheets/global-styles.module.scss';

const UserProfile = () => {
  type Params = {
    id: string,
  };
  const { id } = useParams<Params>();
  const [user, setUser] = useState<FullDummyUser>();

  useEffect(() => {
    UserController.getUser(id).then((value) => {
      setUser(value);
    });
  }, [id]);

  return (
    <div className={styles.userInfo}>
      <div className={styles.profilePicture}>
        <img alt="profile" src={user?.picture} />
      </div>
      <div className={styles.labels}>
        <p>Firstname:</p>
        <p>Lastname:</p>
        <p>Birthdate:</p>
        <p>Email:</p>
        <p>Phone number:</p>
      </div>
      <div className={styles.data}>
        <p>{user?.firstName}</p>
        <p>{user?.lastName}</p>
        <p>{user?.dateOfBirth}</p>
        <p>{user?.email}</p>
        <p>{user?.phone}</p>
      </div>
    </div>
  );
};

export { UserProfile };
