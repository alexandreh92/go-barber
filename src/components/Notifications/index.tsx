/* eslint-disable import/no-duplicates */
import React, { useState, useEffect, useMemo, useCallback } from 'react';
import { MdNotifications } from 'react-icons/md';
import { parseISO, formatDistance } from 'date-fns';
import en from 'date-fns/locale/en-US';

import api from '~/services/api';

import {
  Container,
  Badge,
  NotificationList,
  Notification,
  Scroll,
} from './styles';

interface NotificationsResponse {
  notifications: Notification[];
}

const Notifications = () => {
  const [visible, setVisible] = useState(false);
  const [notifications, setNotifications] = useState<Notification[]>([]);

  const hasUnread = useMemo(
    () => !!notifications.find((notification) => notification.read === false),
    [notifications]
  );

  const loadNotifications = useCallback(async () => {
    const response = await api.get<NotificationsResponse>('notifications');

    const data = response.data.notifications.map((notification) => ({
      ...notification,
      timeDistance: formatDistance(
        parseISO(notification.created_at),
        new Date(),
        {
          addSuffix: true,
          locale: en,
        }
      ),
    }));

    setNotifications(data);
  }, []);

  useEffect(() => {
    loadNotifications();
  }, []);

  const handleToggleVisible = () => {
    setVisible(!visible);
  };

  const handleMarkAsread = async (id: number) => {
    await api.patch(`notifications/${id}`);

    setNotifications(
      notifications.map((notification) =>
        notification.id === id ? { ...notification, read: true } : notification
      )
    );
  };

  return (
    <Container>
      <Badge onClick={handleToggleVisible} hasUnread={hasUnread}>
        <MdNotifications color="#7159c1" size={20} />
      </Badge>
      <NotificationList visible={visible}>
        <Scroll>
          {notifications.map((notification) => (
            <Notification key={notification.id} unread={!notification.read}>
              <p>{notification.content}</p>
              <time>{notification.timeDistance}</time>
              {!notification.read && (
                <button
                  type="button"
                  onClick={() => handleMarkAsread(notification.id)}
                >
                  Mark as read
                </button>
              )}
            </Notification>
          ))}
        </Scroll>
      </NotificationList>
    </Container>
  );
};

export default Notifications;
