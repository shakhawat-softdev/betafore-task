#!/usr/bin/env node

/**
 * Automatically find an available port and run the Next.js dev server
 * Tries ports sequentially: 3000, 3001, 3002, 3003, 3004, 3005
 */

const net = require("net");
const os = require("os");
const { execSync } = require("child_process");

const portsToTry = [3000, 3001, 3002, 3003, 3004, 3005];

function getLocalIP() {
  const interfaces = os.networkInterfaces();
  for (const name of Object.keys(interfaces)) {
    for (const iface of interfaces[name]) {
      // Skip internal and non-IPv4 addresses
      if (iface.family === "IPv4" && !iface.internal) {
        return iface.address;
      }
    }
  }
  return "localhost";
}

function getHostname() {
  return os.hostname();
}

function isPortInUse(port) {
  return new Promise((resolve) => {
    const server = net.createServer();

    server.once("error", (err) => {
      if (err.code === "EADDRINUSE") {
        resolve(true); // Port is in use
      } else {
        resolve(false);
      }
    });

    server.once("listening", () => {
      server.close();
      resolve(false); // Port is available
    });

    server.listen(port, "::"); // Listen on all IPv6 addresses (like Next.js does)
  });
}

async function findAvailablePort() {
  for (const port of portsToTry) {
    const inUse = await isPortInUse(port);
    if (!inUse) {
      console.log(`\n✅ Port ${port} is available`);
      console.log(
        `🚀 Starting Next.js development server on http://localhost:${port}\n`,
      );

      // Display network access information
      const localIP = getLocalIP();
      const hostname = getHostname();

      console.log("━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━");
      console.log("📍 Access URLs:");
      console.log("━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━");
      console.log(`  ▪ Local:       http://localhost:${port}`);
      console.log(`  ▪ IP Address:  http://${localIP}:${port}`);
      console.log(`  ▪ Hostname:    http://${hostname}:${port}`);
      console.log("━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\n");

      // Run Next.js dev server on the available port
      try {
        execSync(`next dev -p ${port}`, {
          stdio: "inherit",
          shell: true,
        });
      } catch (error) {
        // Gracefully handle interruption
        console.log("\n⛔ Development server stopped");
        process.exit(0);
      }
      return;
    }
    console.log(`⚠️  Port ${port} is already in use, trying next port...`);
  }

  console.error("\n❌ Error: No available ports found in range 3000-3005");
  console.error("Please close some applications and try again.");
  process.exit(1);
}

// Run the port finder
findAvailablePort().catch((error) => {
  console.error("Error finding available port:", error);
  process.exit(1);
});
