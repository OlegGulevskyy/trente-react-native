import { OnboardingNavigator, useOnboardingNavigation } from "../navigation";
import { AccountTypeSelection } from "../screens/AccountTypeSelection";
import { MusicPrefsSelection } from "../screens/MusicPrefsSelection";
import { useAppHeader } from "../../../hooks/useAppHeader";

export const Onboarding = () => {
  const navigation = useOnboardingNavigation();
  const { headerOptions } = useAppHeader({
    onPressBack: () => navigation.goBack(),
  });

  return (
    <OnboardingNavigator.Navigator screenOptions={headerOptions}>
      <OnboardingNavigator.Screen
        name="AccountType"
        component={AccountTypeSelection}
      />
      <OnboardingNavigator.Screen
        name="MusicPreference"
        component={MusicPrefsSelection}
      />
    </OnboardingNavigator.Navigator>
  );
};
