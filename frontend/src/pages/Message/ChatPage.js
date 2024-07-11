// ChatPage.js
/*
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useAuth } from '../../Context/auth';

const ChatPage = () => {
  const [auth] = useAuth();
  const currentUser = auth?.user;

  const [users, setUsers] = useState([]);
  const [messages, setMessages] = useState([]);
  const [error, setError] = useState('');

  useEffect(() => {
    if (!currentUser) {
      setError('User not authenticated');
      return;
    }

    const fetchUsers = async () => {
      try {
        const { data } = await axios.get(`${process.env.REACT_APP_API}/api/v1/users/`);
        setUsers(data);
      } catch (error) {
        setError(error.message);
      }
    };

    const fetchMessages = async () => {
      try {
        const { data } = await axios.get(`${process.env.REACT_APP_API}/api/v1/messages/${currentUser._id}`);
        setMessages(data);
      } catch (error) {
        setError(error.message);
      }
    };

    fetchUsers();
    fetchMessages();
  }, [currentUser]);

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div>
      <h1>Welcome, {currentUser?.name}</h1>
      <h2>Users</h2>
      <ul>
        {users.map(user => (
          <li key={user._id}>{user.name}</li>
        ))}
      </ul>
      <h2>Messages</h2>
      <ul>
        {messages.map(message => (
          <li key={message._id}>{message.message}</li>
        ))}
      </ul>
    </div>
  );
};

export default ChatPage;
*/
/*
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useAuth } from '../../Context/auth';

const ChatPage = () => {
  const [auth] = useAuth();
  const currentUser = auth?.user;

  const [users, setUsers] = useState([]);
  const [messages, setMessages] = useState([]);
  const [error, setError] = useState('');

  useEffect(() => {
    if (!currentUser) {
      setError('User not authenticated');
      return;
    }

    const fetchUsers = async () => {
      try {
        const { data } = await axios.get(`${process.env.REACT_APP_API}/api/v1/users/`);
        setUsers(data);
      } catch (error) {
        setError(error.message);
      }
    };

    const fetchMessages = async () => {
      try {
        const { data } = await axios.get(`${process.env.REACT_APP_API}/api/v1/messages/${currentUser._id}`, {
          headers: {
            Authorization: `Bearer ${localStorage.getItem('token')}`, // Modify this to reflect how your token is stored
          },
        });
        setMessages(data);
      } catch (error) {
        setError(error.message);
      }
    };

    // Log request headers for debugging
    const logRequestHeaders = (config) => {
      console.log('Request headers:', config.headers);
      return config;
    };

    // Axios request interceptor to log headers
    axios.interceptors.request.use(logRequestHeaders);

    fetchUsers();
    fetchMessages();

    // Clean up interceptor on component unmount
    return () => {
      axios.interceptors.request.eject(logRequestHeaders);
    };
  }, [currentUser]);

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div>
      <h1>Welcome, {currentUser?.name}</h1>
      <h2>Users</h2>
      <ul>
        {users.map((user) => (
          <li key={user._id}>{user.name}</li>
        ))}
      </ul>
      <h2>Messages</h2>
      <ul>
        {messages.map((message) => (
          <li key={message._id}>{message.message}</li>
        ))}
      </ul>
    </div>
  );
};

export default ChatPage;
*/
/*

import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useAuth } from '../../Context/auth';

const ChatPage = () => {
  const [auth] = useAuth();
  const currentUser = auth?.user;

  const [users, setUsers] = useState([]);
  const [messages, setMessages] = useState([]);
  const [error, setError] = useState('');

  useEffect(() => {
    if (!currentUser) {
      setError('User not authenticated');
      return;
    }

    console.log('Current User:', currentUser); // Log currentUser

    const fetchUsers = async () => {
      try {
        const { data } = await axios.get(`${process.env.REACT_APP_API}/api/v1/users/`, {
          headers: {
            Authorization: `Bearer ${auth.token}`,
          },
        });
        setUsers(data);
      } catch (error) {
        setError(error.message);
      }
    };

    const fetchMessages = async () => {
      if (!currentUser._id) {
        setError('User ID is missing');
        console.error('User ID is missing in currentUser:', currentUser); // Log the currentUser object
        return;
      }
      try {
        console.log(`Fetching messages for user ID: ${currentUser._id}`); // Log the user ID
        const { data } = await axios.get(`${process.env.REACT_APP_API}/api/v1/messages/${currentUser._id}`, {
          headers: {
            Authorization: `Bearer ${auth.token}`,
          },
        });
        setMessages(data);
      } catch (error) {
        setError(error.message);
      }
    };

    fetchUsers();
    fetchMessages();
  }, [currentUser, auth.token]);

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div>
      <h1>Welcome, {currentUser?.name}</h1>
      <h2>Users</h2>
      <ul>
        {users.map((user) => (
          <li key={user._id}>{user.name}</li>
        ))}
      </ul>
      <h2>Messages</h2>
      <ul>
        {messages.map((message) => (
          <li key={message._id}>{message.message}</li>
        ))}
      </ul>
    </div>
  );
};

export default ChatPage;
*/
/*

import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useAuth } from '../../Context/auth';

const ChatPage = () => {
  const [auth] = useAuth();
  const currentUser = auth?.user;

  const [users, setUsers] = useState([]);
  const [messages, setMessages] = useState([]);
  const [error, setError] = useState('');

  useEffect(() => {
    if (!currentUser) {
      setError('User not authenticated');
      return;
    }

    console.log('Current User:', currentUser); // Log currentUser

    const fetchUsers = async () => {
      try {
        const { data } = await axios.get(`${process.env.REACT_APP_API}/api/v1/users/`, {
          headers: {
            Authorization: `Bearer ${auth.token}`,
          },
        });
        setUsers(data);
      } catch (error) {
        setError(error.message);
      }
    };

    const fetchMessages = async () => {
      if (!currentUser._id) {
        setError('User ID is missing');
        console.error('User ID is missing in currentUser:', currentUser); // Log the currentUser object
        return;
      }
      try {
        console.log(`Fetching messages for user ID: ${currentUser._id}`); // Log the user ID
        const { data: messagesData } = await axios.get(`${process.env.REACT_APP_API}/api/v1/messages/${currentUser._id}`, {
          headers: {
            Authorization: `Bearer ${auth.token}`,
          },
        });
        const userIds = [...new Set(messagesData.map(message => message.senderId))]; // Assuming each message has a senderId

        console.log('User IDs to fetch:', userIds); // Log the user IDs

        // Fetch details for each sender
        const usersData = await Promise.all(userIds.map(async id => {
          try {
            const response = await axios.get(`${process.env.REACT_APP_API}/api/v1/users/${id}`, {
              headers: {
                Authorization: `Bearer ${auth.token}`,
              },
            });
            return response.data;
          } catch (err) {
            console.error(`Failed to fetch user with ID: ${id}`, err); // Log the error for specific user ID
            return null;
          }
        }));

        const usersMap = usersData.reduce((map, user) => {
          if (user) {
            map[user._id] = user;
          }
          return map;
        }, {});

        // Merge messages with sender details
        const mergedMessages = messagesData.map(message => ({
          ...message,
          sender: usersMap[message.senderId],
        }));

        setMessages(mergedMessages);
      } catch (error) {
        setError(error.message);
      }
    };

    fetchUsers();
    fetchMessages();
  }, [currentUser, auth.token]);

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div>
      <h1>Welcome, {currentUser?.name}</h1>
      <h2>Users</h2>
      <ul>
        {users.map((user) => (
          <li key={user._id}>{user.name}</li>
        ))}
      </ul>
      <h2>Messages</h2>
      <ul>
        {messages.map((message) => (
          <li key={message._id}>
            <strong>{message.sender?.name || 'Unknown'}: </strong> 
            {message.message}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ChatPage;

*/
/*
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useAuth } from '../../Context/auth';

const ChatPage = () => {
    const [auth] = useAuth();
    const currentUser = auth?.user;

    const [users, setUsers] = useState([]);
    const [messages, setMessages] = useState([]);
    const [error, setError] = useState('');

    useEffect(() => {
        const fetchMessages = async () => {
            if (!currentUser?._id) {
                setError('User ID is missing');
                console.error('User ID is missing in currentUser:', currentUser);
                return;
            }
            try {
                console.log(`Fetching messages for user ID: ${currentUser._id}`);
                const response = await axios.get(`${process.env.REACT_APP_API}/api/v1/messages/${currentUser._id}`, {
                    headers: {
                        Authorization: `Bearer ${auth.token}`,
                    },
                });

                console.log('Messages Response:', response);

                const messagesData = response.data;

                if (!Array.isArray(messagesData)) {
                    setError('Unexpected response format');
                    console.error('Unexpected response format:', messagesData);
                    return;
                }

                const userIds = [...new Set(
                    messagesData.flatMap(message => [message.senderId, message.receiverId])
                )];

                console.log('User IDs to fetch:', userIds);

                const usersData = await Promise.all(userIds.map(async id => {
                    try {
                        const userResponse = await axios.get(`${process.env.REACT_APP_API}/api/v1/users/${id}`, {
                            headers: {
                                Authorization: `Bearer ${auth.token}`,
                            },
                        });
                        console.log(`User fetched: ${id}`, userResponse.data);
                        return userResponse.data;
                    } catch (err) {
                        console.error(`Failed to fetch user with ID: ${id}`, err);
                        return null;
                    }
                }));

                const usersMap = usersData.reduce((map, user) => {
                    if (user) {
                        map[user._id] = user;
                    }
                    return map;
                }, {});

                const mergedMessages = messagesData.map(message => ({
                    ...message,
                    sender: usersMap[message.senderId],
                    receiver: usersMap[message.receiverId]
                }));

                setMessages(mergedMessages);
            } catch (error) {
                console.error('Error fetching messages:', error);
                setError(error.message);
            }
        };

        fetchMessages();
    }, [currentUser, auth.token]);

    return (
        <div>
            <h1>Chat Page</h1>
            {error && <p>Error: {error}</p>}
            <div>
                {messages.map(message => (
                    <div key={message._id}>
                        <p>From: {message.sender.name}</p>
                        <p>To: {message.receiver.name}</p>
                        <p>Message: {message.message}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ChatPage;
*/
/*
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useAuth } from '../../Context/auth';

const ChatPage = () => {
    const [auth] = useAuth();
    const currentUser = auth?.user;

    const [users, setUsers] = useState([]);
    const [messages, setMessages] = useState([]);
    const [error, setError] = useState('');

    useEffect(() => {
        const fetchMessages = async () => {
            if (!currentUser?._id) {
                setError('User ID is missing');
                console.error('User ID is missing in currentUser:', currentUser);
                return;
            }
            try {
                console.log(`Fetching messages for user ID: ${currentUser._id}`);
                const response = await axios.get(`${process.env.REACT_APP_API}/api/v1/messages/${currentUser._id}`, {
                    headers: {
                        Authorization: `Bearer ${auth.token}`,
                    },
                });

                console.log('Messages Response:', response);

                const messagesData = response.data;

                if (!Array.isArray(messagesData)) {
                    setError('Unexpected response format');
                    console.error('Unexpected response format:', messagesData);
                    return;
                }

                const userIds = [...new Set(
                    messagesData.flatMap(message => [message.senderId, message.receiverId])
                )];

                console.log('User IDs to fetch:', userIds);

                const usersData = await Promise.all(userIds.map(async id => {
                    try {
                        const userResponse = await axios.get(`${process.env.REACT_APP_API}/api/v1/users/${id}`, {
                            headers: {
                                Authorization: `Bearer ${auth.token}`,
                            },
                        });
                        console.log(`User fetched: ${id}`, userResponse.data);
                        return userResponse.data;
                    } catch (err) {
                        console.error(`Failed to fetch user with ID: ${id}`, err);
                        return null;
                    }
                }));

                const usersMap = usersData.reduce((map, user) => {
                    if (user) {
                        map[user._id] = user;
                    }
                    return map;
                }, {});

                const mergedMessages = messagesData.map(message => ({
                    ...message,
                    sender: usersMap[message.senderId],
                    receiver: usersMap[message.receiverId]
                }));

                setMessages(mergedMessages);
            } catch (error) {
                console.error('Error fetching messages:', error);
                setError(error.message);
            }
        };

        fetchMessages();
    }, [currentUser, auth.token]);

    return (
        <div>
            <h1>Chat Page</h1>
            {error && <p>Error: {error}</p>}
            <div>
                {messages.map(message => (
                    <div key={message._id}>
                        <p>From: {message.sender._id === currentUser._id ? 'You' : message.sender.name}</p>
                        <p>To: {message.receiver._id === currentUser._id ? 'You' : message.receiver.name}</p>
                        <p>Message: {message.message}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ChatPage;

*/
/*
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useAuth } from '../../Context/auth';

const ChatPage = () => {
    const [auth] = useAuth();
    const currentUser = auth?.user;

    const [users, setUsers] = useState([]);
    const [messages, setMessages] = useState([]);
    const [error, setError] = useState('');

    useEffect(() => {
        const fetchMessages = async () => {
            if (!currentUser?._id) {
                setError('User ID is missing');
                console.error('User ID is missing in currentUser:', currentUser);
                return;
            }
            try {
                console.log(`Fetching messages for user ID: ${currentUser._id}`);
                const response = await axios.get(`${process.env.REACT_APP_API}/api/v1/messages/${currentUser._id}`, {
                    headers: {
                        Authorization: `Bearer ${auth.token}`,
                    },
                });

                console.log('Messages Response:', response);

                const messagesData = response.data;

                if (!Array.isArray(messagesData)) {
                    setError('Unexpected response format');
                    console.error('Unexpected response format:', messagesData);
                    return;
                }

                const userIds = [...new Set(
                    messagesData.flatMap(message => [message.senderId, message.receiverId])
                )];

                console.log('User IDs to fetch:', userIds);

                const usersData = await Promise.all(userIds.map(async id => {
                    try {
                        const userResponse = await axios.get(`${process.env.REACT_APP_API}/api/v1/users/${id}`, {
                            headers: {
                                Authorization: `Bearer ${auth.token}`,
                            },
                        });
                        console.log(`User fetched: ${id}`, userResponse.data);
                        return userResponse.data;
                    } catch (err) {
                        console.error(`Failed to fetch user with ID: ${id}`, err);
                        return null;
                    }
                }));

                const usersMap = usersData.reduce((map, user) => {
                    if (user) {
                        map[user._id] = user;
                    }
                    return map;
                }, {});

                const mergedMessages = messagesData.map(message => ({
                    ...message,
                    sender: usersMap[message.senderId],
                    receiver: usersMap[message.receiverId]
                }));

                setMessages(mergedMessages);
            } catch (error) {
                console.error('Error fetching messages:', error);
                setError(error.message);
            }
        };

        fetchMessages();
    }, [currentUser, auth.token]);

    const groupMessagesBySender = (messages) => {
        return messages.reduce((groups, message) => {
            const senderId = message.senderId;
            if (!groups[senderId]) {
                groups[senderId] = [];
            }
            groups[senderId].push(message);
            return groups;
        }, {});
    };

    const groupedMessages = groupMessagesBySender(messages);

    return (
        <div>
            <h1>Chat Page</h1>
            {error && <p>Error: {error}</p>}
            <div>
                {Object.entries(groupedMessages).map(([senderId, senderMessages]) => (
                    <div key={senderId} style={{ border: '1px solid #ccc', margin: '10px', padding: '10px' }}>
                        <h2>{senderId === currentUser._id ? 'You' : senderMessages[0].sender.name}</h2>
                        {senderMessages.map(message => (
                            <div key={message._id}>
                                <p>To: {message.receiver._id === currentUser._id ? 'You' : message.receiver.name}</p>
                                <p>Message: {message.message}</p>
                            </div>
                        ))}
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ChatPage;
*/
/*
import '../../styles/Chatpage.css';
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useAuth } from '../../Context/auth';

const ChatPage = () => {
    const [auth] = useAuth();
    const currentUser = auth?.user;

    const [messages, setMessages] = useState([]);
    const [error, setError] = useState('');

    useEffect(() => {
        const fetchMessages = async () => {
            if (!currentUser?._id) {
                setError('User ID is missing');
                console.error('User ID is missing in currentUser:', currentUser);
                return;
            }
            try {
                const response = await axios.get(`${process.env.REACT_APP_API}/api/v1/messages/${currentUser._id}`, {
                    headers: {
                        Authorization: `Bearer ${auth.token}`,
                    },
                });

                const messagesData = response.data;

                if (!Array.isArray(messagesData)) {
                    setError('Unexpected response format');
                    return;
                }

                const userIds = [...new Set(
                    messagesData.flatMap(message => [message.senderId, message.receiverId])
                )];

                const usersData = await Promise.all(userIds.map(async id => {
                    try {
                        const userResponse = await axios.get(`${process.env.REACT_APP_API}/api/v1/users/${id}`, {
                            headers: {
                                Authorization: `Bearer ${auth.token}`,
                            },
                        });
                        return userResponse.data;
                    } catch (err) {
                        return null;
                    }
                }));

                const usersMap = usersData.reduce((map, user) => {
                    if (user) {
                        map[user._id] = user;
                    }
                    return map;
                }, {});

                const mergedMessages = messagesData.map(message => ({
                    ...message,
                    sender: usersMap[message.senderId],
                    receiver: usersMap[message.receiverId]
                }));

                setMessages(mergedMessages);
            } catch (error) {
                setError(error.message);
            }
        };

        fetchMessages();
    }, [currentUser, auth.token]);

    const groupMessagesBySender = (messages) => {
        return messages.reduce((groups, message) => {
            const senderId = message.senderId;
            if (!groups[senderId]) {
                groups[senderId] = [];
            }
            groups[senderId].push(message);
            return groups;
        }, {});
    };

    const groupedMessages = groupMessagesBySender(messages);

    return (
        <div className="chat-container">
            <h1>Chat Page</h1>
            {error && <p className="error-message">Error: {error}</p>}
            <div className="messages-container">
                {Object.entries(groupedMessages).map(([senderId, senderMessages]) => (
                    <div key={senderId} className="message-group">
                        <h2 className="sender-name">{senderId === currentUser._id ? 'You' : senderMessages[0].sender.name}</h2>
                        {senderMessages.map(message => (
                            <div key={message._id} className="message-item">
                                <p className="message-to">To: {message.receiver._id === currentUser._id ? 'You' : message.receiver.name}</p>
                                <p className="message-text">{message.message}</p>
                            </div>
                        ))}
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ChatPage;

*/
/*

import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useAuth } from '../../Context/auth';
import '../../styles/Chatpage.css';


const ChatPage = () => {
    const [auth] = useAuth();
    const currentUser = auth?.user;

    const [messages, setMessages] = useState([]);
    const [error, setError] = useState('');

    useEffect(() => {
        const fetchMessages = async () => {
            if (!currentUser?._id) {
                setError('User ID is missing');
                console.error('User ID is missing in currentUser:', currentUser);
                return;
            }
            try {
                const response = await axios.get(`${process.env.REACT_APP_API}/api/v1/messages/${currentUser._id}`, {
                    headers: {
                        Authorization: `Bearer ${auth.token}`,
                    },
                });

                const messagesData = response.data;

                if (!Array.isArray(messagesData)) {
                    setError('Unexpected response format');
                    return;
                }

                const userIds = [...new Set(
                    messagesData.flatMap(message => [message.senderId, message.receiverId])
                )];

                const usersData = await Promise.all(userIds.map(async id => {
                    try {
                        const userResponse = await axios.get(`${process.env.REACT_APP_API}/api/v1/users/${id}`, {
                            headers: {
                                Authorization: `Bearer ${auth.token}`,
                            },
                        });
                        return userResponse.data;
                    } catch (err) {
                        return null;
                    }
                }));

                const usersMap = usersData.reduce((map, user) => {
                    if (user) {
                        map[user._id] = user;
                    }
                    return map;
                }, {});

                const mergedMessages = messagesData.map(message => ({
                    ...message,
                    sender: usersMap[message.senderId],
                    receiver: usersMap[message.receiverId]
                }));

                setMessages(mergedMessages);
            } catch (error) {
                setError(error.message);
            }
        };

        fetchMessages();
    }, [currentUser, auth.token]);

    const groupMessagesBySender = (messages) => {
        return messages.reduce((groups, message) => {
            const senderId = message.senderId;
            if (!groups[senderId]) {
                groups[senderId] = [];
            }
            groups[senderId].push(message);
            return groups;
        }, {});
    };

    const groupedMessages = groupMessagesBySender(messages);

    return (
        <div className="chat-container">
            <h1>Chat Page</h1>
            {error && <p className="error-message">Error: {error}</p>}
            <div className="messages-container">
                {Object.entries(groupedMessages).map(([senderId, senderMessages]) => (
                    <div key={senderId} className="message-group">
                        <div className="sender-header">
                            <img 
                                src={senderId === currentUser._id ? currentUser.avatarUrl : senderMessages[0].sender.avatarUrl} 
                                alt="Avatar" 
                                className="avatar"
                            />
                            <h2 className="sender-name">{senderId === currentUser._id ? 'You' : senderMessages[0].sender.name}</h2>
                        </div>
                        {senderMessages.map(message => (
                            <div key={message._id} className="message-item">
                                <p className="message-to">To: {message.receiver._id === currentUser._id ? 'You' : message.receiver.name}</p>
                                <p className="message-text">{message.message}</p>
                            </div>
                        ))}
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ChatPage;
*/
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useAuth } from '../../Context/auth';
import '../../styles/Chatpage.css';


const ChatPage = () => {
    const [auth] = useAuth();
    const currentUser = auth?.user;

    const [messages, setMessages] = useState([]);
    const [error, setError] = useState('');

    useEffect(() => {
        const fetchMessages = async () => {
            if (!currentUser?._id) {
                setError('User ID is missing');
                console.error('User ID is missing in currentUser:', currentUser);
                return;
            }
            try {
                const response = await axios.get(`${process.env.REACT_APP_API}/api/v1/messages/${currentUser._id}`, {
                    headers: {
                        Authorization: `Bearer ${auth.token}`,
                    },
                });

                const messagesData = response.data;

                if (!Array.isArray(messagesData)) {
                    setError('Unexpected response format');
                    return;
                }

                const userIds = [...new Set(
                    messagesData.flatMap(message => [message.senderId, message.receiverId])
                )];

                const usersData = await Promise.all(userIds.map(async id => {
                    try {
                        const userResponse = await axios.get(`${process.env.REACT_APP_API}/api/v1/users/${id}`, {
                            headers: {
                                Authorization: `Bearer ${auth.token}`,
                            },
                        });
                        return userResponse.data;
                    } catch (err) {
                        return null;
                    }
                }));

                const usersMap = usersData.reduce((map, user) => {
                    if (user) {
                        map[user._id] = user;
                    }
                    return map;
                }, {});

                const mergedMessages = messagesData.map(message => ({
                    ...message,
                    sender: usersMap[message.senderId],
                    receiver: usersMap[message.receiverId]
                }));

                setMessages(mergedMessages);
            } catch (error) {
                setError(error.message);
            }
        };

        fetchMessages();
    }, [currentUser, auth.token]);

    const groupMessagesBySender = (messages) => {
        return messages.reduce((groups, message) => {
            const senderId = message.senderId;
            if (!groups[senderId]) {
                groups[senderId] = [];
            }
            groups[senderId].push(message);
            return groups;
        }, {});
    };

    const groupedMessages = groupMessagesBySender(messages);

    return (
        <div className="chat-container">
            <h1>Chat Page</h1>
            {error && <p className="error-message">Error: {error}</p>}
            <div className="messages-container">
                {Object.entries(groupedMessages).map(([senderId, senderMessages]) => (
                    <div key={senderId} className="message-group">
                        <div className="sender-header">
                            {senderMessages[0].sender.avatarUrl && (
                                <img 
                                    src={senderMessages[0].sender.avatarUrl} 
                                    alt="Avatar" 
                                    className="avatar"
                                />
                            )}
                            <h2 className="sender-name">{senderId === currentUser._id ? 'You' : senderMessages[0].sender.name}</h2>
                        </div>
                        {senderMessages.map(message => (
                            <div key={message._id} className="message-item">
                                <p className="message-to">To: {message.receiver._id === currentUser._id ? 'You' : message.receiver.name}</p>
                                <p className="message-text">{message.message}</p>
                            </div>
                        ))}
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ChatPage;
