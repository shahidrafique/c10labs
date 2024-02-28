"use client";
import HubspotForm from "react-hubspot-form";

export default function Form({ region, portalId, formId, css }) {
  return (
    <HubspotForm
      region={region}
      portalId={portalId}
      formId={formId}
      css={css}
      onSubmit={() => console.log("Submit!")}
      onReady={(form) => console.log("Form ready!")}
      loading={<div>Loading...</div>}
    />
  );
}
