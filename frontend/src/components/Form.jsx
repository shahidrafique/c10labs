"use client";
import HubspotForm from "react-hubspot-form";
import { useRef } from "react";

export default function Form({ region, portalId, formId, css, shouldResize = false }) {
  const resizeCount = useRef(0);

  const resizeOnFormReady = (form) => {
    new ResizeObserver(() => {
      if (resizeCount.current === 1) {
        form.style.height = form.getBoundingClientRect().height;
      } else if(resizeCount.current === 2) {
        form.style.height = 'unset';
      }
      resizeCount.current += 1;
    }).observe(form);
  };

  return (
    <HubspotForm
      region={region}
      portalId={portalId}
      formId={formId}
      css={css}
      loading={<div>Loading...</div>}
      onFormReady={shouldResize && resizeOnFormReady}
    />
  );
}
