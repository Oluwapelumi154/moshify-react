import React from 'react';

import {
  PrimaryBadge,
  SecondaryBadge,
  BadgeSection,
  BadgeContainer,
  Dollar
} from './Style';

const Badge = () => {
  return (
    <>
      <BadgeSection>
        <BadgeContainer>
          <PrimaryBadge>
            .com <Dollar>$9</Dollar>
          </PrimaryBadge>
          <SecondaryBadge>
            .sg<Dollar>$10</Dollar>
          </SecondaryBadge>
          <SecondaryBadge>
            .space<Dollar>$11</Dollar>
          </SecondaryBadge>
          <SecondaryBadge>
            .info<Dollar>$14</Dollar>
          </SecondaryBadge>
          <SecondaryBadge>
            .net<Dollar>$10</Dollar>
          </SecondaryBadge>
          <SecondaryBadge>
            .xyz<Dollar>$10</Dollar>
          </SecondaryBadge>
        </BadgeContainer>
      </BadgeSection>
    </>
  );
};

export default Badge;
