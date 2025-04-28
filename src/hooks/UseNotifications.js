import { useState, useEffect } from 'react';
import { getNotificationsByStudent } from '../services/api'; 

export function useNotifications(studentId) {
  const [notifications, setNotifications] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchNotifications = async () => {
    try {
      const data = await getNotificationsByStudent(studentId);
      setNotifications(data);
      setError(null);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (studentId) {
      fetchNotifications();
    }
  }, [studentId]);

  return {
    notifications,
    loading,
    error,
    refetch: fetchNotifications
  };
}
