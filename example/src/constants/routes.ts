import { StackScreenName } from "../enums/StackScreenName";
import { WelcomeScreen } from "../screens/WelcomeScreen";
import { Route } from "../interfaces/Route";
import { MenuScreen } from "../screens/MenuScreen";
import { CalendarScreen } from "../screens/CalendarScreen";

// Icons
import HomeIcon from '../assets/icons/home.png';
import ViewListIcon from '../assets/icons/view-list-outline.png';
import CalendarIcon from '../assets/icons/calendar.png';

export const Routers: Route[] = [
  {
    icon: HomeIcon,
    label: 'Welcome',
    route: StackScreenName.WELCOME,
    component: WelcomeScreen,
  },
  {
    icon: ViewListIcon,
    label: 'Menu & Action',
    route: StackScreenName.MENU_ACTION,
    component: MenuScreen,
  },
  {
    icon: CalendarIcon,
    label: 'Calendar',
    route: StackScreenName.CALENDAR,
    component: CalendarScreen,
  },
];