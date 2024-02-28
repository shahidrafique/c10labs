"use client";
import HubspotForm from "react-hubspot-form";

export default function Form({ region, portalId, formId, css }) {
  return (
    <HubspotForm
      region={region}
      portalId={portalId}
      formId={formId}
      css={css}
      loading={<div>Loading...</div>}
    />
  );
}
