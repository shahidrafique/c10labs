import type { Schema, Attribute } from '@strapi/strapi';

export interface ButtonButton extends Schema.Component {
  collectionName: 'components_button_buttons';
  info: {
    displayName: 'Button';
    description: '';
  };
  attributes: {
    text: Attribute.String;
    href: Attribute.String;
    isDetailsButton: Attribute.Boolean;
  };
}

export interface CompanyCompany extends Schema.Component {
  collectionName: 'components_company_companies';
  info: {
    displayName: 'Company';
    description: '';
  };
  attributes: {
    name: Attribute.String;
    logo: Attribute.Media;
    href: Attribute.String;
  };
}

export interface InputInput extends Schema.Component {
  collectionName: 'components_input_inputs';
  info: {
    displayName: 'Input';
  };
  attributes: {
    label: Attribute.String;
    type: Attribute.String;
  };
}

export interface LinkLink extends Schema.Component {
  collectionName: 'components_link_links';
  info: {
    displayName: 'Link';
    description: '';
  };
  attributes: {
    title: Attribute.String;
    href: Attribute.String;
  };
}

export interface NewsletterNewsLetter extends Schema.Component {
  collectionName: 'components_newsletter_news_letters';
  info: {
    displayName: 'News Letter';
    description: '';
  };
  attributes: {
    title: Attribute.String;
    subtitle: Attribute.String;
    buttonText: Attribute.String;
    placeholder: Attribute.String;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'button.button': ButtonButton;
      'company.company': CompanyCompany;
      'input.input': InputInput;
      'link.link': LinkLink;
      'newsletter.news-letter': NewsletterNewsLetter;
    }
  }
}