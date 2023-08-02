import React from 'react';
import { Segment, Container, Menu } from 'semantic-ui-react';

const Footer = () => {
  return (
    <Segment
      inverted
      vertical
      style={{
        padding: '2em 0em',
        backgroundColor: 'black',
        position: 'fixed',
        bottom: 0,
        width: '100%',
        left: 0,
      }}
    >
      <Container>
        <Menu
          inverted
          secondary
          style={{ display: 'flex', justifyContent: 'center' }}
        >
          <Menu.Item as="a" href="/about" style={{ color: 'white' }}>
            About
          </Menu.Item>
          <Menu.Item as="a" href="/contacts" style={{ color: 'white' }}>
            Contacts
          </Menu.Item>
          <Menu.Item as="a" href="/help" style={{ color: 'white' }}>
            Help
          </Menu.Item>
        </Menu>
        {/* Add the contacts information */}
        <p style={{ color: 'white', marginTop: '1em', textAlign: 'center' }}>
          &copy; 2023 Your E-commerce Platform. All rights reserved.
        </p>
        <p style={{ color: 'white', marginTop: '0.5em', textAlign: 'center' }}>
          Contacts: +544700111235 | City: Nairobi | Street: 00100 Moi Avenue
        </p>
      </Container>
    </Segment>
  );
};

export default Footer;
