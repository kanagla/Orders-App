// orders-app/scripts/copyRemoteEntry.js
// const fs = require('fs-extra');
// const path = require('path');

// const source = path.resolve(__dirname, '../dist');
// const destination = path.resolve(__dirname, '../../shell-app/public/microfrontends/orders/1.0.0');

// fs.copy(source, destination)
//   .then(() => console.log(`✅ Copied orders-app to: ${destination}`))
//   .catch(err => console.error('❌ Copy failed:', err));


// orders-app/scripts/copyRemoteEntry.js
const fs = require('fs-extra');
const path = require('path');

const remoteApp = 'orders';
const version = '1.0.0';

const distDir = path.join(__dirname, '..', 'dist');
const targetDir = path.resolve(__dirname, '..', '..', 'shell-app', 'public', 'microfrontends', remoteApp, version);

async function copyAndGenerateManifest() {
  try {
    await fs.ensureDir(targetDir);
    await fs.copy(distDir, targetDir);

    const manifestPath = path.resolve(__dirname, '..', '..', 'shell-app', 'public', 'manifest.json');
    const manifest = fs.existsSync(manifestPath) ? require(manifestPath) : {};

    manifest[remoteApp] = {
      remoteEntry: `/microfrontends/${remoteApp}/${version}/remoteEntry.js`,
    };

    await fs.writeJson(manifestPath, manifest, { spaces: 2 });
    console.log(`✅ Copied remoteEntry and updated manifest for ${remoteApp}@${version}`);
  } catch (err) {
    console.error('❌ Failed to copy remote entry or update manifest:', err);
  }
}

copyAndGenerateManifest();
