
# Name of the app to check. Change this to your Vercel application name!
LIB=blocks

# Determine version of Nx installed
NX_VERSION=$(node -e "console.log(require('./package.json').devDependencies['@nrwl/workspace'])")
TS_VERSION=$(node -e "console.log(require('./package.json').devDependencies['typescript'])")

# No need to install nx as we are using yarn zero installs

# Run the affected command
npx nx affected:libs --plain | grep $LIB -q

# Store result of the previous command (grep)
IS_AFFECTED=$?

if [ $IS_AFFECTED -eq 1 ]; then
  echo "🛑 - Cancelled: No changes to $LIB library"
  exit 0
elif [ $IS_AFFECTED -eq 0 ]; then
  echo "✅ - Building $LIB library"
  exit 1
fi
