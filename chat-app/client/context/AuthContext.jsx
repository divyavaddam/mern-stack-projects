import { createContext, useState, useEffect } from "react";
import axios from "axios";
import toast from "react-hot-toast";
import { io } from "socket.io-client";
import { useNavigate } from "react-router-dom";

const backendUrl = import.meta.env.VITE_BACKEND_URL;
axios.defaults.baseURL = backendUrl;

export const AuthContext = createContext();
export const AuthProvider = ({ children }) => {
  const navigate = useNavigate();
  const [token, setToken] = useState(sessionStorage.getItem("token"));
  const [authUser, setAuthUser] = useState(null);
  const [onlineUsers, setOnlineUsers] = useState([]);
  const [socket, setSocket] = useState(null);
  const [loading, setLoading] = useState(true);

  // CHECK IF USER IS AUTHENTICATED AND IF SO, SET THE USER DATA AND CONNECT THE SOCKET
  const checkAuth = async () => {
    if (!token) {
    setLoading(false);
    return;
  }
    try {
      const { data } = await axios.get("/api/auth/check");
      if (data.success) {
        setAuthUser(data.user);
        connectSocket(data.user);
      } else {
        logout(false);
      }
    } catch (error) {
      logout(false);
      toast.error(error.message);
    } finally {
      setLoading(false);
    }
  };

  // LOGIN FUNCTION TO HANDLE USER AUTHENTICATION AND SOCKET CONNECTION
  const login = async (state, credentials) => {
    try {
      const { data } = await axios.post(`/api/auth/${state}`, credentials);
      if (data.success) {
        setAuthUser(data.userData);
        connectSocket(data.userData);
        axios.defaults.headers.common["token"] = data.token;
        setToken(data.token);
        sessionStorage.setItem("token", data.token);
        toast.success(data.message);
        return true;
      } else {
        toast.error(data.message);
        return false;
      }
    } catch (error) {
      toast.error(error.message);
      return false;
    }
  };

  // LOGOUT FUNCTION TO HANDLE USER LOGOUT AND SOCKET DISCONNECTION
  const logout = (showToast = true) => {
    sessionStorage.removeItem("token");
    setToken(null);
    setAuthUser(null);
    setOnlineUsers([]);
    axios.defaults.headers.common["token"] = null;
    if (socket) socket.disconnect();
    if (showToast) toast.success("Logged out successfully");
    if (window.location.pathname !== "/login") {
    navigate("/login");
  }
  };

  // UPDATE PROFILE FUNCTION TO HANDLE USER PROFILE UPDATES
  const updateProfile = async (body) => {
    try {
      const { data } = await axios.put("/api/auth/update-profile", body, {
        headers: { token: token },
      });

      if (data.success) {
        setAuthUser(data.user);
        toast.success("Profile updated successfully");
      }
    } catch (error) {
      toast.error(error.message || "Failed to update profile");
    }
  };

  // CONNECT SOCKET FUNCTION TO HANDLE SOCKET CONNECTION AND ONLINE USERS UPDATE
  const connectSocket = (userData) => {
    if (!userData || socket?.connected) return;
    if (socket) socket.disconnect();
    const newSocket = io(backendUrl, {
      query: {
        userId: userData._id,
      },
    });
    newSocket.connect();
    setSocket(newSocket);

    newSocket.on("getOnlineUsers", (userIds) => {
      setOnlineUsers(userIds);
    });
    return () => {
      newSocket.disconnect(); // cleanup
    };
  };

  useEffect(() => {
    if (token) {
      axios.defaults.headers.common["token"] = token;
    }
    checkAuth();
  }, []);

  const value = {
    axios,
    authUser,
    onlineUsers,
    socket,
    login,
    logout,
    updateProfile,
    loading,
  };
  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};
