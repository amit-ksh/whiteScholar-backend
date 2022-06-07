/** @jsxRuntime classic */
/** @jsx jsx */

import {
  NavigationContainer,
  NavItem,
  ListNavItems,
} from '@keystone-6/core/admin-ui/components';
import type { NavigationProps } from '@keystone-6/core/admin-ui/components';
import { jsx } from '@keystone-ui/core';

export function CustomNavigation({
  authenticatedItem,
  lists,
}: NavigationProps) {
  return (
    <NavigationContainer authenticatedItem={authenticatedItem}>
      <NavItem href="/">Dashboard</NavItem>
      <ListNavItems lists={lists} />

      {/* Custom Routes */}
      <NavItem href="/contribution">Contribution</NavItem>
    </NavigationContainer>
  );
}
