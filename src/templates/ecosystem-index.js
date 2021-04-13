import React from 'react';
import PropTypes from 'prop-types';
import { css } from '@emotion/core';
import EcosystemHomepageTiles from '../components/EcosystemHomepageTiles';
import MainColumn from '../components/MainColumn';
import Sidenav from '../components/Sidenav';
import { TEMPLATE_CLASSNAME } from '../constants';
import EcosystemHomepageStyles from '../styles/ecosystem-homepage.module.css';

const EcosystemIndex = ({ className, pageContext: { page } }) => (
  <>
    <Sidenav page={page} />
    <div className={`${TEMPLATE_CLASSNAME} ${className}`}>
      <MainColumn className={EcosystemHomepageStyles.fullWidth}>
        <div
          className={[EcosystemHomepageStyles.document, 'body'].join(' ')}
          css={css`
            margin-left: 25px;
          `}
        >
          <section
            css={css`
              padding-bottom: 50px;
            `}
          >
            <h1>Start Developing with MongoDB</h1>
            <p>Connect your application to your database with one of our official libraries.</p>
            <p>
              The following libraries are officially supported by MongoDB. They are actively maintained, support new
              MongoDB features, and receive bug fixes, performance enhancements, and security patches.
            </p>
            <EcosystemHomepageTiles />
            <p>
              Don’t see your desired language? Browse a list of{' '}
              <a href="https://docs.mongodb.com/ecosystem/drivers/community-supported-drivers/">
                community supported libraries
              </a>
              .
            </p>
          </section>
        </div>
      </MainColumn>
    </div>
  </>
);

EcosystemIndex.propTypes = {
  className: PropTypes.string,
  pageContext: PropTypes.shape({
    page: PropTypes.object.isRequired,
  }).isRequired,
};

export default EcosystemIndex;
