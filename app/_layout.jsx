import { ClerkProvider } from "@clerk/clerk-expo";
import { Slot } from 'expo-router';
import { tokenCache } from '@clerk/clerk-expo/token-cache';


export default function RootLayout() {
  useFonts({
    outfit: require("./../assets/fonts/Outfit-Regular.ttf"),
    "outfit-medium": require("./../assets/fonts/Outfit-Medium.ttf"),
    "outfit-bold": require("./../assets/fonts/Outfit-Bold.ttf"),
  });
  
  return (
    <ClerkProvider 
      tokenCache={tokenCache} 
      publishableKey={process.env.EXPO_PUBLIC_CLERK_PUBLISHABLE_KEY    
     }>
      <Slot />
    </ClerkProvider>
  )
}
