import { useEffect, useState } from 'react';
import { ITodo } from '../types/Types';

const useFetchTodos = () => {
  const [todos, setTodos] = useState<ITodo[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const controller = new AbortController();
    const { signal } = controller;

    const fetchTodos = async () => {
      try {
        const res = await fetch('https://jsonplaceholder.typicode.com/todos', { signal });
        if (!res.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await res.json();
        setTodos(data);
      } catch (error: any) {
        if (error.name === 'AbortError') {
          console.error('Fetch aborted');
        } else {
          setError(error.message || 'Failed to fetch todos');
        }
      } finally {
        setLoading(false);
      }
    };
    fetchTodos();

    return () => {
      controller.abort();
    };
  }, []);

  return { todos, loading, error };
};

export default useFetchTodos;
