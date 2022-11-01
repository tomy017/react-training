class UserSerializer {
  static deSerialize(rawUsers: RawUsers) : DummyUsers {
    const dummyUsers : DummyUsers = {
      total: rawUsers.total,
      users: rawUsers.data,
    };
    return dummyUsers;
  }
}

export { UserSerializer };
