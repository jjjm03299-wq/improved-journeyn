import React, { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [isConnected, setIsConnected] = useState(false);
  const [selectedCountry, setSelectedCountry] = useState(null);
  const [vpnStatus, setVpnStatus] = useState('Disconnected');
  const [countries, setCountries] = useState([]);

  // Mock VPN API endpoint data
  const vpnCountries = [
    { id: 1, name: 'United States', code: 'US', flag: '🇺🇸', ip: '192.168.1.1' },
    { id: 2, name: 'United Kingdom', code: 'GB', flag: '🇬🇧', ip: '192.168.1.2' },
    { id: 3, name: 'Canada', code: 'CA', flag: '🇨🇦', ip: '192.168.1.3' },
    { id: 4, name: 'Australia', code: 'AU', flag: '🇦🇺', ip: '192.168.1.4' },
    { id: 5, name: 'Germany', code: 'DE', flag: '🇩🇪', ip: '192.168.1.5' },
    { id: 6, name: 'France', code: 'FR', flag: '🇫🇷', ip: '192.168.1.6' },
    { id: 7, name: 'Japan', code: 'JP', flag: '🇯🇵', ip: '192.168.1.7' },
    { id: 8, name: 'Singapore', code: 'SG', flag: '🇸🇬', ip: '192.168.1.8' },
    { id: 9, name: 'Netherlands', code: 'NL', flag: '🇳🇱', ip: '192.168.1.9' },
    { id: 10, name: 'Brazil', code: 'BR', flag: '🇧🇷', ip: '192.168.1.10' },
  ];

  // Load countries on component mount
  useEffect(() => {
    setCountries(vpnCountries);
    setSelectedCountry(vpnCountries[0]);
  }, []);

  // Handle VPN connection
  const handleConnect = () => {
    if (selectedCountry) {
      setIsConnected(true);
      setVpnStatus(`Connected to ${selectedCountry.name}`);
    }
  };

  // Handle VPN disconnection
  const handleDisconnect = () => {
    setIsConnected(false);
    setVpnStatus('Disconnected');
  };

  // Handle country selection
  const handleCountrySelect = (country) => {
    setSelectedCountry(country);
    if (isConnected) {
      setVpnStatus(`Connected to ${country.name}`);
    }
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>🌐 VPN Country Selector</h1>
        <p>Connect to VPN servers in 10 different countries</p>
      </header>

      <main className="App-main">
        {/* VPN Status Section */}
        <section className="status-section">
          <div className={`status-card ${isConnected ? 'connected' : 'disconnected'}`}>
            <h2>VPN Status</h2>
            <p className="status-text">{vpnStatus}</p>
            <div className="status-indicator">
              <span className={`indicator ${isConnected ? 'active' : ''}`}></span>
              {isConnected ? 'Connected' : 'Disconnected'}
            </div>
          </div>
        </section>

        {/* Selected Country Display */}
        {selectedCountry && (
          <section className="selected-country-section">
            <h2>Selected Country</h2>
            <div className="selected-country-card">
              <div className="country-flag">{selectedCountry.flag}</div>
              <div className="country-info">
                <h3>{selectedCountry.name}</h3>
                <p>Code: {selectedCountry.code}</p>
                <p>IP Address: {selectedCountry.ip}</p>
              </div>
            </div>
          </section>
        )}

        {/* VPN Control Buttons */}
        <section className="controls-section">
          <button
            className={`btn btn-connect ${isConnected ? 'disabled' : ''}`}
            onClick={handleConnect}
            disabled={isConnected}
          >
            ✓ Connect VPN
          </button>
          <button
            className={`btn btn-disconnect ${!isConnected ? 'disabled' : ''}`}
            onClick={handleDisconnect}
            disabled={!isConnected}
          >
            ✕ Disconnect VPN
          </button>
        </section>

        {/* Country List */}
        <section className="countries-section">
          <h2>Available Countries</h2>
          <div className="countries-grid">
            {countries.map((country) => (
              <div
                key={country.id}
                className={`country-card ${selectedCountry?.id === country.id ? 'selected' : ''}`}
                onClick={() => handleCountrySelect(country)}
              >
                <div className="flag">{country.flag}</div>
                <div className="name">{country.name}</div>
                <div className="code">{country.code}</div>
              </div>
            ))}
          </div>
        </section>

        {/* Mock API Endpoint Info */}
        <section className="api-section">
          <h2>VPN API Endpoint</h2>
          <div className="api-info">
            <p><strong>Endpoint:</strong> <code>/api/vpn/countries</code></p>
            <p><strong>Method:</strong> GET</p>
            <p><strong>Description:</strong> Returns list of available VPN countries</p>
            <button className="btn btn-api" onClick={() => fetchVpnData()}>
              Fetch API Data
            </button>
            <pre id="api-response" className="api-response"></pre>
          </div>
        </section>
      </main>

      <footer className="App-footer">
        <p>VPN Country Selector © 2024 | GitHub Pages Deployment</p>
      </footer>
    </div>
  );

  // Mock API fetch function
  function fetchVpnData() {
    const responseElement = document.getElementById('api-response');
    const apiData = {
      endpoint: '/api/vpn/countries',
      status: 'success',
      data: countries,
      timestamp: new Date().toISOString(),
    };
    responseElement.textContent = JSON.stringify(apiData, null, 2);
  }
}

export default App;
