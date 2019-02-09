# slowdown

# Installation Instructions

## Install Java 8
Install JDK 8
[Java SE Development Kit 8 8u202 or 8u201](https://www.oracle.com/technetwork/java/javase/downloads/jdk8-downloads-2133151.html)

Install JRE 8
[Java SE Runtime Environment Version 8 build 1.8.0_202 or 1.8.0_201](https://www.oracle.com/technetwork/java/javase/downloads/jre8-downloads-2133155.html)

Verify Installation with commands: 
```
javac -version
java -version
```

# For Mac
## Install Xcode 
Enable Command Line Tools
- Xcode->Preferences->Locations->Command Line Tools (drop down menu)

- Verify Installation with command (returns folder if it’s installed, returns 2 if not installed)
```
xcode-select -p
```

## Install Android Studio
- Choose “Custom” Setup when prompted, Check the following
```
Android SDK
Android SDK Platform
Performance (Intel ® HAXM)
Android Virtual Device
```
### Setup SDK 8.1 (Oreo)
If on startup menu, Configure->SDK (bottom right)
If in project Preferences -> Appearance & Behavior → System Settings → Android SDK
- Select Android 8.1 (Oreo), then “Show Package Details” in bottom right corner, (add these two)
```
Android SDK Platform 27
Google APIs Intel x86 Atom System Image
```
Go to tab “SDK Tools” and “Show Package Details” again
```
27.0.3
```
Apply & Install

## Add Environment Variables
Open/Create /.bash_profile (Add following variables -> then save with “source” command)
```
touch ~/.bash_profile; open ~/.bash_profile
```
```
#Node Requirement
export PATH=$PATH:/usr/local/git/bin:/usr/local/bin

#React Native
export ANDROID_HOME=$HOME/Library/Android/sdk
export PATH=$PATH:$ANDROID_HOME/emulator
export PATH=$PATH:$ANDROID_HOME/tools
export PATH=$PATH:$ANDROID_HOME/tools/bin
export PATH=$PATH:$ANDROID_HOME/platform-tools
```
Update Changes
```
source $HOME/.bash_profile
source ~/.bash_profile
```
Verify Changes and Close/Reopen Terminal
```
echo $PATH
```

## Install Homebrew
```
/usr/bin/ruby -e "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install)"
```
Verify that there are no errors, check top of output after running the command
DO NOT CONTINUE IF THERE ARE ERRORS (Lookup error, fix before continuing)

## Install Node
```
brew install node
```
Verify that there are no errors, check top of output after entering install command
DO NOT CONTINUE IF THERE ARE ERRORS (Fix before continuing)
NOTE: If node is already installed then you may have trouble “linking” with brew command

## Install Watchman
```
brew install watchman
```

## Install React Native CLI
```
npm install -g react-native-cli
```
NOTE: React Native Docs mentions if error “Cannot find module 'npmlog’” try command
```
curl -0 -L https://npmjs.org/install.sh | sudo sh
```
OTHER ERRORS suggest node did not install properly

## Install Dependencies
Change directory to FieldNotebook (cd [directory])
```
npm install
```

## Setup Debugger Console
1. Before Enabling Remote JS Debugging
   - Open Chrome, open Developer Tools (CMD+Option+i)
   - Go to URL: http://localhost:8081/debugger-ui/

If failure to connect or continuously trying to connect and failing
- Stop JS Debugging CMD+M
- Reload URL
- Re-enable JS Debugging CMD+M
- Stop app Metro Builder CTRL+C
- Re-run app with below command

## Run App
```
react-native run-android
react-native run-ios
```
## Running on Phone
Use the same commands as above

To reload you must remotely open the configuration menu with the command:
```
adb shell input keyevent 82
```

# For Windows

## Install Visual Studio Code 
From https://code.visualstudio.com/

alternatively you can use Atom from https://atom.io/

## Install Chocolately
From https://chocolatey.org/install

Paste the install instructions into command prompt or other powershell

## Install Android Studio
- Choose “Custom” Setup when prompted, Check the following
```
Android SDK
Android SDK Platform
Performance (Intel ® HAXM)
Android Virtual Device
```
### Setup SDK 8.1 (Oreo)
If on startup menu, Configure->SDK (bottom right)
If in project Preferences -> Appearance & Behavior → System Settings → Android SDK
- Select Android 8.1 (Oreo), then “Show Package Details” in bottom right corner, (add these two)
```
Android SDK Platform 27
Google APIs Intel x86 Atom System Image
```
Go to tab “SDK Tools” and “Show Package Details” again
```
27.0.3
```
Apply & Install

## Add Environment Variables
Go to Control Panel -> Systems and Security -> System -> Change Settings -> Advanced -> Enviroment Variables 

Click add

Set Name to ANDROID_HOME

Set path to the path to your sdk

If you dont know, go to yor sdk manager in Android Studio and it should tell you at the top

While here, make sure your JAVA_HOME path is set to your jdk\bin file location and do the same for the PATH Variable

Verify Changes and Close/Reopen Terminal
```
echo $PATH
```
## Install Node
Into command prompt, paste,

```
choco install nodejs.install
```

## Install React Native CLI
```
npm install -g react-native-cli
```
NOTE: React Native Docs mentions if error “Cannot find module 'npmlog’” try command
```
curl -0 -L https://npmjs.org/install.sh | sudo sh
```
OTHER ERRORS suggest node did not install properly

## Install Dependencies
Change directory to FieldNotebook (cd [directory])
```
npm install
```

## Setup Debugger Console
1. Before Enabling Remote JS Debugging
   - Open Chrome, open Developer Tools (CMD+Option+i)
   - Go to URL: http://localhost:8081/debugger-ui/

If failure to connect or continuously trying to connect and failing
- Stop JS Debugging CMD+M
- Reload URL
- Re-enable JS Debugging CMD+M
- Stop app Metro Builder CTRL+C
- Re-run app with below command

## Run App
```
react-native run-android
react-native run-ios
```





