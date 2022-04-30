
# Name of the app to check. Change this to your Vercel application name!
LIB=blocks

# Determine version of Nx installed
NX_VERSION=$(node -e "console.log(require('./package.json').devDependencies['@nrwl/workspace'])")
TS_VERSION=$(node -e "console.log(require('./package.json').devDependencies['typescript'])")

# Install @nrwl/workspace in order to run the affected command
# npm install -D @nrwl/workspace@$NX_VERSION --prefer-offline
# npm install -D typescript@$TS_VERSION --prefer-offline
# SHOULD NOT NEED THE ABOVE STEPS AS WE HAVE ZERO INSTALLS ENABLED WITH YARN

# Run the affected command, comparing latest commit to the one before that
npx nx affected:libs --plain --base HEAD~1 --head HEAD | grep $LIB -q

# Store result of the previous command (grep)
IS_AFFECTED=$?

if [ $IS_AFFECTED -eq 1 ]; then
  echo "🛑 - Cancelled: No changes to library $LIB"
  exit 0
elif [ $IS_AFFECTED -eq 0 ]; then
  echo "✅ - Building library $LIB"
  exit 1
fi
