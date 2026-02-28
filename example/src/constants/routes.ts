import { StackScreenName } from "../enums/StackScreenName";
import { WelcomeScreen } from "../screens/WelcomeScreen";
import { Route } from "../interfaces/Route";
import { MenuScreen } from "../screens/MenuScreen";
import { CalendarScreen } from "../screens/CalendarScreen";
import { ButtonScreen } from "../screens/ButtonScreen";
import { CheckBoxScreen } from "../screens/CheckBoxScreen";
import { ComboBoxScreen } from "../screens/ComboBoxScreen";
import { ProgressBarScreen } from "../screens/ProgressBarScreen";
import { RadioButtonScreen } from "../screens/RadioButtonScreen";
import { SliderScreen } from "../screens/SliderScreen";

// Icons
import HomeIcon from '../assets/icons/home.png';
import ViewListIcon from '../assets/icons/view-list-outline.png';
import CalendarIcon from '../assets/icons/calendar.png';
import ButtonIcon from '../assets/icons/button-cursor-custom.png';
import CheckboxIcon from '../assets/icons/checkbox-outline-custom.png';
import FormDropdownIcon from '../assets/icons/form-dropdown-custom.png';
import ProgressIcon from '../assets/icons/progress-helper-custom.png';
import RadioboxIcon from '../assets/icons/radiobox-marked-custom.png';
import SlideIcon from '../assets/icons/tune-variant-custom.png';


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
  {
    icon: ButtonIcon,
    label: 'Button',
    route: StackScreenName.BUTTON,
    component: ButtonScreen,
  },
  {
    icon: CheckboxIcon,
    label: 'CheckBox',
    route: StackScreenName.CHECKBOX,
    component: CheckBoxScreen,
  },
  {
    icon: FormDropdownIcon,
    label: 'ComboBox',
    route: StackScreenName.COMBOBOX,
    component: ComboBoxScreen,
  },
  {
    icon: ProgressIcon,
    label: 'ProgressBar',
    route: StackScreenName.PROGRESSBAR,
    component: ProgressBarScreen,
  },
  {
    icon: RadioboxIcon,
    label: 'RadioButton',
    route: StackScreenName.RADIOBUTTON,
    component: RadioButtonScreen,
  },
  {
    icon: SlideIcon,
    label: 'Slider',
    route: StackScreenName.SLIDER,
    component: SliderScreen,
  },
];