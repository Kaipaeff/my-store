import { useEffect, useState } from 'react';
import { IUser } from '../types/Types';

const useFetchUsers = () => {
  const [users, setUsers] = useState<IUser[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const controller = new AbortController();
    const { signal } = controller;

    const fetchUsers = async () => {
      try {
        const res = await fetch('https://jsonplaceholder.typicode.com/users', { signal });
        if (!res.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await res.json();
        setUsers(data);
      } catch (error: any) {
        if (error.name === 'AbortError') {
          console.error('Fetch aborted');
        } else {
          setError(error.message || 'Failed to fetch users');
        }
      } finally {
        setLoading(false);
      }
    };
    fetchUsers();

    return () => {
      controller.abort();
    };
  }, []);

  return { users, loading, error };
};

export default useFetchUsers;
