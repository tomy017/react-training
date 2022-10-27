class UserSerializer {
  static deSerialize(users: RawUsers) : DummyUser[] {
    return users.data;
  }
}

export { UserSerializer };
