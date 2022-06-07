import { AdminConfig } from '@keystone-6/core/types';
import { WhiteScholarLogo } from './components/Logo';
import { CustomNavigation } from './components/CustomNavigation';

export const components: AdminConfig['components'] = {
  Logo: WhiteScholarLogo,
  Navigation: CustomNavigation,
};
