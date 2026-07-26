const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(cors());
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, 'public')));

// VPN Server Data
const vpnServers = [
  { id: 1, name: 'US East', country: 'United States', flag: '🇺🇸', ip: '192.168.1.1', city: 'New York', latency: 15 },
  { id: 2, name: 'US West', country: 'United States', flag: '🇺🇸', ip: '192.168.1.2', city: 'Los Angeles', latency: 25 },
  { id: 3, name: 'Europe', country: 'Germany', flag: '🇩🇪', ip: '192.168.1.3', city: 'Berlin', latency: 40 },
  { id: 4, name: 'UK', country: 'United Kingdom', flag: '🇬🇧', ip: '192.168.1.4', city: 'London', latency: 35 },
  { id: 5, name: 'France', country: 'France', flag: '🇫🇷', ip: '192.168.1.5', city: 'Paris', latency: 38 },
  { id: 6, name: 'Japan', country: 'Japan', flag: '🇯🇵', ip: '192.168.1.6', city: 'Tokyo', latency: 80 },
  { id: 7, name: 'Australia', country: 'Australia', flag: '🇦🇺', ip: '192.168.1.7', city: 'Sydney', latency: 150 },
  { id: 8, name: 'Canada', country: 'Canada', flag: '🇨🇦', ip: '192.168.1.8', city: 'Toronto', latency: 20 },
  { id: 9, name: 'Singapore', country: 'Singapore', flag: '🇸🇬', ip: '192.168.1.9', city: 'Singapore', latency: 90 },
  { id: 10, name: 'India', country: 'India', flag: '🇮🇳', ip: '192.168.1.10', city: 'Mumbai', latency: 110 }
];

const countries = [
  { id: 1, name: 'United States', flag: '🇺🇸', servers: 2 },
  { id: 2, name: 'Germany', flag: '🇩🇪', servers: 1 },
  { id: 3, name: 'United Kingdom', flag: '🇬🇧', servers: 1 },
  { id: 4, name: 'France', flag: '🇫🇷', servers: 1 },
  { id: 5, name: 'Japan', flag: '🇯🇵', servers: 1 },
  { id: 6, name: 'Australia', flag: '🇦🇺', servers: 1 },
  { id: 7, name: 'Canada', flag: '🇨🇦', servers: 1 },
  { id: 8, name: 'Singapore', flag: '🇸🇬', servers: 1 },
  { id: 9, name: 'India', flag: '🇮🇳', servers: 1 },
  { id: 10, name: 'Mexico', flag: '🇲🇽', servers: 1 }
];

let vpnConnected = false;
let currentServer = null;
let currentVpnIp = null;

// Routes

// VPN Connect
app.post('/api/vpn/connect', (req, res) => {
  const { serverId } = req.body;
  const server = vpnServers.find(s => s.id === serverId);
  
  if (!server) {
    return res.status(404).json({ error: 'Server not found' });
  }
  
  vpnConnected = true;
  currentServer = server;
  currentVpnIp = server.ip;
  
  res.json({
    status: 'connected',
    message: `Connected to ${server.name}`,
    server: server,
    vpnIp: currentVpnIp
  });
});

// VPN Disconnect
app.post('/api/vpn/disconnect', (req, res) => {
  vpnConnected = false;
  const prevServer = currentServer;
  currentServer = null;
  currentVpnIp = null;
  
  res.json({
    status: 'disconnected',
    message: `Disconnected from ${prevServer ? prevServer.name : 'VPN'}`,
    previousServer: prevServer
  });
});

// VPN Status
app.get('/api/vpn/status', (req, res) => {
  res.json({
    connected: vpnConnected,
    currentServer: currentServer,
    vpnIp: currentVpnIp,
    timestamp: new Date().toISOString()
  });
});

// Get VPN Servers List (top 10)
app.get('/api/vpn/servers', (req, res) => {
  res.json({
    total: vpnServers.length,
    servers: vpnServers.slice(0, 10),
    timestamp: new Date().toISOString()
  });
});

// Get Countries List (top 10)
app.get('/api/vpn/countries', (req, res) => {
  res.json({
    total: countries.length,
    countries: countries.slice(0, 10),
    timestamp: new Date().toISOString()
  });
});

// Generate Country List with Flags
app.get('/api/vpn/countries/flags', (req, res) => {
  const countriesWithFlags = countries.slice(0, 10).map(country => ({
    ...country,
    flag: country.flag
  }));
  
  res.json({
    total: countriesWithFlags.length,
    countries: countriesWithFlags
  });
});

// Generate Servers List with Flags
app.get('/api/vpn/servers/flags', (req, res) => {
  const serversWithFlags = vpnServers.slice(0, 10).map(server => ({
    ...server,
    flag: server.flag
  }));
  
  res.json({
    total: serversWithFlags.length,
    servers: serversWithFlags
  });
});

// Generate VPN IP (top 10)
app.get('/api/vpn/ips', (req, res) => {
  const ips = vpnServers.slice(0, 10).map(server => ({
    serverId: server.id,
    serverName: server.name,
    flag: server.flag,
    ip: server.ip,
    country: server.country,
    city: server.city
  }));
  
  res.json({
    total: ips.length,
    ips: ips,
    timestamp: new Date().toISOString()
  });
});

// Health Check
app.get('/api/health', (req, res) => {
  res.json({ status: 'healthy', timestamp: new Date().toISOString() });
});

// Fallback to index.html for root or SPA routes
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.listen(PORT, () => {
  console.log(`VPN API Server running on http://localhost:${PORT}`);
});
