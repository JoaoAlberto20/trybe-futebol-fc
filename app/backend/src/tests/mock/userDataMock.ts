export const userDataMock = {
  id: 2,
  username: 'user',
  role: 'user',
  email: 'user@user.com',
  password: '$2a$08$Y8Abi8jXvsXyqm.rmp0B.uQBA5qUz7T6Ghlg/CvVr/gLxYj5UAZVO',
}


export const loginMockWithoutEmail = {
  email: '', // without email
  password: '123456',
}

export const loginMockWithoutPassword = {
  email: 'user@user.com',
  password: '', // without password
}

export const loginMockEmailInvalid = {
  email: 'useruser.com', // email invalid
  password: '123456',
}


export const loginMockPasswordInvalid = {
  email: 'user@user.com',
  password: '1234', // password invalid
}





