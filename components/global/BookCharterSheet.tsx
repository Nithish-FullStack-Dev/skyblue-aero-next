"use client";

import { useEffect, useMemo, useState } from "react";
import { createPortal } from "react-dom";
import { motion, AnimatePresence } from "framer-motion";
import { X, Plane } from "lucide-react";
import toast from "react-hot-toast";
import { Loader2 } from "lucide-react";

type BookCharterSheetProps = {
  isOpen: boolean;
  onClose: () => void;
};

type FormValues = {
  name: string;
  email: string;
  phone: string;
  departure: string;
  arriving: string;
  passengers: string;
  departureDate: string;
  returnDate: string;
  privacyAccepted: boolean;
};

type FormErrors = Partial<Record<keyof FormValues, string>>;

const fieldClassName = "min-w-0 border-b border-gray-300 pb-1.5";
const labelClassName = "text-[10px] md:text-xs font-semibold text-gray-600";
const inputClassName =
  "w-full bg-transparent outline-none text-gray-700 placeholder-gray-400 text-[13px] md:text-base";
const dateInputClassName =
  "w-full bg-transparent outline-none text-gray-700 text-[13px] md:text-base pr-6";
const errorClassName = "mt-1 text-[10px] md:text-xs text-red-500";

const initialValues: FormValues = {
  name: "",
  email: "",
  phone: "",
  departure: "",
  arriving: "",
  passengers: "",
  departureDate: "",
  returnDate: "",
  privacyAccepted: false,
};

const BookCharterSheet = ({
  isOpen,
  onClose,
}: BookCharterSheetProps) => {
  const [mounted, setMounted] = useState(false);
  const [isReturnFlight, setIsReturnFlight] = useState(false);
  const [formValues, setFormValues] = useState<FormValues>(initialValues);
  const [formErrors, setFormErrors] = useState<FormErrors>({});
  const [hasSubmitted, setHasSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (!isOpen || !mounted) return;

    const scrollY = window.scrollY;
    const body = document.body;
    const html = document.documentElement;

    const previousBodyPosition = body.style.position;
    const previousBodyTop = body.style.top;
    const previousBodyLeft = body.style.left;
    const previousBodyRight = body.style.right;
    const previousBodyWidth = body.style.width;
    const previousBodyOverflow = body.style.overflow;
    const previousBodyHeight = body.style.height;
    const previousBodyPaddingRight = body.style.paddingRight;

    const previousHtmlOverflow = html.style.overflow;
    const previousHtmlOverscrollBehavior = html.style.overscrollBehavior;
    const previousHtmlHeight = html.style.height;

    const scrollbarGap = window.innerWidth - html.clientWidth;

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") onClose();
    };

    html.style.overflow = "hidden";
    html.style.overscrollBehavior = "none";
    html.style.height = "100%";

    body.style.position = "fixed";
    body.style.top = `-${scrollY}px`;
    body.style.left = "0";
    body.style.right = "0";
    body.style.width = "100%";
    body.style.height = "100%";
    body.style.overflow = "hidden";

    if (scrollbarGap > 0) {
      body.style.paddingRight = `${scrollbarGap}px`;
    }

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);

      html.style.overflow = previousHtmlOverflow;
      html.style.overscrollBehavior = previousHtmlOverscrollBehavior;
      html.style.height = previousHtmlHeight;

      body.style.position = previousBodyPosition;
      body.style.top = previousBodyTop;
      body.style.left = previousBodyLeft;
      body.style.right = previousBodyRight;
      body.style.width = previousBodyWidth;
      body.style.height = previousBodyHeight;
      body.style.overflow = previousBodyOverflow;
      body.style.paddingRight = previousBodyPaddingRight;

      window.scrollTo(0, scrollY);
    };
  }, [isOpen, mounted, onClose]);

  useEffect(() => {
    if (!isReturnFlight) {
      setFormValues((prev) => ({
        ...prev,
        returnDate: "",
      }));

      setFormErrors((prev) => {
        const next = { ...prev };
        delete next.returnDate;
        return next;
      });
    }
  }, [isReturnFlight]);

  const isSubmitEnabled = useMemo(() => {
    return formValues.privacyAccepted;
  }, [formValues.privacyAccepted]);

  const validateForm = (values: FormValues, returnEnabled: boolean) => {
    const errors: FormErrors = {};

    if (!values.name.trim()) errors.name = "This field is required";
    if (!values.email.trim()) errors.email = "This field is required";
    if (!values.phone.trim()) errors.phone = "This field is required";
    if (!values.departure.trim()) errors.departure = "This field is required";
    if (!values.arriving.trim()) errors.arriving = "This field is required";
    if (!values.passengers.trim()) errors.passengers = "This field is required";
    if (!values.departureDate.trim()) {
      errors.departureDate = "This field is required";
    }
    if (returnEnabled && !values.returnDate.trim()) {
      errors.returnDate = "This field is required";
    }
    if (!values.privacyAccepted) {
      errors.privacyAccepted = "Please accept this to enable submit";
    }

    return errors;
  };

  const handleFieldChange = (
    field: keyof FormValues,
    value: string | boolean
  ) => {
    setFormValues((prev) => ({
      ...prev,
      [field]: value,
    }));

    if (hasSubmitted) {
      const updatedValues = {
        ...formValues,
        [field]: value,
      } as FormValues;

      setFormErrors(validateForm(updatedValues, isReturnFlight));
    }
  };

  const handlePhoneChange = (value: string) => {
    const sanitizedValue = value.replace(/[A-Za-z]/g, "");
    handleFieldChange("phone", sanitizedValue);
  };

 const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
  event.preventDefault();
  setHasSubmitted(true);

  const errors = validateForm(formValues, isReturnFlight);
  setFormErrors(errors);

  if (Object.keys(errors).length > 0) return;

  setSubmitting(true);

  try {
    await fetch(
      "https://script.google.com/macros/s/AKfycbz7owVzSx_BwRm2MSTn6TYEcrOsev3BaAfutx7yKovCJWq6sAxabn-j8gLVvDwk7ccx/exec",
      {
        method: "POST",
        mode: "no-cors", // 🔥 IMPORTANT
        body: JSON.stringify({
          ...formValues,
          formType: "Book Charter",
          timestamp: new Date().toISOString(),
        }),
      }
    );

    toast.success("Charter request submitted ✈️");

    setFormValues(initialValues);
    setHasSubmitted(false);

  } catch (error) {
    console.error(error);
    toast.error("Submission failed ❌");
  }

  setSubmitting(false);
};

  if (!mounted) return null;

  return createPortal(
    <>
      <AnimatePresence>
        {isOpen && (
          <>
            <motion.div
              className="fixed inset-0 z-[9998] bg-black/40"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={onClose}
            />

            <motion.div
              initial={{ y: "100%" }}
              animate={{ y: 0 }}
              exit={{ y: "100%" }}
              transition={{ duration: 0.45, ease: "easeInOut" }}
              className="fixed inset-x-0 bottom-0 z-[9999] flex items-end justify-center"
            >
              <div className="relative w-full max-w-7xl rounded-t-[26px] bg-[#EDEDED] shadow-xl">
                <button
                  onClick={onClose}
                  className="absolute -top-5 right-4 z-20 flex h-10 w-10 items-center justify-center rounded-full bg-white shadow md:right-6"
                  aria-label="Close"
                >
                  <X size={18} />
                </button>

                <div
                  className="no-scrollbar overflow-y-auto px-4 pb-4 pt-4 sm:px-6 md:px-8 md:pb-6 md:pt-6 lg:px-10"
                  style={{
                    maxHeight: "92svh",
                    scrollbarWidth: "none",
                    msOverflowStyle: "none",
                    WebkitOverflowScrolling: "touch",
                    overscrollBehavior: "contain",
                  }}
                >
                  <h2 className="mb-4 pr-12 text-xl font-semibold md:mb-6 md:text-4xl">
                    Book a Charter
                  </h2>

                  <form onSubmit={handleSubmit} noValidate className="space-y-4">
                    <div className="grid grid-cols-2 gap-x-4 gap-y-4 md:gap-x-8 md:gap-y-5 xl:grid-cols-5">
                      <div className={fieldClassName}>
                        <label htmlFor="name" className={labelClassName}>
                          NAME
                        </label>
                        <input
                          id="name"
                          name="name"
                          type="text"
                          value={formValues.name}
                          onChange={(event) =>
                            handleFieldChange("name", event.target.value)
                          }
                          placeholder="Type..."
                          className={inputClassName}
                          required
                        />
                        {formErrors.name && (
                          <p className={errorClassName}>{formErrors.name}</p>
                        )}
                      </div>

                      <div className={fieldClassName}>
                        <label htmlFor="email" className={labelClassName}>
                          EMAIL
                        </label>
                        <input
                          id="email"
                          name="email"
                          type="email"
                          value={formValues.email}
                          onChange={(event) =>
                            handleFieldChange("email", event.target.value)
                          }
                          placeholder="Email..."
                          className={inputClassName}
                          required
                        />
                        {formErrors.email && (
                          <p className={errorClassName}>{formErrors.email}</p>
                        )}
                      </div>

                      <div className={fieldClassName}>
                        <label htmlFor="phone" className={labelClassName}>
                          PHONE
                        </label>
                        <input
                          id="phone"
                          name="phone"
                          type="text"
                          inputMode="tel"
                          value={formValues.phone}
                          onChange={(event) => handlePhoneChange(event.target.value)}
                          placeholder="Phone..."
                          className={inputClassName}
                          required
                        />
                        {formErrors.phone && (
                          <p className={errorClassName}>{formErrors.phone}</p>
                        )}
                      </div>

                      <div className={fieldClassName}>
                        <label htmlFor="departure" className={labelClassName}>
                          DEPARTURE
                        </label>
                        <input
                          id="departure"
                          name="departure"
                          type="text"
                          value={formValues.departure}
                          onChange={(event) =>
                            handleFieldChange("departure", event.target.value)
                          }
                          placeholder="City..."
                          className={inputClassName}
                          required
                        />
                        {formErrors.departure && (
                          <p className={errorClassName}>{formErrors.departure}</p>
                        )}
                      </div>

                      <div className={fieldClassName}>
                        <label htmlFor="arriving" className={labelClassName}>
                          ARRIVING
                        </label>
                        <input
                          id="arriving"
                          name="arriving"
                          type="text"
                          value={formValues.arriving}
                          onChange={(event) =>
                            handleFieldChange("arriving", event.target.value)
                          }
                          placeholder="City..."
                          className={inputClassName}
                          required
                        />
                        {formErrors.arriving && (
                          <p className={errorClassName}>{formErrors.arriving}</p>
                        )}
                      </div>

                      <div className={fieldClassName}>
                        <label htmlFor="passengers" className={labelClassName}>
                          PASSENGERS
                        </label>
                        <input
                          id="passengers"
                          name="passengers"
                          type="number"
                          min="1"
                          value={formValues.passengers}
                          onChange={(event) =>
                            handleFieldChange("passengers", event.target.value)
                          }
                          placeholder="Qty..."
                          className={inputClassName}
                          required
                        />
                        {formErrors.passengers && (
                          <p className={errorClassName}>{formErrors.passengers}</p>
                        )}
                      </div>

                      <div className={fieldClassName}>
                        <label htmlFor="departureDate" className={labelClassName}>
                          DEPARTURE DATE
                        </label>
                        <input
                          id="departureDate"
                          name="departureDate"
                          type="date"
                          value={formValues.departureDate}
                          onChange={(event) =>
                            handleFieldChange("departureDate", event.target.value)
                          }
                          className={dateInputClassName}
                          required
                        />
                        {formErrors.departureDate && (
                          <p className={errorClassName}>
                            {formErrors.departureDate}
                          </p>
                        )}
                      </div>

                      <div className={fieldClassName}>
                        <div className="flex items-center justify-between gap-2">
                          <div className="min-w-0">
                            <label htmlFor="return-toggle" className={labelClassName}>
                              RETURN
                            </label>
                            <p className="text-[13px] text-gray-400">
                              {isReturnFlight ? "Yes" : "No"}
                            </p>
                          </div>

                          <button
                            id="return-toggle"
                            type="button"
                            aria-pressed={isReturnFlight}
                            onClick={() => setIsReturnFlight((prev) => !prev)}
                            className={`relative h-5 w-10 shrink-0 rounded-full transition-colors ${
                              isReturnFlight ? "bg-[#2E2523]" : "bg-gray-300"
                            }`}
                          >
                            <span
                              className={`absolute top-0.5 h-4 w-4 rounded-full bg-white shadow transition-all ${
                                isReturnFlight ? "left-[20px]" : "left-0.5"
                              }`}
                            />
                          </button>
                        </div>
                      </div>

                      {isReturnFlight ? (
                        <div className={fieldClassName}>
                          <label htmlFor="returnDate" className={labelClassName}>
                            RETURN DATE
                          </label>
                          <input
                            id="returnDate"
                            name="returnDate"
                            type="date"
                            value={formValues.returnDate}
                            onChange={(event) =>
                              handleFieldChange("returnDate", event.target.value)
                            }
                            className={dateInputClassName}
                            required={isReturnFlight}
                          />
                          {formErrors.returnDate && (
                            <p className={errorClassName}>
                              {formErrors.returnDate}
                            </p>
                          )}
                        </div>
                      ) : (
                        <div className="flex items-end justify-end xl:justify-start">
                          <button
  type="submit"
  disabled={!isSubmitEnabled || submitting}
  className={`flex h-10 min-w-[104px] items-center justify-center gap-2 rounded-full px-3 text-white transition md:h-12 md:min-w-[118px] md:px-4 ${
    isSubmitEnabled && !submitting
      ? "bg-[#2E2523] hover:scale-105"
      : "cursor-not-allowed bg-[#2E2523]/40"
  }`}
>
  {submitting ? (
    <Loader2 className="animate-spin" size={16} />
  ) : (
    <Plane size={16} />
  )}

  <span className="text-xs md:text-sm">
    {submitting ? "Submitting..." : "Submit"}
  </span>
</button>
                        </div>
                      )}

                      {isReturnFlight && (
                        <div className="flex items-end justify-end xl:justify-start">
                          <button
  type="submit"
  disabled={!isSubmitEnabled || submitting}
  className={`flex h-10 min-w-[104px] items-center justify-center gap-2 rounded-full px-3 text-white transition md:h-12 md:min-w-[118px] md:px-4 ${
    isSubmitEnabled && !submitting
      ? "bg-[#2E2523] hover:scale-105"
      : "cursor-not-allowed bg-[#2E2523]/40"
  }`}
>
  {submitting ? (
    <Loader2 className="animate-spin" size={16} />
  ) : (
    <Plane size={16} />
  )}

  <span className="text-xs md:text-sm">
    {submitting ? "Submitting..." : "Submit"}
  </span>
</button>
                        </div>
                      )}
                    </div>

                    <div className="rounded-2xl bg-white/40 px-3 py-2.5 sm:px-4 sm:py-3">
                      <label className="flex items-start gap-2 text-[10px] text-gray-500 sm:text-sm">
                        <input
                          type="checkbox"
                          checked={formValues.privacyAccepted}
                          onChange={(event) =>
                            handleFieldChange(
                              "privacyAccepted",
                              event.target.checked
                            )
                          }
                          className="mt-0.5 shrink-0"
                          required
                        />
                        <span>
                          BY SUBMITTING, YOU AGREE TO OUR{" "}
                          <span className="underline">PRIVACY POLICY</span>
                        </span>
                      </label>

                      {formErrors.privacyAccepted && (
                        <p className={errorClassName}>
                          {formErrors.privacyAccepted}
                        </p>
                      )}
                    </div>
                  </form>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>

      <style>{`
        .no-scrollbar::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </>,
    document.body
  );
};

export default BookCharterSheet;