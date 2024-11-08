import useFetchUsers from './useFetchUsers';
import useFetchTodos from './useFetchTodos';
import { IUser, ITodo } from '../types/Types';

const useUsersWithTodos = (): { usersData: IUser[]; loading: boolean; error: string | null } => {
  const { users, loading: loadingUsers, error: errorUsers } = useFetchUsers();
  const { todos, loading: loadingTodos, error: errorTodos } = useFetchTodos();

  const loading = loadingUsers || loadingTodos;
  const error = errorUsers || errorTodos;

  const usersData = users.map((user: IUser) => {
    const todoCount = todos.filter((todo: ITodo) => todo.userId === user.id).length;
    return {
      id: user.id,
      username: user.username,
      email: user.email,
      todoCount,
    };
  });

  return { usersData, loading, error };
};

export default useUsersWithTodos;
