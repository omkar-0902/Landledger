import React from "react";
import { Modal } from "./Modal";
import { useAuth } from "../state/auth";

export function ContactGate() {
  const [open, setOpen] = React.useState(false);
  const [documentType, setDocumentType] = React.useState("aadhaar");
  const { contactVerified, verifyContact } = useAuth();

  const closeModal = React.useCallback(() => {
    setOpen(false);
  }, []);

  return (
    <>
      <section className="mt-16 rounded-lg border border-outline-variant/10 bg-surface-container-low p-8 text-center">
        <div className="mx-auto max-w-2xl">
          <span className="material-symbols-outlined text-primary text-4xl mb-4" aria-hidden="true">
            lock
          </span>
          <h3 className="text-3xl font-headline font-bold mb-3">Owner Contact Access</h3>
          <p className="text-on-surface-variant text-sm leading-relaxed mb-8">
            Contact details are protected. Verify with one government document number to view masked contact information.
          </p>
          <button
            type="button"
            onClick={() => setOpen(true)}
            className="mx-auto flex items-center justify-center gap-3 rounded-md bg-gradient-to-r from-primary to-primary-container px-10 py-4 font-headline text-sm font-bold uppercase tracking-widest text-on-primary transition-transform active:scale-[0.98]"
          >
            <span className="material-symbols-outlined text-lg" aria-hidden="true">
              lock
            </span>
            View Contacts
          </button>
        </div>
      </section>

      <Modal open={open} onClose={closeModal} title={contactVerified ? "Owner Contact Details" : "Document Authentication"}>
        {contactVerified ? (
          <div className="space-y-5">
            <p className="text-sm leading-relaxed text-on-surface-variant">
              Verification accepted. Owner contact details are now visible for this session.
            </p>
            <div className="space-y-3">
              <div className="rounded-md bg-surface-container-lowest p-4 border border-outline-variant/10">
                <span className="block text-[10px] font-bold uppercase tracking-widest text-outline mb-1">Owner</span>
                <p className="text-lg font-bold text-on-surface">Ramesh</p>
              </div>
              <div className="rounded-md bg-surface-container-lowest p-4 border border-outline-variant/10">
                <span className="block text-[10px] font-bold uppercase tracking-widest text-outline mb-1">Mobile Number</span>
                <p className="text-lg font-mono font-bold text-on-surface">+91 98765 43214</p>
              </div>
              <div className="rounded-md bg-surface-container-lowest p-4 border border-outline-variant/10">
                <span className="block text-[10px] font-bold uppercase tracking-widest text-outline mb-1">Alternate Contact</span>
                <p className="text-lg font-mono font-bold text-on-surface">+91 80955 55102</p>
              </div>
            </div>
            <button
              type="button"
              onClick={closeModal}
              className="w-full rounded-md border border-outline-variant/40 px-6 py-3 font-semibold transition-colors hover:bg-surface-container-low active:scale-[0.98]"
            >
              Close
            </button>
          </div>
        ) : (
          <form
            className="space-y-5"
            onSubmit={(event) => {
              event.preventDefault();
              verifyContact();
            }}
          >
            <p className="text-sm leading-relaxed text-on-surface-variant">
              Enter any one document number. Contact details and sensitive masked fields will be highlighted after this step.
            </p>
            <div className="space-y-2">
              <label className="text-[10px] font-bold uppercase tracking-widest text-outline" htmlFor="documentType">
                Document Type
              </label>
              <select
                id="documentType"
                value={documentType}
                onChange={(event) => setDocumentType(event.target.value)}
                className="w-full rounded-md border border-outline-variant/20 bg-surface-container-lowest px-4 py-3 text-on-surface focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
              >
                <option value="aadhaar">Aadhaar Card</option>
                <option value="pan">PAN Card</option>
                <option value="dl">Driving Licence</option>
              </select>
            </div>
            <div className="space-y-2">
              <label className="text-[10px] font-bold uppercase tracking-widest text-outline" htmlFor="documentNumber">
                {documentType === "aadhaar" ? "Aadhaar Number" : documentType === "pan" ? "PAN Number" : "DL Number"}
              </label>
              <input
                id="documentNumber"
                required
                minLength={4}
                className="w-full rounded-md border border-outline-variant/20 bg-surface-container-lowest px-4 py-3 font-mono text-on-surface placeholder:text-outline/50 focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
                placeholder={documentType === "aadhaar" ? "XXXX XXXX XXXX" : documentType === "pan" ? "ABCDE1234F" : "KA00 00000000000"}
                type="text"
              />
            </div>
            <button
              type="submit"
              className="w-full rounded-md bg-gradient-to-r from-primary to-primary-container px-6 py-3 font-headline font-bold uppercase tracking-widest text-on-primary transition-transform active:scale-[0.98]"
            >
              Authenticate Document
            </button>
          </form>
        )}
      </Modal>
    </>
  );
}
