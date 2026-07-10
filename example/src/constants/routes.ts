import { StackScreenName } from '../enums/StackScreenName';
import { WelcomeScreen } from '../screens/WelcomeScreen';
import { Route } from '../interfaces/Route';
import { MenuScreen } from '../screens/MenuScreen';
import { CalendarScreen } from '../screens/CalendarScreen';
import { ButtonScreen } from '../screens/ButtonScreen';
import { CheckBoxScreen } from '../screens/CheckBoxScreen';
import { ComboBoxScreen } from '../screens/ComboBoxScreen';
import { ProgressBarScreen } from '../screens/ProgressBarScreen';
import { RadioButtonScreen } from '../screens/RadioButtonScreen';
import { SliderScreen } from '../screens/SliderScreen';

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
import EyedropperIcon from '../assets/icons/eyedropper-variant-custom.png';

// Icon Dark
import HomeDarkIcon from '../assets/icons-dark/home.png';
import ViewListDarkIcon from '../assets/icons-dark/view-list-outline.png';
import CalendarDarkIcon from '../assets/icons-dark/calendar.png';
import ButtonDarkIcon from '../assets/icons-dark/button-cursor-custom.png';
import CheckboxDarkIcon from '../assets/icons-dark/checkbox-outline-custom.png';
import FormDropdownDarkIcon from '../assets/icons-dark/form-dropdown-custom.png';
import ProgressDarkIcon from '../assets/icons-dark/progress-helper-custom.png';
import RadioboxDarkIcon from '../assets/icons-dark/radiobox-marked-custom.png';
import SlideDarkIcon from '../assets/icons-dark/tune-variant-custom.png';
import EyedropperDarkIcon from '../assets/icons-dark/eyedropper-variant-custom.png';
import { ColorDialogScreen } from '../screens/ColorDialogScreen';
import { ErrorPromptScreen } from '../screens/ErrorPromptScreen';

export const Routers: Route[] = [
  {
    icon: HomeIcon,
    iconDark: HomeDarkIcon,
    label: 'Welcome',
    route: StackScreenName.WELCOME,
    component: WelcomeScreen,
  },
  {
    icon: ViewListIcon,
    iconDark: ViewListDarkIcon,
    label: 'Menu & Action',
    route: StackScreenName.MENU_ACTION,
    component: MenuScreen,
  },
  {
    icon: CalendarIcon,
    iconDark: CalendarDarkIcon,
    label: 'Calendar',
    route: StackScreenName.CALENDAR,
    component: CalendarScreen,
  },
  {
    icon: ButtonIcon,
    iconDark: ButtonDarkIcon,
    label: 'Button',
    route: StackScreenName.BUTTON,
    component: ButtonScreen,
  },
  {
    icon: CheckboxIcon,
    iconDark: CheckboxDarkIcon,
    label: 'CheckBox',
    route: StackScreenName.CHECKBOX,
    component: CheckBoxScreen,
  },
  {
    icon: FormDropdownIcon,
    iconDark: FormDropdownDarkIcon,
    label: 'ComboBox',
    route: StackScreenName.COMBOBOX,
    component: ComboBoxScreen,
  },
  {
    icon: ProgressIcon,
    iconDark: ProgressDarkIcon,
    label: 'ProgressBar',
    route: StackScreenName.PROGRESSBAR,
    component: ProgressBarScreen,
  },
  {
    icon: RadioboxIcon,
    iconDark: RadioboxDarkIcon,
    label: 'RadioButton',
    route: StackScreenName.RADIOBUTTON,
    component: RadioButtonScreen,
  },
  {
    icon: SlideIcon,
    iconDark: SlideDarkIcon,
    label: 'Slider',
    route: StackScreenName.SLIDER,
    component: SliderScreen,
  },
  {
    icon: EyedropperIcon,
    iconDark: EyedropperDarkIcon,
    label: 'Color Dialog',
    route: StackScreenName.COLOR_DIALOG,
    component: ColorDialogScreen,
  },
  {
    icon: EyedropperIcon,
    iconDark: EyedropperDarkIcon,
    label: 'Error Prompt',
    route: StackScreenName.ERROR_PROMPT,
    component: ErrorPromptScreen,
  },
];
