/* eslint-disable import/no-duplicates */
import React, { useState, useEffect, useMemo, useCallback } from 'react';
import { MdNotifications } from 'react-icons/md';
import { parseISO, formatDistance } from 'date-fns';
import pt from 'date-fns/locale/pt';

import api from '~/services/api';

import {
  Container,
  Badge,
  NotificationList,
  Notification,
  Scroll,
} from './styles';

const Notifications = () => {
  const [visible, setVisible] = useState(false);
  const [notifications, setNotifications] = useState([]);

  const hasUnread = useMemo(
    () => !!notifications.find((notification) => notification.read === false),
    [notifications]
  );

  const loadNotifications = useCallback(async () => {
    const response = await api.get('notifications');

    const data = response.data.map((notification) => ({
      ...notification,
      timeDistance: formatDistance(
        parseISO(notification.created_at),
        new Date(),
        {
          addSuffix: true,
          locale: pt,
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

  const handleMarkAsread = async (id) => {
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
              <p>Voce possui um novo agendamento para amannha</p>
              <time>ha 2 dias</time>
              {!notification.read && (
                <button
                  type="button"
                  onClick={() => handleMarkAsread(notification.id)}
                >
                  Marcar como lida
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
