## IOS Installation
1. Install xcode
2. Create apple dev account
3. Open https://appstoreconnect.apple.com/login and login with apple dev account credentials
4. Go to my apps => click "plus"(top left corner),  => new app and fill the form (bundle id - get from xcode)
5. Open project folder and run 
```bash
yarn install
cd ios && pod install
```
6. Open ios project folder in xcode
7. Go to Signing & Capabilities and sign in
8. Choose Generic ion device in devices (top left corner)
9. Go to Product => Archive
10. Validate(accept all), then distribute app (accept all)
11. You can see your app in App Store Connect.
Info: Keychain access - > enter your computer pass.