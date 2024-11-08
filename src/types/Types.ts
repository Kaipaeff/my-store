export interface IUser {
  id: number;
  username: string;
  email: string;
  todoCount: number;
}

export interface ITodo {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
}

export interface IMainProps {
  users: IUser[];
}

export interface IUserItemProps {
  user: IUser;
  index: number;
}
