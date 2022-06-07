/** @jsxRuntime classic */
/** @jsx jsx */

import { PageContainer } from '@keystone-6/core/admin-ui/components';
import { jsx, Heading } from '@keystone-ui/core';

export default function Contribution() {
  return (
    <PageContainer header={<Heading type="h2">Contribution</Heading>}>
      <h1>This is a custom Admin UI Page</h1>
      <p>It can be accessed via the route `/contribution`</p>
    </PageContainer>
  );
}
