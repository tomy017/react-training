import { UserController } from 'networking/controllers/user-controller';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import styles from './profile.module.scss';

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
    <>
      <h1>User profile 👤</h1>
      {!user && (
        <p>Loading...</p>
      )}
      {user && (
        <div className={styles.userInfo}>
          <div className={styles.profilePicture}>
            <img alt="profile" src={user?.picture} />
          </div>
          <div className={styles.wrapper}>
            <p>Firstname:</p>
            <p>{user?.firstName}</p>
            <p>Lastname:</p>
            <p>{user?.lastName}</p>
            <p>Birthdate:</p>
            <p>{user?.dateOfBirth}</p>
            <p>Email:</p>
            <p>{user?.email}</p>
            <p>Phone number:</p>
            <p>{user?.phone}</p>
          </div>
        </div>
      )}
    </>
  );
};

export { UserProfile };
