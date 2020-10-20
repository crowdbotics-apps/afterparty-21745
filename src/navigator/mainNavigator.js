import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import UserProfile151653Navigator from '../features/UserProfile151653/navigator';
import Tutorial151652Navigator from '../features/Tutorial151652/navigator';
import NotificationList151624Navigator from '../features/NotificationList151624/navigator';
import Settings151623Navigator from '../features/Settings151623/navigator';
import Settings151615Navigator from '../features/Settings151615/navigator';
import UserProfile151613Navigator from '../features/UserProfile151613/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {

    //@BlueprintNavigationInsertion
UserProfile151653: { screen: UserProfile151653Navigator },
Tutorial151652: { screen: Tutorial151652Navigator },
NotificationList151624: { screen: NotificationList151624Navigator },
Settings151623: { screen: Settings151623Navigator },
Settings151615: { screen: Settings151615Navigator },
UserProfile151613: { screen: UserProfile151613Navigator },

    /** new navigators can be added here */
    SplashScreen: {
      screen: SplashScreen
    }
};

const DrawerAppNavigator = createDrawerNavigator(
  {
    ...AppNavigator,
  },
  {
    contentComponent: SideMenu
  },
);

const AppContainer = createAppContainer(DrawerAppNavigator);

export default AppContainer;
